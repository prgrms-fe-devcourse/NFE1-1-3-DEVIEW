import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyNotifications } from "@services/notification/getMyNotifications";
import { useUserStore } from "@stores/userStore";
import { useSocketStore } from "@stores/socketStore";

export const useNotifications = () => {
  const { isLoggedIn, userInfo } = useUserStore();
  const { socket } = useSocketStore();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getMyNotifications"],
    queryFn: () =>
      getMyNotifications({
        page: 1,
        limit: 100
      }),
    enabled: isLoggedIn
  });

  useEffect(() => {
    if (socket) {
      socket.on("newNotification", () => {
        queryClient.invalidateQueries({ queryKey: ["getMyNotifications"] });
      });
      socket.on("adminNotification", (data) => {
        if (userInfo?.role === "admin") {
          queryClient.invalidateQueries({ queryKey: ["getMyNotifications"] });
          console.log(data);
        }
      });
    }
    return () => {
      if (socket) {
        socket.off("newNotification");
      }
    };
  }, [socket, queryClient, userInfo?.role]);

  return { data, isLoading, error, queryClient };
};

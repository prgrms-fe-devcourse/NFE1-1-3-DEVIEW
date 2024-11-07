import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNotification } from "@services/notification/deleteNotification";
import { readNotification } from "@services/notification/readNotification";
import { readAllNotifications } from "@services/notification/readAllNotifications";
import { TNotification } from "@customTypes/notification";
import { Dispatch, SetStateAction } from "react";

export const useNotificationMutations = (
  setNotifications: Dispatch<SetStateAction<TNotification[]>>,
  onReadAll: () => void
) => {
  const queryClient = useQueryClient();

  const { mutate: deleteNotificationMutate } = useMutation({
    mutationFn: deleteNotification,
    onSuccess: (_, deletedNotification) => {
      setNotifications((prev) => prev.filter((notification) => notification.id !== deletedNotification.notificationId));
      queryClient.invalidateQueries({ queryKey: ["getMyNotifications"] });
    }
  });

  const { mutate: readNotificationMutate } = useMutation({
    mutationFn: readNotification,
    onSuccess: (_, readNotification) => {
      setNotifications((prev) =>
        prev.map((notification) =>
          notification.id === readNotification.notificationId ? { ...notification, read: true } : notification
        )
      );
      queryClient.invalidateQueries({ queryKey: ["getMyNotifications"] });
    }
  });

  const { mutate: readAllNotificationsMutate } = useMutation({
    mutationFn: readAllNotifications,
    onSuccess: () => {
      setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })));
      queryClient.invalidateQueries({ queryKey: ["getMyNotifications"] });
      onReadAll();
    }
  });

  return {
    deleteNotificationMutate,
    readNotificationMutate,
    readAllNotificationsMutate
  };
};

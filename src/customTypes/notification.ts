import { TPost } from "@customTypes/post";

export type TNotification = {
  id: string;
  post: Pick<TPost, "_id">;
  title: string;
  content: string;
  isRead: boolean;
  createdAt: string;
  sender: {
    id: string;
    userId: string;
  };
  // image:string
};

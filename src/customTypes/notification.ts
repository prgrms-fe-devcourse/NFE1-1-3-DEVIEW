export type TNotification = {
  id: string;
  postId: string;
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

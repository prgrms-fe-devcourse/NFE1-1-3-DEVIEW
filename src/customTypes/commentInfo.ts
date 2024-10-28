export type CommentInfo = {
  _id: string;
  post_id: string;
  author: string;
  content: string;
  created_at: string;
  recommend: number;
  post_title?: string;
};

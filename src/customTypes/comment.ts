export type Comment = {
  _id: string;
  postId: string;
  content: string;
  author: string;
  thumbsCount: number;
  createdAt: string;
  updatedAt: string;
  __v: string;
  thumbed: boolean;
};

export type CommonCommentRequestProps = Pick<Comment, "postId" | "content"> & {
  commentId: string;
  page: number;
  limit: number;
};

export type CommonCommentResponseProps = {
  comments: Comment[];
  currentPage: number;
  totalPages: number;
  totalComments: number;
};

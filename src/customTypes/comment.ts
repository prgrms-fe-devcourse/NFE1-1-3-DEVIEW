export type TComment = {
  id: string;
  postId: string;
  content: string;
  author: {
    _id: string;
    id: string;
    userId: string; // userId 닉네임
  };
  thumbsCount: number;
  createdAt: string;
  updatedAt: string;
  __v: string;
  thumbed: boolean;
  isMine: boolean;
  postTitle?: string;
  _id: string;
};

export type CommonCommentRequestProps = Pick<TComment, "postId" | "content"> & {
  userId: string;
  commentId: string;
};

export type CommonCommentResponseProps = {
  comments: TComment[];
  currentPage: number;
  totalPages: number;
  totalComments: number;
};

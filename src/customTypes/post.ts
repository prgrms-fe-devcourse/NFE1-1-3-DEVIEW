export type TPost = {
  _id: string;
  title: string;
  content: string;
  author: {
    _id: string;
    username: string;
  };
  devDependencies: string[];
  likesCount: number;
  viewsCount: number;
  scrapsCount: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TPostDetail = TPost & {
  liked: boolean;
  scraped: boolean;
};

export type CommonPostRequestProps = Pick<TPost, "title" | "content" | "devDependencies"> & {
  postId: string;
  page: number;
  limit: number;
};

export type CommonPostResponseProps = {
  posts: TPost[];
  scraps: TPost[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
};

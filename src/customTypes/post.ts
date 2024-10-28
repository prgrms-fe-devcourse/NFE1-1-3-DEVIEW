export type Post = {
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

export type PostDetail = Post & {
  liked: boolean;
  scraped: boolean;
};

export type CommonPostRequestProps = Pick<Post, "title" | "content" | "devDependencies"> & {
  postId: string;
  page: number;
  limit: number;
};

export type CommonPostResponseProps = {
  posts: Post[];
  scraps: Post[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
};

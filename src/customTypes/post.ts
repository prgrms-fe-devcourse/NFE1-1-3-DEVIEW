import { DEV_DEPENDENCIES_LIST } from "@constants/devDependenciesList";

export type DevDependencies = {
  dependency: (typeof DEV_DEPENDENCIES_LIST)[number];
  version: string;
}[];

export type TPost = {
  _id: string;
  title: string;
  content: string;
  author: {
    _id: string;
    username: string;
  };
  devDependencies: DevDependencies[];
  likesCount: number;
  viewsCount: number;
  scrapsCount: number;
  commentsCount: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TPostDetail = TPost & {
  liked: boolean;
  scraped: boolean;
  isAuthor: boolean;
};

export type CommonPostRequestProps = Pick<TPost, "title" | "content" | "devDependencies"> & {
  postId: string;
};

export type CommonPostResponseProps = {
  posts: TPost[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
};

import { DEV_DEPENDENCIES_LIST } from "@constants/devDependenciesList";

export type DevDependency = (typeof DEV_DEPENDENCIES_LIST)[number];

export type DevDependencies = { dependency: DevDependency; version: string }[];

export type DevDependenciesList = {
  // id: number;
  dependency: DevDependency;
  version: string;
}[];

export type TPost = {
  _id: string;
  title: string;
  detail: string;
  author: {
    _id: string;
    username: string;
  };
  code: string;
  devDependencies: DevDependencies;
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

export type CommonPostRequestProps = Pick<TPost, "title" | "detail" | "devDependencies" | "code"> & {
  postId: string;
};

export type CommonPostResponseProps = {
  posts: TPost[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
};

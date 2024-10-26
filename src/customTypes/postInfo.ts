import { DEV_DEPENDENCIES_LIST } from "@constants/DevDependenciesList";

export type DevDependencies = (typeof DEV_DEPENDENCIES_LIST)[number];

export type PostInfo = {
  _id: number;
  title: string;
  devDependencies: DevDependencies[];
  content: string;
  author: string;
  created_at: Date;
  recommend: number;
  comment: number;
  view: number;
};

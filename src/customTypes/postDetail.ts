export type postDetailInfo = {
  title: string;
  content: string;
  code: string;
  versions: {
    id: string;
    lan: string;
    version: string;
  }[];
};
export type PostMeta = {
  createdAt: string;
  today: string;
  views: number;
  replies: number;
  id: string | number | undefined;
};
export type TechVersion = {
  id: string;
  lan: string;
  version: string;
};

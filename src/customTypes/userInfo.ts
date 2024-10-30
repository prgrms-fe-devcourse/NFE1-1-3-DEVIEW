import { GROUP_LIST } from "@constants/groupList";

export type UserInfo = {
  userId: string;
  username: string;
  group: (typeof GROUP_LIST)[keyof typeof GROUP_LIST];
};

import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};

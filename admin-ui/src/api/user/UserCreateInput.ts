import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  password: string;
  roles: InputJsonValue;
  username: string;
};

import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  id: string;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

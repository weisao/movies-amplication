import { SortOrder } from "../../util/SortOrder";

export type MovieOrderByInput = {
  createdAt?: SortOrder;
  describe?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};

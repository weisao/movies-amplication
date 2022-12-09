import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MovieWhereInput = {
  describe?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};

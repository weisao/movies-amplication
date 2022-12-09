import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MoviesTypeWhereInput = {
  id?: StringFilter;
  remark?: StringNullableFilter;
  typename?: StringFilter;
};

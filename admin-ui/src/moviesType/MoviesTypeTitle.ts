import { MoviesType as TMoviesType } from "../api/moviesType/MoviesType";

export const MOVIESTYPE_TITLE_FIELD = "typename";

export const MoviesTypeTitle = (record: TMoviesType): string => {
  return record.typename || record.id;
};

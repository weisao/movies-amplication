import { Movie as TMovie } from "../api/movie/Movie";

export const MOVIE_TITLE_FIELD = "name";

export const MovieTitle = (record: TMovie): string => {
  return record.name || record.id;
};

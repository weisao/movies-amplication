import { MoviesTypeWhereInput } from "./MoviesTypeWhereInput";
import { MoviesTypeOrderByInput } from "./MoviesTypeOrderByInput";

export type MoviesTypeFindManyArgs = {
  where?: MoviesTypeWhereInput;
  orderBy?: Array<MoviesTypeOrderByInput>;
  skip?: number;
  take?: number;
};

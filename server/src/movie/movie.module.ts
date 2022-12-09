import { Module } from "@nestjs/common";
import { MovieModuleBase } from "./base/movie.module.base";
import { MovieService } from "./movie.service";
import { MovieController } from "./movie.controller";
import { MovieResolver } from "./movie.resolver";

@Module({
  imports: [MovieModuleBase],
  controllers: [MovieController],
  providers: [MovieService, MovieResolver],
  exports: [MovieService],
})
export class MovieModule {}

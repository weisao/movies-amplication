import { Module } from "@nestjs/common";
import { MoviesTypeModuleBase } from "./base/moviesType.module.base";
import { MoviesTypeService } from "./moviesType.service";
import { MoviesTypeController } from "./moviesType.controller";
import { MoviesTypeResolver } from "./moviesType.resolver";

@Module({
  imports: [MoviesTypeModuleBase],
  controllers: [MoviesTypeController],
  providers: [MoviesTypeService, MoviesTypeResolver],
  exports: [MoviesTypeService],
})
export class MoviesTypeModule {}

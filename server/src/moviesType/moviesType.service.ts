import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MoviesTypeServiceBase } from "./base/moviesType.service.base";

@Injectable()
export class MoviesTypeService extends MoviesTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

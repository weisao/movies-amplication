import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MoviesTypeResolverBase } from "./base/moviesType.resolver.base";
import { MoviesType } from "./base/MoviesType";
import { MoviesTypeService } from "./moviesType.service";

@graphql.Resolver(() => MoviesType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MoviesTypeResolver extends MoviesTypeResolverBase {
  constructor(
    protected readonly service: MoviesTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

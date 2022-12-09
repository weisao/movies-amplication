import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MoviesTypeService } from "./moviesType.service";
import { MoviesTypeControllerBase } from "./base/moviesType.controller.base";

@swagger.ApiTags("moviesTypes")
@common.Controller("moviesTypes")
export class MoviesTypeController extends MoviesTypeControllerBase {
  constructor(
    protected readonly service: MoviesTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

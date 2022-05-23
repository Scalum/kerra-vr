import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProjectHasConstituencyService } from "./projectHasConstituency.service";
import { ProjectHasConstituencyControllerBase } from "./base/projectHasConstituency.controller.base";

@swagger.ApiTags("projectHasConstituencies")
@common.Controller("projectHasConstituencies")
export class ProjectHasConstituencyController extends ProjectHasConstituencyControllerBase {
  constructor(
    protected readonly service: ProjectHasConstituencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

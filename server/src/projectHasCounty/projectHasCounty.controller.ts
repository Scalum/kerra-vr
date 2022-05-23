import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProjectHasCountyService } from "./projectHasCounty.service";
import { ProjectHasCountyControllerBase } from "./base/projectHasCounty.controller.base";

@swagger.ApiTags("projectHasCounties")
@common.Controller("projectHasCounties")
export class ProjectHasCountyController extends ProjectHasCountyControllerBase {
  constructor(
    protected readonly service: ProjectHasCountyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

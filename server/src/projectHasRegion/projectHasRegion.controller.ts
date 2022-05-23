import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProjectHasRegionService } from "./projectHasRegion.service";
import { ProjectHasRegionControllerBase } from "./base/projectHasRegion.controller.base";

@swagger.ApiTags("projectHasRegions")
@common.Controller("projectHasRegions")
export class ProjectHasRegionController extends ProjectHasRegionControllerBase {
  constructor(
    protected readonly service: ProjectHasRegionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

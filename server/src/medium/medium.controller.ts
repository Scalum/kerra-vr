import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MediumService } from "./medium.service";
import { MediumControllerBase } from "./base/medium.controller.base";

@swagger.ApiTags("mediums")
@common.Controller("mediums")
export class MediumController extends MediumControllerBase {
  constructor(
    protected readonly service: MediumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

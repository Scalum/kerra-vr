import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConstituencyService } from "./constituency.service";
import { ConstituencyControllerBase } from "./base/constituency.controller.base";

@swagger.ApiTags("constituencies")
@common.Controller("constituencies")
export class ConstituencyController extends ConstituencyControllerBase {
  constructor(
    protected readonly service: ConstituencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

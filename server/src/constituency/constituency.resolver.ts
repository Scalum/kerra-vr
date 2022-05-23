import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ConstituencyResolverBase } from "./base/constituency.resolver.base";
import { Constituency } from "./base/Constituency";
import { ConstituencyService } from "./constituency.service";

@graphql.Resolver(() => Constituency)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ConstituencyResolver extends ConstituencyResolverBase {
  constructor(
    protected readonly service: ConstituencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

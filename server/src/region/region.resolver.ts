import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RegionResolverBase } from "./base/region.resolver.base";
import { Region } from "./base/Region";
import { RegionService } from "./region.service";

@graphql.Resolver(() => Region)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RegionResolver extends RegionResolverBase {
  constructor(
    protected readonly service: RegionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

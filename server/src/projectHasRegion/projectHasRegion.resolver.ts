import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProjectHasRegionResolverBase } from "./base/projectHasRegion.resolver.base";
import { ProjectHasRegion } from "./base/ProjectHasRegion";
import { ProjectHasRegionService } from "./projectHasRegion.service";

@graphql.Resolver(() => ProjectHasRegion)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProjectHasRegionResolver extends ProjectHasRegionResolverBase {
  constructor(
    protected readonly service: ProjectHasRegionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

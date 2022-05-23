import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProjectHasCountyResolverBase } from "./base/projectHasCounty.resolver.base";
import { ProjectHasCounty } from "./base/ProjectHasCounty";
import { ProjectHasCountyService } from "./projectHasCounty.service";

@graphql.Resolver(() => ProjectHasCounty)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProjectHasCountyResolver extends ProjectHasCountyResolverBase {
  constructor(
    protected readonly service: ProjectHasCountyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

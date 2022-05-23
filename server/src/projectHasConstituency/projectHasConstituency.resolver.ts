import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProjectHasConstituencyResolverBase } from "./base/projectHasConstituency.resolver.base";
import { ProjectHasConstituency } from "./base/ProjectHasConstituency";
import { ProjectHasConstituencyService } from "./projectHasConstituency.service";

@graphql.Resolver(() => ProjectHasConstituency)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProjectHasConstituencyResolver extends ProjectHasConstituencyResolverBase {
  constructor(
    protected readonly service: ProjectHasConstituencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

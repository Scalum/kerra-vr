/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateConstituencyArgs } from "./CreateConstituencyArgs";
import { UpdateConstituencyArgs } from "./UpdateConstituencyArgs";
import { DeleteConstituencyArgs } from "./DeleteConstituencyArgs";
import { ConstituencyFindManyArgs } from "./ConstituencyFindManyArgs";
import { ConstituencyFindUniqueArgs } from "./ConstituencyFindUniqueArgs";
import { Constituency } from "./Constituency";
import { ProjectHasConstituency } from "../../projectHasConstituency/base/ProjectHasConstituency";
import { ConstituencyService } from "../constituency.service";

@graphql.Resolver(() => Constituency)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ConstituencyResolverBase {
  constructor(
    protected readonly service: ConstituencyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Constituency",
    action: "read",
    possession: "any",
  })
  async _constituenciesMeta(
    @graphql.Args() args: ConstituencyFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Constituency])
  @nestAccessControl.UseRoles({
    resource: "Constituency",
    action: "read",
    possession: "any",
  })
  async constituencies(
    @graphql.Args() args: ConstituencyFindManyArgs
  ): Promise<Constituency[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Constituency, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Constituency",
    action: "read",
    possession: "own",
  })
  async constituency(
    @graphql.Args() args: ConstituencyFindUniqueArgs
  ): Promise<Constituency | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Constituency)
  @nestAccessControl.UseRoles({
    resource: "Constituency",
    action: "create",
    possession: "any",
  })
  async createConstituency(
    @graphql.Args() args: CreateConstituencyArgs
  ): Promise<Constituency> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        projectHasConstituencies: args.data.projectHasConstituencies
          ? {
              connect: args.data.projectHasConstituencies,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Constituency)
  @nestAccessControl.UseRoles({
    resource: "Constituency",
    action: "update",
    possession: "any",
  })
  async updateConstituency(
    @graphql.Args() args: UpdateConstituencyArgs
  ): Promise<Constituency | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          projectHasConstituencies: args.data.projectHasConstituencies
            ? {
                connect: args.data.projectHasConstituencies,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Constituency)
  @nestAccessControl.UseRoles({
    resource: "Constituency",
    action: "delete",
    possession: "any",
  })
  async deleteConstituency(
    @graphql.Args() args: DeleteConstituencyArgs
  ): Promise<Constituency | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ProjectHasConstituency, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProjectHasConstituency",
    action: "read",
    possession: "any",
  })
  async projectHasConstituencies(
    @graphql.Parent() parent: Constituency
  ): Promise<ProjectHasConstituency | null> {
    const result = await this.service.getProjectHasConstituencies(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

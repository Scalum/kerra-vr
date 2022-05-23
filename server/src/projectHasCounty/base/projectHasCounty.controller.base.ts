/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProjectHasCountyService } from "../projectHasCounty.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProjectHasCountyCreateInput } from "./ProjectHasCountyCreateInput";
import { ProjectHasCountyWhereInput } from "./ProjectHasCountyWhereInput";
import { ProjectHasCountyWhereUniqueInput } from "./ProjectHasCountyWhereUniqueInput";
import { ProjectHasCountyFindManyArgs } from "./ProjectHasCountyFindManyArgs";
import { ProjectHasCountyUpdateInput } from "./ProjectHasCountyUpdateInput";
import { ProjectHasCounty } from "./ProjectHasCounty";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProjectHasCountyControllerBase {
  constructor(
    protected readonly service: ProjectHasCountyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ProjectHasCounty",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProjectHasCounty })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ProjectHasCountyCreateInput
  ): Promise<ProjectHasCounty> {
    return await this.service.create({
      data: {
        ...data,

        county: {
          connect: data.county,
        },

        project: {
          connect: data.project,
        },
      },
      select: {
        county: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ProjectHasCounty",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [ProjectHasCounty] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ProjectHasCountyFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<ProjectHasCounty[]> {
    const args = plainToClass(ProjectHasCountyFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        county: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ProjectHasCounty",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProjectHasCounty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ProjectHasCountyWhereUniqueInput
  ): Promise<ProjectHasCounty | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        county: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ProjectHasCounty",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProjectHasCounty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ProjectHasCountyWhereUniqueInput,
    @common.Body() data: ProjectHasCountyUpdateInput
  ): Promise<ProjectHasCounty | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          county: {
            connect: data.county,
          },

          project: {
            connect: data.project,
          },
        },
        select: {
          county: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          project: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "ProjectHasCounty",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProjectHasCounty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ProjectHasCountyWhereUniqueInput
  ): Promise<ProjectHasCounty | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          county: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          project: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
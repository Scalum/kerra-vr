/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, ProjectHasCounty, County, Project } from "@prisma/client";

export class ProjectHasCountyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProjectHasCountyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectHasCountyFindManyArgs>
  ): Promise<number> {
    return this.prisma.projectHasCounty.count(args);
  }

  async findMany<T extends Prisma.ProjectHasCountyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectHasCountyFindManyArgs>
  ): Promise<ProjectHasCounty[]> {
    return this.prisma.projectHasCounty.findMany(args);
  }
  async findOne<T extends Prisma.ProjectHasCountyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectHasCountyFindUniqueArgs>
  ): Promise<ProjectHasCounty | null> {
    return this.prisma.projectHasCounty.findUnique(args);
  }
  async create<T extends Prisma.ProjectHasCountyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectHasCountyCreateArgs>
  ): Promise<ProjectHasCounty> {
    return this.prisma.projectHasCounty.create<T>(args);
  }
  async update<T extends Prisma.ProjectHasCountyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectHasCountyUpdateArgs>
  ): Promise<ProjectHasCounty> {
    return this.prisma.projectHasCounty.update<T>(args);
  }
  async delete<T extends Prisma.ProjectHasCountyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectHasCountyDeleteArgs>
  ): Promise<ProjectHasCounty> {
    return this.prisma.projectHasCounty.delete(args);
  }

  async getCounty(parentId: string): Promise<County | null> {
    return this.prisma.projectHasCounty
      .findUnique({
        where: { id: parentId },
      })
      .county();
  }

  async getProject(parentId: string): Promise<Project | null> {
    return this.prisma.projectHasCounty
      .findUnique({
        where: { id: parentId },
      })
      .project();
  }
}

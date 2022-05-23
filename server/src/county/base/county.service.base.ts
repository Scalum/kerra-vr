/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, County, Project, Region } from "@prisma/client";

export class CountyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CountyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CountyFindManyArgs>
  ): Promise<number> {
    return this.prisma.county.count(args);
  }

  async findMany<T extends Prisma.CountyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CountyFindManyArgs>
  ): Promise<County[]> {
    return this.prisma.county.findMany(args);
  }
  async findOne<T extends Prisma.CountyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CountyFindUniqueArgs>
  ): Promise<County | null> {
    return this.prisma.county.findUnique(args);
  }
  async create<T extends Prisma.CountyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CountyCreateArgs>
  ): Promise<County> {
    return this.prisma.county.create<T>(args);
  }
  async update<T extends Prisma.CountyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CountyUpdateArgs>
  ): Promise<County> {
    return this.prisma.county.update<T>(args);
  }
  async delete<T extends Prisma.CountyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CountyDeleteArgs>
  ): Promise<County> {
    return this.prisma.county.delete(args);
  }

  async getProject(parentId: string): Promise<Project | null> {
    return this.prisma.county
      .findUnique({
        where: { id: parentId },
      })
      .project();
  }

  async getRegion(parentId: string): Promise<Region | null> {
    return this.prisma.county
      .findUnique({
        where: { id: parentId },
      })
      .region();
  }
}

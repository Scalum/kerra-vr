import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProjectHasRegionServiceBase } from "./base/projectHasRegion.service.base";

@Injectable()
export class ProjectHasRegionService extends ProjectHasRegionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

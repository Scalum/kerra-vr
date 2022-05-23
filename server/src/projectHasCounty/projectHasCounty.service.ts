import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProjectHasCountyServiceBase } from "./base/projectHasCounty.service.base";

@Injectable()
export class ProjectHasCountyService extends ProjectHasCountyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

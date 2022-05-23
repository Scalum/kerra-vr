import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProjectHasConstituencyServiceBase } from "./base/projectHasConstituency.service.base";

@Injectable()
export class ProjectHasConstituencyService extends ProjectHasConstituencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

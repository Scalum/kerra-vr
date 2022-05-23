import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MediumServiceBase } from "./base/medium.service.base";

@Injectable()
export class MediumService extends MediumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

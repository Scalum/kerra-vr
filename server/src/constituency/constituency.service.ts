import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ConstituencyServiceBase } from "./base/constituency.service.base";

@Injectable()
export class ConstituencyService extends ConstituencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

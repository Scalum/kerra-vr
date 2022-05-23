import { Module } from "@nestjs/common";
import { ConstituencyModuleBase } from "./base/constituency.module.base";
import { ConstituencyService } from "./constituency.service";
import { ConstituencyController } from "./constituency.controller";
import { ConstituencyResolver } from "./constituency.resolver";

@Module({
  imports: [ConstituencyModuleBase],
  controllers: [ConstituencyController],
  providers: [ConstituencyService, ConstituencyResolver],
  exports: [ConstituencyService],
})
export class ConstituencyModule {}

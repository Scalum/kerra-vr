import { Module } from "@nestjs/common";
import { CountyModuleBase } from "./base/county.module.base";
import { CountyService } from "./county.service";
import { CountyController } from "./county.controller";
import { CountyResolver } from "./county.resolver";

@Module({
  imports: [CountyModuleBase],
  controllers: [CountyController],
  providers: [CountyService, CountyResolver],
  exports: [CountyService],
})
export class CountyModule {}

import { Module } from "@nestjs/common";
import { MediumModuleBase } from "./base/medium.module.base";
import { MediumService } from "./medium.service";
import { MediumController } from "./medium.controller";
import { MediumResolver } from "./medium.resolver";

@Module({
  imports: [MediumModuleBase],
  controllers: [MediumController],
  providers: [MediumService, MediumResolver],
  exports: [MediumService],
})
export class MediumModule {}

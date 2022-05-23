import { Module } from "@nestjs/common";
import { ProjectHasRegionModuleBase } from "./base/projectHasRegion.module.base";
import { ProjectHasRegionService } from "./projectHasRegion.service";
import { ProjectHasRegionController } from "./projectHasRegion.controller";
import { ProjectHasRegionResolver } from "./projectHasRegion.resolver";

@Module({
  imports: [ProjectHasRegionModuleBase],
  controllers: [ProjectHasRegionController],
  providers: [ProjectHasRegionService, ProjectHasRegionResolver],
  exports: [ProjectHasRegionService],
})
export class ProjectHasRegionModule {}

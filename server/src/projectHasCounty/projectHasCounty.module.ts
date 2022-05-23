import { Module } from "@nestjs/common";
import { ProjectHasCountyModuleBase } from "./base/projectHasCounty.module.base";
import { ProjectHasCountyService } from "./projectHasCounty.service";
import { ProjectHasCountyController } from "./projectHasCounty.controller";
import { ProjectHasCountyResolver } from "./projectHasCounty.resolver";

@Module({
  imports: [ProjectHasCountyModuleBase],
  controllers: [ProjectHasCountyController],
  providers: [ProjectHasCountyService, ProjectHasCountyResolver],
  exports: [ProjectHasCountyService],
})
export class ProjectHasCountyModule {}

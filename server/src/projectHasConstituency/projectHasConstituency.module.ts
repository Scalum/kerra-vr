import { Module } from "@nestjs/common";
import { ProjectHasConstituencyModuleBase } from "./base/projectHasConstituency.module.base";
import { ProjectHasConstituencyService } from "./projectHasConstituency.service";
import { ProjectHasConstituencyController } from "./projectHasConstituency.controller";
import { ProjectHasConstituencyResolver } from "./projectHasConstituency.resolver";

@Module({
  imports: [ProjectHasConstituencyModuleBase],
  controllers: [ProjectHasConstituencyController],
  providers: [ProjectHasConstituencyService, ProjectHasConstituencyResolver],
  exports: [ProjectHasConstituencyService],
})
export class ProjectHasConstituencyModule {}

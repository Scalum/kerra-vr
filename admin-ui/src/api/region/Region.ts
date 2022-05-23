import { County } from "../county/County";
import { ProjectHasRegion } from "../projectHasRegion/ProjectHasRegion";

export type Region = {
  counties?: Array<County>;
  createdAt: Date;
  id: string;
  projectHasRegions?: Array<ProjectHasRegion>;
  updatedAt: Date;
};

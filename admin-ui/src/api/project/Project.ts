import { Medium } from "../medium/Medium";
import { ProjectHasConstituency } from "../projectHasConstituency/ProjectHasConstituency";
import { ProjectHasCounty } from "../projectHasCounty/ProjectHasCounty";
import { ProjectHasRegion } from "../projectHasRegion/ProjectHasRegion";

export type Project = {
  createdAt: Date;
  id: string;
  mediums?: Array<Medium>;
  projectHasConstituencies?: Array<ProjectHasConstituency>;
  projectHasCounties?: Array<ProjectHasCounty>;
  projectHasRegions?: Array<ProjectHasRegion>;
  updatedAt: Date;
};

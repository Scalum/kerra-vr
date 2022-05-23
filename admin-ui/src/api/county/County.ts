import { ProjectHasCounty } from "../projectHasCounty/ProjectHasCounty";
import { Region } from "../region/Region";

export type County = {
  code: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  projectHasCounties?: Array<ProjectHasCounty>;
  region?: Region | null;
  updatedAt: Date;
};

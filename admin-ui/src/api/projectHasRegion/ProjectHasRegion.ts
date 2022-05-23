import { Project } from "../project/Project";
import { Region } from "../region/Region";

export type ProjectHasRegion = {
  createdAt: Date;
  id: string;
  project?: Project | null;
  region?: Region | null;
  updatedAt: Date;
};

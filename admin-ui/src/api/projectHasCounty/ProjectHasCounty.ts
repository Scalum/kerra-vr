import { County } from "../county/County";
import { Project } from "../project/Project";

export type ProjectHasCounty = {
  county?: County;
  createdAt: Date;
  id: string;
  project?: Project;
  updatedAt: Date;
};

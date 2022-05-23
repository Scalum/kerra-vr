import { County } from "../county/County";
import { Project } from "../project/Project";

export type Region = {
  counties?: Array<County>;
  createdAt: Date;
  id: string;
  project?: Project | null;
  updatedAt: Date;
};

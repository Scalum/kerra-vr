import { Constituency } from "../constituency/Constituency";
import { Project } from "../project/Project";

export type ProjectHasConstituency = {
  constituency?: Constituency;
  createdAt: Date;
  id: string;
  project?: Project;
  updatedAt: Date;
};

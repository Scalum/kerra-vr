import { Project } from "../project/Project";

export type Constituency = {
  createdAt: Date;
  id: string;
  project?: Project | null;
  updatedAt: Date;
};

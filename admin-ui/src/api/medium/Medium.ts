import { Project } from "../project/Project";

export type Medium = {
  createdAt: Date;
  id: string;
  project?: Project;
  updatedAt: Date;
};

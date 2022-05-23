import { Project } from "../project/Project";
import { Region } from "../region/Region";

export type County = {
  code: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  project?: Project | null;
  region?: Region | null;
  updatedAt: Date;
};

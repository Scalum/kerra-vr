import { ProjectHasConstituency } from "../projectHasConstituency/ProjectHasConstituency";

export type Constituency = {
  createdAt: Date;
  id: string;
  projectHasConstituencies?: ProjectHasConstituency | null;
  updatedAt: Date;
};

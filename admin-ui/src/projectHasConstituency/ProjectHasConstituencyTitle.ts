import { ProjectHasConstituency as TProjectHasConstituency } from "../api/projectHasConstituency/ProjectHasConstituency";

export const PROJECTHASCONSTITUENCY_TITLE_FIELD = "id";

export const ProjectHasConstituencyTitle = (
  record: TProjectHasConstituency
): string => {
  return record.id || record.id;
};

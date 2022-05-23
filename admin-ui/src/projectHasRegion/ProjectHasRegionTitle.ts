import { ProjectHasRegion as TProjectHasRegion } from "../api/projectHasRegion/ProjectHasRegion";

export const PROJECTHASREGION_TITLE_FIELD = "id";

export const ProjectHasRegionTitle = (record: TProjectHasRegion): string => {
  return record.id || record.id;
};

import { ProjectHasCounty as TProjectHasCounty } from "../api/projectHasCounty/ProjectHasCounty";

export const PROJECTHASCOUNTY_TITLE_FIELD = "id";

export const ProjectHasCountyTitle = (record: TProjectHasCounty): string => {
  return record.id || record.id;
};

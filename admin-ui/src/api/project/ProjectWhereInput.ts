import { StringFilter } from "../../util/StringFilter";
import { MediumListRelationFilter } from "../medium/MediumListRelationFilter";
import { ProjectHasConstituencyListRelationFilter } from "../projectHasConstituency/ProjectHasConstituencyListRelationFilter";
import { ProjectHasCountyListRelationFilter } from "../projectHasCounty/ProjectHasCountyListRelationFilter";
import { ProjectHasRegionListRelationFilter } from "../projectHasRegion/ProjectHasRegionListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  mediums?: MediumListRelationFilter;
  projectHasConstituencies?: ProjectHasConstituencyListRelationFilter;
  projectHasCounties?: ProjectHasCountyListRelationFilter;
  projectHasRegions?: ProjectHasRegionListRelationFilter;
};

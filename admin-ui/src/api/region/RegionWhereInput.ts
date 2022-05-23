import { CountyListRelationFilter } from "../county/CountyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectHasRegionListRelationFilter } from "../projectHasRegion/ProjectHasRegionListRelationFilter";

export type RegionWhereInput = {
  counties?: CountyListRelationFilter;
  id?: StringFilter;
  projectHasRegions?: ProjectHasRegionListRelationFilter;
};

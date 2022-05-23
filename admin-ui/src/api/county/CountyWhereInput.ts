import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectHasCountyListRelationFilter } from "../projectHasCounty/ProjectHasCountyListRelationFilter";
import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type CountyWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  projectHasCounties?: ProjectHasCountyListRelationFilter;
  region?: RegionWhereUniqueInput;
};

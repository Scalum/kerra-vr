import { CountyListRelationFilter } from "../county/CountyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type RegionWhereInput = {
  counties?: CountyListRelationFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
};

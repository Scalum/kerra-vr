import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type CountyWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  project?: ProjectWhereUniqueInput;
  region?: RegionWhereUniqueInput;
};

import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type ProjectHasRegionWhereInput = {
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  region?: RegionWhereUniqueInput;
};

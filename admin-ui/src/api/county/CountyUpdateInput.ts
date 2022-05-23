import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type CountyUpdateInput = {
  code?: string | null;
  name?: string | null;
  project?: ProjectWhereUniqueInput | null;
  region?: RegionWhereUniqueInput | null;
};

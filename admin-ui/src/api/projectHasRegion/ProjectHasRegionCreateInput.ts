import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type ProjectHasRegionCreateInput = {
  project?: ProjectWhereUniqueInput | null;
  region?: RegionWhereUniqueInput | null;
};

import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type ProjectHasRegionUpdateInput = {
  project?: ProjectWhereUniqueInput | null;
  region?: RegionWhereUniqueInput | null;
};

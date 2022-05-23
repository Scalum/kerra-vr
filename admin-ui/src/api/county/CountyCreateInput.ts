import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type CountyCreateInput = {
  code?: string | null;
  name?: string | null;
  project?: ProjectWhereUniqueInput | null;
  region?: RegionWhereUniqueInput | null;
};

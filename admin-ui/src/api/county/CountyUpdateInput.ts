import { ProjectHasCountyUpdateManyWithoutCountiesInput } from "./ProjectHasCountyUpdateManyWithoutCountiesInput";
import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type CountyUpdateInput = {
  code?: string | null;
  name?: string | null;
  projectHasCounties?: ProjectHasCountyUpdateManyWithoutCountiesInput;
  region?: RegionWhereUniqueInput | null;
};

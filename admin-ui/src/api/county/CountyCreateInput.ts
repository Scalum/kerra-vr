import { ProjectHasCountyCreateNestedManyWithoutCountiesInput } from "./ProjectHasCountyCreateNestedManyWithoutCountiesInput";
import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type CountyCreateInput = {
  code?: string | null;
  name?: string | null;
  projectHasCounties?: ProjectHasCountyCreateNestedManyWithoutCountiesInput;
  region?: RegionWhereUniqueInput | null;
};

import { CountyCreateNestedManyWithoutRegionsInput } from "./CountyCreateNestedManyWithoutRegionsInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type RegionCreateInput = {
  counties?: CountyCreateNestedManyWithoutRegionsInput;
  project?: ProjectWhereUniqueInput | null;
};

import { CountyUpdateManyWithoutRegionsInput } from "./CountyUpdateManyWithoutRegionsInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type RegionUpdateInput = {
  counties?: CountyUpdateManyWithoutRegionsInput;
  project?: ProjectWhereUniqueInput | null;
};

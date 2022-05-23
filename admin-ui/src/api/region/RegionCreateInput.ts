import { CountyCreateNestedManyWithoutRegionsInput } from "./CountyCreateNestedManyWithoutRegionsInput";
import { ProjectHasRegionCreateNestedManyWithoutRegionsInput } from "./ProjectHasRegionCreateNestedManyWithoutRegionsInput";

export type RegionCreateInput = {
  counties?: CountyCreateNestedManyWithoutRegionsInput;
  projectHasRegions?: ProjectHasRegionCreateNestedManyWithoutRegionsInput;
};

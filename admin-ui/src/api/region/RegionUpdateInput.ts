import { CountyUpdateManyWithoutRegionsInput } from "./CountyUpdateManyWithoutRegionsInput";
import { ProjectHasRegionUpdateManyWithoutRegionsInput } from "./ProjectHasRegionUpdateManyWithoutRegionsInput";

export type RegionUpdateInput = {
  counties?: CountyUpdateManyWithoutRegionsInput;
  projectHasRegions?: ProjectHasRegionUpdateManyWithoutRegionsInput;
};

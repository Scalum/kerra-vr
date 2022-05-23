import { MediumUpdateManyWithoutProjectsInput } from "./MediumUpdateManyWithoutProjectsInput";
import { ProjectHasConstituencyUpdateManyWithoutProjectsInput } from "./ProjectHasConstituencyUpdateManyWithoutProjectsInput";
import { ProjectHasCountyUpdateManyWithoutProjectsInput } from "./ProjectHasCountyUpdateManyWithoutProjectsInput";
import { ProjectHasRegionUpdateManyWithoutProjectsInput } from "./ProjectHasRegionUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  mediums?: MediumUpdateManyWithoutProjectsInput;
  projectHasConstituencies?: ProjectHasConstituencyUpdateManyWithoutProjectsInput;
  projectHasCounties?: ProjectHasCountyUpdateManyWithoutProjectsInput;
  projectHasRegions?: ProjectHasRegionUpdateManyWithoutProjectsInput;
};

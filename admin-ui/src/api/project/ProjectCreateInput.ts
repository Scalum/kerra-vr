import { MediumCreateNestedManyWithoutProjectsInput } from "./MediumCreateNestedManyWithoutProjectsInput";
import { ProjectHasConstituencyCreateNestedManyWithoutProjectsInput } from "./ProjectHasConstituencyCreateNestedManyWithoutProjectsInput";
import { ProjectHasCountyCreateNestedManyWithoutProjectsInput } from "./ProjectHasCountyCreateNestedManyWithoutProjectsInput";
import { ProjectHasRegionCreateNestedManyWithoutProjectsInput } from "./ProjectHasRegionCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  mediums?: MediumCreateNestedManyWithoutProjectsInput;
  projectHasConstituencies?: ProjectHasConstituencyCreateNestedManyWithoutProjectsInput;
  projectHasCounties?: ProjectHasCountyCreateNestedManyWithoutProjectsInput;
  projectHasRegions?: ProjectHasRegionCreateNestedManyWithoutProjectsInput;
};

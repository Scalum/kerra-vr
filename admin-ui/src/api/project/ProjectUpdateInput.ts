import { ConstituencyUpdateManyWithoutProjectsInput } from "./ConstituencyUpdateManyWithoutProjectsInput";
import { CountyUpdateManyWithoutProjectsInput } from "./CountyUpdateManyWithoutProjectsInput";
import { MediumUpdateManyWithoutProjectsInput } from "./MediumUpdateManyWithoutProjectsInput";
import { RegionUpdateManyWithoutProjectsInput } from "./RegionUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  constituencies?: ConstituencyUpdateManyWithoutProjectsInput;
  counties?: CountyUpdateManyWithoutProjectsInput;
  mediums?: MediumUpdateManyWithoutProjectsInput;
  regions?: RegionUpdateManyWithoutProjectsInput;
};

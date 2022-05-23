import { ConstituencyCreateNestedManyWithoutProjectsInput } from "./ConstituencyCreateNestedManyWithoutProjectsInput";
import { CountyCreateNestedManyWithoutProjectsInput } from "./CountyCreateNestedManyWithoutProjectsInput";
import { MediumCreateNestedManyWithoutProjectsInput } from "./MediumCreateNestedManyWithoutProjectsInput";
import { RegionCreateNestedManyWithoutProjectsInput } from "./RegionCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  constituencies?: ConstituencyCreateNestedManyWithoutProjectsInput;
  counties?: CountyCreateNestedManyWithoutProjectsInput;
  mediums?: MediumCreateNestedManyWithoutProjectsInput;
  regions?: RegionCreateNestedManyWithoutProjectsInput;
};

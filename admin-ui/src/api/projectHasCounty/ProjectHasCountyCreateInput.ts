import { CountyWhereUniqueInput } from "../county/CountyWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ProjectHasCountyCreateInput = {
  county: CountyWhereUniqueInput;
  project: ProjectWhereUniqueInput;
};

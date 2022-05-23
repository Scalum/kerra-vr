import { CountyWhereUniqueInput } from "../county/CountyWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ProjectHasCountyUpdateInput = {
  county?: CountyWhereUniqueInput;
  project?: ProjectWhereUniqueInput;
};

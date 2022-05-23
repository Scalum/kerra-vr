import { CountyWhereUniqueInput } from "../county/CountyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ProjectHasCountyWhereInput = {
  county?: CountyWhereUniqueInput;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
};

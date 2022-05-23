import { ConstituencyWhereUniqueInput } from "../constituency/ConstituencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ProjectHasConstituencyWhereInput = {
  constituency?: ConstituencyWhereUniqueInput;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
};

import { ConstituencyWhereUniqueInput } from "../constituency/ConstituencyWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ProjectHasConstituencyUpdateInput = {
  constituency?: ConstituencyWhereUniqueInput;
  project?: ProjectWhereUniqueInput;
};

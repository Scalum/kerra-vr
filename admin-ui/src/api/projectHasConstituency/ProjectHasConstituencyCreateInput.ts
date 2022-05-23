import { ConstituencyWhereUniqueInput } from "../constituency/ConstituencyWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ProjectHasConstituencyCreateInput = {
  constituency: ConstituencyWhereUniqueInput;
  project: ProjectWhereUniqueInput;
};

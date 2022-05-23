import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ConstituencyWhereInput = {
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
};

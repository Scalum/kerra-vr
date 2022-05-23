import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type MediumWhereInput = {
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
};

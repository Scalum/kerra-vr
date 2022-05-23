import { StringFilter } from "../../util/StringFilter";
import { ProjectHasConstituencyWhereUniqueInput } from "../projectHasConstituency/ProjectHasConstituencyWhereUniqueInput";

export type ConstituencyWhereInput = {
  id?: StringFilter;
  projectHasConstituencies?: ProjectHasConstituencyWhereUniqueInput;
};

import { ConstituencyListRelationFilter } from "../constituency/ConstituencyListRelationFilter";
import { CountyListRelationFilter } from "../county/CountyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MediumListRelationFilter } from "../medium/MediumListRelationFilter";
import { RegionListRelationFilter } from "../region/RegionListRelationFilter";

export type ProjectWhereInput = {
  constituencies?: ConstituencyListRelationFilter;
  counties?: CountyListRelationFilter;
  id?: StringFilter;
  mediums?: MediumListRelationFilter;
  regions?: RegionListRelationFilter;
};

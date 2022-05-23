import { Constituency as TConstituency } from "../api/constituency/Constituency";

export const CONSTITUENCY_TITLE_FIELD = "id";

export const ConstituencyTitle = (record: TConstituency): string => {
  return record.id || record.id;
};

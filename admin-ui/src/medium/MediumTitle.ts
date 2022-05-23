import { Medium as TMedium } from "../api/medium/Medium";

export const MEDIUM_TITLE_FIELD = "id";

export const MediumTitle = (record: TMedium): string => {
  return record.id || record.id;
};

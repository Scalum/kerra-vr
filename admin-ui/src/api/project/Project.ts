import { Constituency } from "../constituency/Constituency";
import { County } from "../county/County";
import { Medium } from "../medium/Medium";
import { Region } from "../region/Region";

export type Project = {
  constituencies?: Array<Constituency>;
  counties?: Array<County>;
  createdAt: Date;
  id: string;
  mediums?: Array<Medium>;
  regions?: Array<Region>;
  updatedAt: Date;
};

import { ConstituencyWhereInput } from "./ConstituencyWhereInput";
import { ConstituencyOrderByInput } from "./ConstituencyOrderByInput";

export type ConstituencyFindManyArgs = {
  where?: ConstituencyWhereInput;
  orderBy?: Array<ConstituencyOrderByInput>;
  skip?: number;
  take?: number;
};

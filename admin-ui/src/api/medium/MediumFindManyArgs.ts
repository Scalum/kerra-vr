import { MediumWhereInput } from "./MediumWhereInput";
import { MediumOrderByInput } from "./MediumOrderByInput";

export type MediumFindManyArgs = {
  where?: MediumWhereInput;
  orderBy?: Array<MediumOrderByInput>;
  skip?: number;
  take?: number;
};

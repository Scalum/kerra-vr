import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROJECTHASCONSTITUENCY_TITLE_FIELD } from "../projectHasConstituency/ProjectHasConstituencyTitle";

export const ConstituencyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"constituencies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="project has constituencies"
          source="projecthasconstituency.id"
          reference="ProjectHasConstituency"
        >
          <TextField source={PROJECTHASCONSTITUENCY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

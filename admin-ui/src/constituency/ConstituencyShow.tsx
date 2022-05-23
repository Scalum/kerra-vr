import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PROJECTHASCONSTITUENCY_TITLE_FIELD } from "../projectHasConstituency/ProjectHasConstituencyTitle";

export const ConstituencyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

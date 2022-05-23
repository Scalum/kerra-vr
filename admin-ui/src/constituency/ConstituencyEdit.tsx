import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProjectHasConstituencyTitle } from "../projectHasConstituency/ProjectHasConstituencyTitle";

export const ConstituencyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="projecthasconstituency.id"
          reference="ProjectHasConstituency"
          label="project has constituencies"
        >
          <SelectInput optionText={ProjectHasConstituencyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

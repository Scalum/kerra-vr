import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProjectHasConstituencyTitle } from "../projectHasConstituency/ProjectHasConstituencyTitle";

export const ConstituencyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="projecthasconstituency.id"
          reference="ProjectHasConstituency"
          label="project has constituencies"
        >
          <SelectInput optionText={ProjectHasConstituencyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

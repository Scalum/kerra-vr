import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ConstituencyTitle } from "../constituency/ConstituencyTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const ProjectHasConstituencyEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="constituency.id"
          reference="Constituency"
          label="Constituency"
        >
          <SelectInput optionText={ConstituencyTitle} />
        </ReferenceInput>
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

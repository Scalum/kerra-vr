import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ConstituencyTitle } from "../constituency/ConstituencyTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const ProjectHasConstituencyCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};

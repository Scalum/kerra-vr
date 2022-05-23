import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CountyTitle } from "../county/CountyTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const ProjectHasCountyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="county.id" reference="County" label="County">
          <SelectInput optionText={CountyTitle} />
        </ReferenceInput>
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

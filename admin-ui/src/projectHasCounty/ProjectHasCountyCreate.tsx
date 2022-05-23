import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CountyTitle } from "../county/CountyTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const ProjectHasCountyCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="county.id" reference="County" label="County">
          <SelectInput optionText={CountyTitle} />
        </ReferenceInput>
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

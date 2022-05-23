import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProjectHasCountyTitle } from "../projectHasCounty/ProjectHasCountyTitle";
import { RegionTitle } from "../region/RegionTitle";

export const CountyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="projectHasCounties"
          reference="ProjectHasCounty"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectHasCountyTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="region.id" reference="Region" label="region">
          <SelectInput optionText={RegionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

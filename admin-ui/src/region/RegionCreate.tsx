import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { CountyTitle } from "../county/CountyTitle";
import { ProjectHasRegionTitle } from "../projectHasRegion/ProjectHasRegionTitle";

export const RegionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="counties"
          reference="County"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CountyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="projectHasRegions"
          reference="ProjectHasRegion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectHasRegionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

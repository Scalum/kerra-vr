import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { MediumTitle } from "../medium/MediumTitle";
import { ProjectHasConstituencyTitle } from "../projectHasConstituency/ProjectHasConstituencyTitle";
import { ProjectHasCountyTitle } from "../projectHasCounty/ProjectHasCountyTitle";
import { ProjectHasRegionTitle } from "../projectHasRegion/ProjectHasRegionTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="mediums"
          reference="Medium"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MediumTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="projectHasConstituencies"
          reference="ProjectHasConstituency"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectHasConstituencyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="projectHasCounties"
          reference="ProjectHasCounty"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectHasCountyTitle} />
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
    </Edit>
  );
};

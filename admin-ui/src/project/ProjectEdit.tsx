import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { ConstituencyTitle } from "../constituency/ConstituencyTitle";
import { CountyTitle } from "../county/CountyTitle";
import { MediumTitle } from "../medium/MediumTitle";
import { RegionTitle } from "../region/RegionTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="constituencies"
          reference="Constituency"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConstituencyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="counties"
          reference="County"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CountyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mediums"
          reference="Medium"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MediumTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="regions"
          reference="Region"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RegionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

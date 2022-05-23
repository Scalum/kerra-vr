import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProjectTitle } from "../project/ProjectTitle";
import { RegionTitle } from "../region/RegionTitle";

export const ProjectHasRegionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <ReferenceInput source="region.id" reference="Region" label="Region">
          <SelectInput optionText={RegionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

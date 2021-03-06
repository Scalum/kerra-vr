/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MediumUpdateManyWithoutProjectsInput } from "./MediumUpdateManyWithoutProjectsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ProjectHasConstituencyUpdateManyWithoutProjectsInput } from "./ProjectHasConstituencyUpdateManyWithoutProjectsInput";
import { ProjectHasCountyUpdateManyWithoutProjectsInput } from "./ProjectHasCountyUpdateManyWithoutProjectsInput";
import { ProjectHasRegionUpdateManyWithoutProjectsInput } from "./ProjectHasRegionUpdateManyWithoutProjectsInput";
@InputType()
class ProjectUpdateInput {
  @ApiProperty({
    required: false,
    type: () => MediumUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => MediumUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => MediumUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  mediums?: MediumUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => ProjectHasConstituencyUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => ProjectHasConstituencyUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => ProjectHasConstituencyUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  projectHasConstituencies?: ProjectHasConstituencyUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => ProjectHasCountyUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => ProjectHasCountyUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => ProjectHasCountyUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  projectHasCounties?: ProjectHasCountyUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => ProjectHasRegionUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => ProjectHasRegionUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => ProjectHasRegionUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  projectHasRegions?: ProjectHasRegionUpdateManyWithoutProjectsInput;
}
export { ProjectUpdateInput };

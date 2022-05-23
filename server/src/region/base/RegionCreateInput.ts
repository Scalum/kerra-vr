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
import { CountyCreateNestedManyWithoutRegionsInput } from "./CountyCreateNestedManyWithoutRegionsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ProjectHasRegionCreateNestedManyWithoutRegionsInput } from "./ProjectHasRegionCreateNestedManyWithoutRegionsInput";
@InputType()
class RegionCreateInput {
  @ApiProperty({
    required: false,
    type: () => CountyCreateNestedManyWithoutRegionsInput,
  })
  @ValidateNested()
  @Type(() => CountyCreateNestedManyWithoutRegionsInput)
  @IsOptional()
  @Field(() => CountyCreateNestedManyWithoutRegionsInput, {
    nullable: true,
  })
  counties?: CountyCreateNestedManyWithoutRegionsInput;

  @ApiProperty({
    required: false,
    type: () => ProjectHasRegionCreateNestedManyWithoutRegionsInput,
  })
  @ValidateNested()
  @Type(() => ProjectHasRegionCreateNestedManyWithoutRegionsInput)
  @IsOptional()
  @Field(() => ProjectHasRegionCreateNestedManyWithoutRegionsInput, {
    nullable: true,
  })
  projectHasRegions?: ProjectHasRegionCreateNestedManyWithoutRegionsInput;
}
export { RegionCreateInput };

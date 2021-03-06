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
import { ProjectHasCountyWhereInput } from "./ProjectHasCountyWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProjectHasCountyListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProjectHasCountyWhereInput,
  })
  @ValidateNested()
  @Type(() => ProjectHasCountyWhereInput)
  @IsOptional()
  @Field(() => ProjectHasCountyWhereInput, {
    nullable: true,
  })
  every?: ProjectHasCountyWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProjectHasCountyWhereInput,
  })
  @ValidateNested()
  @Type(() => ProjectHasCountyWhereInput)
  @IsOptional()
  @Field(() => ProjectHasCountyWhereInput, {
    nullable: true,
  })
  some?: ProjectHasCountyWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProjectHasCountyWhereInput,
  })
  @ValidateNested()
  @Type(() => ProjectHasCountyWhereInput)
  @IsOptional()
  @Field(() => ProjectHasCountyWhereInput, {
    nullable: true,
  })
  none?: ProjectHasCountyWhereInput;
}
export { ProjectHasCountyListRelationFilter };

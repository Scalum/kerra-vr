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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { ProjectHasCountyListRelationFilter } from "../../projectHasCounty/base/ProjectHasCountyListRelationFilter";
import { RegionWhereUniqueInput } from "../../region/base/RegionWhereUniqueInput";
@InputType()
class CountyWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  code?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ProjectHasCountyListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProjectHasCountyListRelationFilter)
  @IsOptional()
  @Field(() => ProjectHasCountyListRelationFilter, {
    nullable: true,
  })
  projectHasCounties?: ProjectHasCountyListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RegionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RegionWhereUniqueInput)
  @IsOptional()
  @Field(() => RegionWhereUniqueInput, {
    nullable: true,
  })
  region?: RegionWhereUniqueInput;
}
export { CountyWhereInput };

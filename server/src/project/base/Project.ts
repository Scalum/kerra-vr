/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Medium } from "../../medium/base/Medium";
import { ProjectHasConstituency } from "../../projectHasConstituency/base/ProjectHasConstituency";
import { ProjectHasCounty } from "../../projectHasCounty/base/ProjectHasCounty";
import { ProjectHasRegion } from "../../projectHasRegion/base/ProjectHasRegion";
@ObjectType()
class Project {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Medium],
  })
  @ValidateNested()
  @Type(() => Medium)
  @IsOptional()
  mediums?: Array<Medium>;

  @ApiProperty({
    required: false,
    type: () => [ProjectHasConstituency],
  })
  @ValidateNested()
  @Type(() => ProjectHasConstituency)
  @IsOptional()
  projectHasConstituencies?: Array<ProjectHasConstituency>;

  @ApiProperty({
    required: false,
    type: () => [ProjectHasCounty],
  })
  @ValidateNested()
  @Type(() => ProjectHasCounty)
  @IsOptional()
  projectHasCounties?: Array<ProjectHasCounty>;

  @ApiProperty({
    required: false,
    type: () => [ProjectHasRegion],
  })
  @ValidateNested()
  @Type(() => ProjectHasRegion)
  @IsOptional()
  projectHasRegions?: Array<ProjectHasRegion>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Project };
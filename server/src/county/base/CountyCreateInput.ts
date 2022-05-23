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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
import { Type } from "class-transformer";
import { RegionWhereUniqueInput } from "../../region/base/RegionWhereUniqueInput";
@InputType()
class CountyCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectWhereUniqueInput, {
    nullable: true,
  })
  project?: ProjectWhereUniqueInput | null;

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
  region?: RegionWhereUniqueInput | null;
}
export { CountyCreateInput };

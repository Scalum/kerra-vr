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
import { RegionWhereInput } from "./RegionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RegionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RegionWhereInput,
  })
  @ValidateNested()
  @Type(() => RegionWhereInput)
  @IsOptional()
  @Field(() => RegionWhereInput, {
    nullable: true,
  })
  every?: RegionWhereInput;

  @ApiProperty({
    required: false,
    type: () => RegionWhereInput,
  })
  @ValidateNested()
  @Type(() => RegionWhereInput)
  @IsOptional()
  @Field(() => RegionWhereInput, {
    nullable: true,
  })
  some?: RegionWhereInput;

  @ApiProperty({
    required: false,
    type: () => RegionWhereInput,
  })
  @ValidateNested()
  @Type(() => RegionWhereInput)
  @IsOptional()
  @Field(() => RegionWhereInput, {
    nullable: true,
  })
  none?: RegionWhereInput;
}
export { RegionListRelationFilter };

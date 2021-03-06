/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConstituencyWhereInput } from "./ConstituencyWhereInput";
import { Type } from "class-transformer";
import { ConstituencyOrderByInput } from "./ConstituencyOrderByInput";

@ArgsType()
class ConstituencyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ConstituencyWhereInput,
  })
  @Field(() => ConstituencyWhereInput, { nullable: true })
  @Type(() => ConstituencyWhereInput)
  where?: ConstituencyWhereInput;

  @ApiProperty({
    required: false,
    type: [ConstituencyOrderByInput],
  })
  @Field(() => [ConstituencyOrderByInput], { nullable: true })
  @Type(() => ConstituencyOrderByInput)
  orderBy?: Array<ConstituencyOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ConstituencyFindManyArgs };

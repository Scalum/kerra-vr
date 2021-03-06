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
import { ConstituencyWhereUniqueInput } from "../../constituency/base/ConstituencyWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
@InputType()
class ProjectHasConstituencyCreateInput {
  @ApiProperty({
    required: true,
    type: () => ConstituencyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConstituencyWhereUniqueInput)
  @Field(() => ConstituencyWhereUniqueInput)
  constituency!: ConstituencyWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereUniqueInput)
  @Field(() => ProjectWhereUniqueInput)
  project!: ProjectWhereUniqueInput;
}
export { ProjectHasConstituencyCreateInput };

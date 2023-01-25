import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileCreateInput } from "../../../inputs/UserProfileCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUserProfileArgs {
  @TypeGraphQL.Field(_type => UserProfileCreateInput, {
    nullable: false
  })
  data!: UserProfileCreateInput;
}

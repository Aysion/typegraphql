import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutUserProfileInput } from "../inputs/UserUpdateWithoutUserProfileInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutUserProfileInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutUserProfileInput, {
    nullable: false
  })
  data!: UserUpdateWithoutUserProfileInput;
}

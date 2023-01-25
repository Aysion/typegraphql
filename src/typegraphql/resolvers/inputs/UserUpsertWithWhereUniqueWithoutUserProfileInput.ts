import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUserProfileInput } from "../inputs/UserCreateWithoutUserProfileInput";
import { UserUpdateWithoutUserProfileInput } from "../inputs/UserUpdateWithoutUserProfileInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutUserProfileInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutUserProfileInput, {
    nullable: false
  })
  update!: UserUpdateWithoutUserProfileInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUserProfileInput, {
    nullable: false
  })
  create!: UserCreateWithoutUserProfileInput;
}

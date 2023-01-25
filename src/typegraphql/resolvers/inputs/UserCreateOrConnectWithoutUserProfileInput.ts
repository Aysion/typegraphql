import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUserProfileInput } from "../inputs/UserCreateWithoutUserProfileInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutUserProfileInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUserProfileInput, {
    nullable: false
  })
  create!: UserCreateWithoutUserProfileInput;
}

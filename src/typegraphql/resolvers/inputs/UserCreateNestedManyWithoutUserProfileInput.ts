import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUserProfileInput } from "../inputs/UserCreateOrConnectWithoutUserProfileInput";
import { UserCreateWithoutUserProfileInput } from "../inputs/UserCreateWithoutUserProfileInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutUserProfileInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutUserProfileInput], {
    nullable: true
  })
  create?: UserCreateWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutUserProfileInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutTenantInput } from "../inputs/UserProfileCreateWithoutTenantInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCreateOrConnectWithoutTenantInput", {
  isAbstract: true
})
export class UserProfileCreateOrConnectWithoutTenantInput {
  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutTenantInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutTenantInput;
}

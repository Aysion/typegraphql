import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileUpdateWithoutTenantInput } from "../inputs/UserProfileUpdateWithoutTenantInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileUpdateWithWhereUniqueWithoutTenantInput", {
  isAbstract: true
})
export class UserProfileUpdateWithWhereUniqueWithoutTenantInput {
  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutTenantInput, {
    nullable: false
  })
  data!: UserProfileUpdateWithoutTenantInput;
}

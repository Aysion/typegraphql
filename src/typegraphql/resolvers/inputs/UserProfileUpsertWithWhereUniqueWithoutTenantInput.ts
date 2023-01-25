import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateWithoutTenantInput } from "../inputs/UserProfileCreateWithoutTenantInput";
import { UserProfileUpdateWithoutTenantInput } from "../inputs/UserProfileUpdateWithoutTenantInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileUpsertWithWhereUniqueWithoutTenantInput", {
  isAbstract: true
})
export class UserProfileUpsertWithWhereUniqueWithoutTenantInput {
  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: false
  })
  where!: UserProfileWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProfileUpdateWithoutTenantInput, {
    nullable: false
  })
  update!: UserProfileUpdateWithoutTenantInput;

  @TypeGraphQL.Field(_type => UserProfileCreateWithoutTenantInput, {
    nullable: false
  })
  create!: UserProfileCreateWithoutTenantInput;
}

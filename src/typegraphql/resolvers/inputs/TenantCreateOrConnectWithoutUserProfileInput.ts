import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateWithoutUserProfileInput } from "../inputs/TenantCreateWithoutUserProfileInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";

@TypeGraphQL.InputType("TenantCreateOrConnectWithoutUserProfileInput", {
  isAbstract: true
})
export class TenantCreateOrConnectWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: false
  })
  where!: TenantWhereUniqueInput;

  @TypeGraphQL.Field(_type => TenantCreateWithoutUserProfileInput, {
    nullable: false
  })
  create!: TenantCreateWithoutUserProfileInput;
}

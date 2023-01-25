import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateWithoutUserInput } from "../inputs/TenantCreateWithoutUserInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";

@TypeGraphQL.InputType("TenantCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class TenantCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: false
  })
  where!: TenantWhereUniqueInput;

  @TypeGraphQL.Field(_type => TenantCreateWithoutUserInput, {
    nullable: false
  })
  create!: TenantCreateWithoutUserInput;
}

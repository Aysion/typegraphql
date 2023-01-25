import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateWithoutPropertyCategoryInput } from "../inputs/TenantCreateWithoutPropertyCategoryInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";

@TypeGraphQL.InputType("TenantCreateOrConnectWithoutPropertyCategoryInput", {
  isAbstract: true
})
export class TenantCreateOrConnectWithoutPropertyCategoryInput {
  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: false
  })
  where!: TenantWhereUniqueInput;

  @TypeGraphQL.Field(_type => TenantCreateWithoutPropertyCategoryInput, {
    nullable: false
  })
  create!: TenantCreateWithoutPropertyCategoryInput;
}

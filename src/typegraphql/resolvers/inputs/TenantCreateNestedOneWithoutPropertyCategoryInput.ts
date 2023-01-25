import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateOrConnectWithoutPropertyCategoryInput } from "../inputs/TenantCreateOrConnectWithoutPropertyCategoryInput";
import { TenantCreateWithoutPropertyCategoryInput } from "../inputs/TenantCreateWithoutPropertyCategoryInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";

@TypeGraphQL.InputType("TenantCreateNestedOneWithoutPropertyCategoryInput", {
  isAbstract: true
})
export class TenantCreateNestedOneWithoutPropertyCategoryInput {
  @TypeGraphQL.Field(_type => TenantCreateWithoutPropertyCategoryInput, {
    nullable: true
  })
  create?: TenantCreateWithoutPropertyCategoryInput | undefined;

  @TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutPropertyCategoryInput, {
    nullable: true
  })
  connectOrCreate?: TenantCreateOrConnectWithoutPropertyCategoryInput | undefined;

  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: true
  })
  connect?: TenantWhereUniqueInput | undefined;
}

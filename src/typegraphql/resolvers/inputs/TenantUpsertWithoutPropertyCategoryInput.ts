import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateWithoutPropertyCategoryInput } from "../inputs/TenantCreateWithoutPropertyCategoryInput";
import { TenantUpdateWithoutPropertyCategoryInput } from "../inputs/TenantUpdateWithoutPropertyCategoryInput";

@TypeGraphQL.InputType("TenantUpsertWithoutPropertyCategoryInput", {
  isAbstract: true
})
export class TenantUpsertWithoutPropertyCategoryInput {
  @TypeGraphQL.Field(_type => TenantUpdateWithoutPropertyCategoryInput, {
    nullable: false
  })
  update!: TenantUpdateWithoutPropertyCategoryInput;

  @TypeGraphQL.Field(_type => TenantCreateWithoutPropertyCategoryInput, {
    nullable: false
  })
  create!: TenantCreateWithoutPropertyCategoryInput;
}

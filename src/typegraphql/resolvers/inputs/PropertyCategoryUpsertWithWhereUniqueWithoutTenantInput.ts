import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PropertyCategoryCreateWithoutTenantInput } from "../inputs/PropertyCategoryCreateWithoutTenantInput";
import { PropertyCategoryUpdateWithoutTenantInput } from "../inputs/PropertyCategoryUpdateWithoutTenantInput";
import { PropertyCategoryWhereUniqueInput } from "../inputs/PropertyCategoryWhereUniqueInput";

@TypeGraphQL.InputType("PropertyCategoryUpsertWithWhereUniqueWithoutTenantInput", {
  isAbstract: true
})
export class PropertyCategoryUpsertWithWhereUniqueWithoutTenantInput {
  @TypeGraphQL.Field(_type => PropertyCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: PropertyCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => PropertyCategoryUpdateWithoutTenantInput, {
    nullable: false
  })
  update!: PropertyCategoryUpdateWithoutTenantInput;

  @TypeGraphQL.Field(_type => PropertyCategoryCreateWithoutTenantInput, {
    nullable: false
  })
  create!: PropertyCategoryCreateWithoutTenantInput;
}

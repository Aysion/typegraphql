import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PropertyCategoryCreateWithoutTenantInput } from "../inputs/PropertyCategoryCreateWithoutTenantInput";
import { PropertyCategoryWhereUniqueInput } from "../inputs/PropertyCategoryWhereUniqueInput";

@TypeGraphQL.InputType("PropertyCategoryCreateOrConnectWithoutTenantInput", {
  isAbstract: true
})
export class PropertyCategoryCreateOrConnectWithoutTenantInput {
  @TypeGraphQL.Field(_type => PropertyCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: PropertyCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => PropertyCategoryCreateWithoutTenantInput, {
    nullable: false
  })
  create!: PropertyCategoryCreateWithoutTenantInput;
}

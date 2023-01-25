import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PropertyCategoryUpdateWithoutTenantInput } from "../inputs/PropertyCategoryUpdateWithoutTenantInput";
import { PropertyCategoryWhereUniqueInput } from "../inputs/PropertyCategoryWhereUniqueInput";

@TypeGraphQL.InputType("PropertyCategoryUpdateWithWhereUniqueWithoutTenantInput", {
  isAbstract: true
})
export class PropertyCategoryUpdateWithWhereUniqueWithoutTenantInput {
  @TypeGraphQL.Field(_type => PropertyCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: PropertyCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => PropertyCategoryUpdateWithoutTenantInput, {
    nullable: false
  })
  data!: PropertyCategoryUpdateWithoutTenantInput;
}

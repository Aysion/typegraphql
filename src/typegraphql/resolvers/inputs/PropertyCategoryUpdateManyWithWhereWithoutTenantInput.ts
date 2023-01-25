import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PropertyCategoryScalarWhereInput } from "../inputs/PropertyCategoryScalarWhereInput";
import { PropertyCategoryUpdateManyMutationInput } from "../inputs/PropertyCategoryUpdateManyMutationInput";

@TypeGraphQL.InputType("PropertyCategoryUpdateManyWithWhereWithoutTenantInput", {
  isAbstract: true
})
export class PropertyCategoryUpdateManyWithWhereWithoutTenantInput {
  @TypeGraphQL.Field(_type => PropertyCategoryScalarWhereInput, {
    nullable: false
  })
  where!: PropertyCategoryScalarWhereInput;

  @TypeGraphQL.Field(_type => PropertyCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: PropertyCategoryUpdateManyMutationInput;
}

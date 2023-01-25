import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PropertyCategoryCreateOrConnectWithoutTenantInput } from "../inputs/PropertyCategoryCreateOrConnectWithoutTenantInput";
import { PropertyCategoryCreateWithoutTenantInput } from "../inputs/PropertyCategoryCreateWithoutTenantInput";
import { PropertyCategoryWhereUniqueInput } from "../inputs/PropertyCategoryWhereUniqueInput";

@TypeGraphQL.InputType("PropertyCategoryCreateNestedManyWithoutTenantInput", {
  isAbstract: true
})
export class PropertyCategoryCreateNestedManyWithoutTenantInput {
  @TypeGraphQL.Field(_type => [PropertyCategoryCreateWithoutTenantInput], {
    nullable: true
  })
  create?: PropertyCategoryCreateWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryCreateOrConnectWithoutTenantInput], {
    nullable: true
  })
  connectOrCreate?: PropertyCategoryCreateOrConnectWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: PropertyCategoryWhereUniqueInput[] | undefined;
}

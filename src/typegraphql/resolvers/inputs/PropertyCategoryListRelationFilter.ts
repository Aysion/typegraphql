import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PropertyCategoryWhereInput } from "../inputs/PropertyCategoryWhereInput";

@TypeGraphQL.InputType("PropertyCategoryListRelationFilter", {
  isAbstract: true
})
export class PropertyCategoryListRelationFilter {
  @TypeGraphQL.Field(_type => PropertyCategoryWhereInput, {
    nullable: true
  })
  every?: PropertyCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => PropertyCategoryWhereInput, {
    nullable: true
  })
  some?: PropertyCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => PropertyCategoryWhereInput, {
    nullable: true
  })
  none?: PropertyCategoryWhereInput | undefined;
}

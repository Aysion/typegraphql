import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PropertyCategoryCountOrderByAggregateInput } from "../inputs/PropertyCategoryCountOrderByAggregateInput";
import { PropertyCategoryMaxOrderByAggregateInput } from "../inputs/PropertyCategoryMaxOrderByAggregateInput";
import { PropertyCategoryMinOrderByAggregateInput } from "../inputs/PropertyCategoryMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PropertyCategoryOrderByWithAggregationInput", {
  isAbstract: true
})
export class PropertyCategoryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdBy?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedBy?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deletedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deletedBy?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tenantId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PropertyCategoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PropertyCategoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PropertyCategoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PropertyCategoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PropertyCategoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PropertyCategoryMinOrderByAggregateInput | undefined;
}

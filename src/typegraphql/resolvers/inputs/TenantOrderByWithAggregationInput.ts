import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCountOrderByAggregateInput } from "../inputs/TenantCountOrderByAggregateInput";
import { TenantMaxOrderByAggregateInput } from "../inputs/TenantMaxOrderByAggregateInput";
import { TenantMinOrderByAggregateInput } from "../inputs/TenantMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TenantOrderByWithAggregationInput", {
  isAbstract: true
})
export class TenantOrderByWithAggregationInput {
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
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subdomain?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  domain?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TenantCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TenantCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TenantMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TenantMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TenantMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TenantMinOrderByAggregateInput | undefined;
}

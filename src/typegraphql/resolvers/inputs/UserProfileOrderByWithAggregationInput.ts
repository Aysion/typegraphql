import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileAvgOrderByAggregateInput } from "../inputs/UserProfileAvgOrderByAggregateInput";
import { UserProfileCountOrderByAggregateInput } from "../inputs/UserProfileCountOrderByAggregateInput";
import { UserProfileMaxOrderByAggregateInput } from "../inputs/UserProfileMaxOrderByAggregateInput";
import { UserProfileMinOrderByAggregateInput } from "../inputs/UserProfileMinOrderByAggregateInput";
import { UserProfileSumOrderByAggregateInput } from "../inputs/UserProfileSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserProfileOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserProfileOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  level?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserProfileCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserProfileCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UserProfileAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserProfileMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserProfileMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserProfileSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UserProfileSumOrderByAggregateInput | undefined;
}

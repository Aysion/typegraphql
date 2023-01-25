import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PropertyCategoryOrderByRelationAggregateInput } from "../inputs/PropertyCategoryOrderByRelationAggregateInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
import { UserProfileOrderByRelationAggregateInput } from "../inputs/UserProfileOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TenantOrderByWithRelationInput", {
  isAbstract: true
})
export class TenantOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => UserProfileOrderByRelationAggregateInput, {
    nullable: true
  })
  UserProfile?: UserProfileOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput, {
    nullable: true
  })
  User?: UserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PropertyCategoryOrderByRelationAggregateInput, {
    nullable: true
  })
  PropertyCategory?: PropertyCategoryOrderByRelationAggregateInput | undefined;
}

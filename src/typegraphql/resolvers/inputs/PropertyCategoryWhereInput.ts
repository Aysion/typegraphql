import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TenantRelationFilter } from "../inputs/TenantRelationFilter";

@TypeGraphQL.InputType("PropertyCategoryWhereInput", {
  isAbstract: true
})
export class PropertyCategoryWhereInput {
  @TypeGraphQL.Field(_type => [PropertyCategoryWhereInput], {
    nullable: true
  })
  AND?: PropertyCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryWhereInput], {
    nullable: true
  })
  OR?: PropertyCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryWhereInput], {
    nullable: true
  })
  NOT?: PropertyCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  createdBy?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  updatedBy?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  deletedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  deletedBy?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TenantRelationFilter, {
    nullable: true
  })
  tenant?: TenantRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tenantId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}

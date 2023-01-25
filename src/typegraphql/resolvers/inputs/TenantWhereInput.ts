import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { PropertyCategoryListRelationFilter } from "../inputs/PropertyCategoryListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
import { UserProfileListRelationFilter } from "../inputs/UserProfileListRelationFilter";

@TypeGraphQL.InputType("TenantWhereInput", {
  isAbstract: true
})
export class TenantWhereInput {
  @TypeGraphQL.Field(_type => [TenantWhereInput], {
    nullable: true
  })
  AND?: TenantWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantWhereInput], {
    nullable: true
  })
  OR?: TenantWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TenantWhereInput], {
    nullable: true
  })
  NOT?: TenantWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  subdomain?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  domain?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserProfileListRelationFilter, {
    nullable: true
  })
  UserProfile?: UserProfileListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  User?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PropertyCategoryListRelationFilter, {
    nullable: true
  })
  PropertyCategory?: PropertyCategoryListRelationFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";

export enum PropertyCategoryScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  createdBy = "createdBy",
  updatedAt = "updatedAt",
  updatedBy = "updatedBy",
  deletedAt = "deletedAt",
  deletedBy = "deletedBy",
  tenantId = "tenantId",
  name = "name"
}
TypeGraphQL.registerEnumType(PropertyCategoryScalarFieldEnum, {
  name: "PropertyCategoryScalarFieldEnum",
  description: undefined,
});

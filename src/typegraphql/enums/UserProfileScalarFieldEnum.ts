import * as TypeGraphQL from "type-graphql";

export enum UserProfileScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  createdBy = "createdBy",
  updatedAt = "updatedAt",
  updatedBy = "updatedBy",
  deletedAt = "deletedAt",
  deletedBy = "deletedBy",
  tenantId = "tenantId",
  name = "name",
  level = "level"
}
TypeGraphQL.registerEnumType(UserProfileScalarFieldEnum, {
  name: "UserProfileScalarFieldEnum",
  description: undefined,
});

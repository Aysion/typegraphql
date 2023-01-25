import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  createdBy = "createdBy",
  updatedAt = "updatedAt",
  updatedBy = "updatedBy",
  deletedAt = "deletedAt",
  deletedBy = "deletedBy",
  tenantId = "tenantId",
  userProfileId = "userProfileId",
  email = "email",
  name = "name",
  password = "password"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});

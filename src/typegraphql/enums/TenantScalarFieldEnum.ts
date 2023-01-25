import * as TypeGraphQL from "type-graphql";

export enum TenantScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  createdBy = "createdBy",
  updatedAt = "updatedAt",
  updatedBy = "updatedBy",
  deletedAt = "deletedAt",
  deletedBy = "deletedBy",
  name = "name",
  subdomain = "subdomain",
  domain = "domain"
}
TypeGraphQL.registerEnumType(TenantScalarFieldEnum, {
  name: "TenantScalarFieldEnum",
  description: undefined,
});

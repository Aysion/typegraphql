import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PropertyCategoryCreateNestedManyWithoutTenantInput } from "../inputs/PropertyCategoryCreateNestedManyWithoutTenantInput";
import { UserProfileCreateNestedManyWithoutTenantInput } from "../inputs/UserProfileCreateNestedManyWithoutTenantInput";

@TypeGraphQL.InputType("TenantCreateWithoutUserInput", {
  isAbstract: true
})
export class TenantCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deletedBy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subdomain?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  domain?: string | undefined;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedManyWithoutTenantInput, {
    nullable: true
  })
  UserProfile?: UserProfileCreateNestedManyWithoutTenantInput | undefined;

  @TypeGraphQL.Field(_type => PropertyCategoryCreateNestedManyWithoutTenantInput, {
    nullable: true
  })
  PropertyCategory?: PropertyCategoryCreateNestedManyWithoutTenantInput | undefined;
}

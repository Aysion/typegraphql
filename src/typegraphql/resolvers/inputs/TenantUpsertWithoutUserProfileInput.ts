import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateWithoutUserProfileInput } from "../inputs/TenantCreateWithoutUserProfileInput";
import { TenantUpdateWithoutUserProfileInput } from "../inputs/TenantUpdateWithoutUserProfileInput";

@TypeGraphQL.InputType("TenantUpsertWithoutUserProfileInput", {
  isAbstract: true
})
export class TenantUpsertWithoutUserProfileInput {
  @TypeGraphQL.Field(_type => TenantUpdateWithoutUserProfileInput, {
    nullable: false
  })
  update!: TenantUpdateWithoutUserProfileInput;

  @TypeGraphQL.Field(_type => TenantCreateWithoutUserProfileInput, {
    nullable: false
  })
  create!: TenantCreateWithoutUserProfileInput;
}

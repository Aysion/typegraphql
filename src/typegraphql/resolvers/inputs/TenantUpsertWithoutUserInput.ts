import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateWithoutUserInput } from "../inputs/TenantCreateWithoutUserInput";
import { TenantUpdateWithoutUserInput } from "../inputs/TenantUpdateWithoutUserInput";

@TypeGraphQL.InputType("TenantUpsertWithoutUserInput", {
  isAbstract: true
})
export class TenantUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => TenantUpdateWithoutUserInput, {
    nullable: false
  })
  update!: TenantUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => TenantCreateWithoutUserInput, {
    nullable: false
  })
  create!: TenantCreateWithoutUserInput;
}

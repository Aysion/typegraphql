import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateOrConnectWithoutUserInput } from "../inputs/TenantCreateOrConnectWithoutUserInput";
import { TenantCreateWithoutUserInput } from "../inputs/TenantCreateWithoutUserInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";

@TypeGraphQL.InputType("TenantCreateNestedOneWithoutUserInput", {
  isAbstract: true
})
export class TenantCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => TenantCreateWithoutUserInput, {
    nullable: true
  })
  create?: TenantCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: TenantCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: true
  })
  connect?: TenantWhereUniqueInput | undefined;
}

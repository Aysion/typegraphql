import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateOrConnectWithoutUserInput } from "../inputs/TenantCreateOrConnectWithoutUserInput";
import { TenantCreateWithoutUserInput } from "../inputs/TenantCreateWithoutUserInput";
import { TenantUpdateWithoutUserInput } from "../inputs/TenantUpdateWithoutUserInput";
import { TenantUpsertWithoutUserInput } from "../inputs/TenantUpsertWithoutUserInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";

@TypeGraphQL.InputType("TenantUpdateOneRequiredWithoutUserNestedInput", {
  isAbstract: true
})
export class TenantUpdateOneRequiredWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => TenantCreateWithoutUserInput, {
    nullable: true
  })
  create?: TenantCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: TenantCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TenantUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: TenantUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: true
  })
  connect?: TenantWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TenantUpdateWithoutUserInput, {
    nullable: true
  })
  update?: TenantUpdateWithoutUserInput | undefined;
}

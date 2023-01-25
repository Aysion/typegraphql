import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateOrConnectWithoutUserProfileInput } from "../inputs/TenantCreateOrConnectWithoutUserProfileInput";
import { TenantCreateWithoutUserProfileInput } from "../inputs/TenantCreateWithoutUserProfileInput";
import { TenantUpdateWithoutUserProfileInput } from "../inputs/TenantUpdateWithoutUserProfileInput";
import { TenantUpsertWithoutUserProfileInput } from "../inputs/TenantUpsertWithoutUserProfileInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";

@TypeGraphQL.InputType("TenantUpdateOneRequiredWithoutUserProfileNestedInput", {
  isAbstract: true
})
export class TenantUpdateOneRequiredWithoutUserProfileNestedInput {
  @TypeGraphQL.Field(_type => TenantCreateWithoutUserProfileInput, {
    nullable: true
  })
  create?: TenantCreateWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutUserProfileInput, {
    nullable: true
  })
  connectOrCreate?: TenantCreateOrConnectWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => TenantUpsertWithoutUserProfileInput, {
    nullable: true
  })
  upsert?: TenantUpsertWithoutUserProfileInput | undefined;

  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: true
  })
  connect?: TenantWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TenantUpdateWithoutUserProfileInput, {
    nullable: true
  })
  update?: TenantUpdateWithoutUserProfileInput | undefined;
}

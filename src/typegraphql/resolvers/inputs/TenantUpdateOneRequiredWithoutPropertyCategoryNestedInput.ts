import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateOrConnectWithoutPropertyCategoryInput } from "../inputs/TenantCreateOrConnectWithoutPropertyCategoryInput";
import { TenantCreateWithoutPropertyCategoryInput } from "../inputs/TenantCreateWithoutPropertyCategoryInput";
import { TenantUpdateWithoutPropertyCategoryInput } from "../inputs/TenantUpdateWithoutPropertyCategoryInput";
import { TenantUpsertWithoutPropertyCategoryInput } from "../inputs/TenantUpsertWithoutPropertyCategoryInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";

@TypeGraphQL.InputType("TenantUpdateOneRequiredWithoutPropertyCategoryNestedInput", {
  isAbstract: true
})
export class TenantUpdateOneRequiredWithoutPropertyCategoryNestedInput {
  @TypeGraphQL.Field(_type => TenantCreateWithoutPropertyCategoryInput, {
    nullable: true
  })
  create?: TenantCreateWithoutPropertyCategoryInput | undefined;

  @TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutPropertyCategoryInput, {
    nullable: true
  })
  connectOrCreate?: TenantCreateOrConnectWithoutPropertyCategoryInput | undefined;

  @TypeGraphQL.Field(_type => TenantUpsertWithoutPropertyCategoryInput, {
    nullable: true
  })
  upsert?: TenantUpsertWithoutPropertyCategoryInput | undefined;

  @TypeGraphQL.Field(_type => TenantWhereUniqueInput, {
    nullable: true
  })
  connect?: TenantWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TenantUpdateWithoutPropertyCategoryInput, {
    nullable: true
  })
  update?: TenantUpdateWithoutPropertyCategoryInput | undefined;
}

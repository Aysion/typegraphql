import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PropertyCategoryCreateOrConnectWithoutTenantInput } from "../inputs/PropertyCategoryCreateOrConnectWithoutTenantInput";
import { PropertyCategoryCreateWithoutTenantInput } from "../inputs/PropertyCategoryCreateWithoutTenantInput";
import { PropertyCategoryScalarWhereInput } from "../inputs/PropertyCategoryScalarWhereInput";
import { PropertyCategoryUpdateManyWithWhereWithoutTenantInput } from "../inputs/PropertyCategoryUpdateManyWithWhereWithoutTenantInput";
import { PropertyCategoryUpdateWithWhereUniqueWithoutTenantInput } from "../inputs/PropertyCategoryUpdateWithWhereUniqueWithoutTenantInput";
import { PropertyCategoryUpsertWithWhereUniqueWithoutTenantInput } from "../inputs/PropertyCategoryUpsertWithWhereUniqueWithoutTenantInput";
import { PropertyCategoryWhereUniqueInput } from "../inputs/PropertyCategoryWhereUniqueInput";

@TypeGraphQL.InputType("PropertyCategoryUpdateManyWithoutTenantNestedInput", {
  isAbstract: true
})
export class PropertyCategoryUpdateManyWithoutTenantNestedInput {
  @TypeGraphQL.Field(_type => [PropertyCategoryCreateWithoutTenantInput], {
    nullable: true
  })
  create?: PropertyCategoryCreateWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryCreateOrConnectWithoutTenantInput], {
    nullable: true
  })
  connectOrCreate?: PropertyCategoryCreateOrConnectWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryUpsertWithWhereUniqueWithoutTenantInput], {
    nullable: true
  })
  upsert?: PropertyCategoryUpsertWithWhereUniqueWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryWhereUniqueInput], {
    nullable: true
  })
  set?: PropertyCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PropertyCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryWhereUniqueInput], {
    nullable: true
  })
  delete?: PropertyCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: PropertyCategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryUpdateWithWhereUniqueWithoutTenantInput], {
    nullable: true
  })
  update?: PropertyCategoryUpdateWithWhereUniqueWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryUpdateManyWithWhereWithoutTenantInput], {
    nullable: true
  })
  updateMany?: PropertyCategoryUpdateManyWithWhereWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PropertyCategoryScalarWhereInput[] | undefined;
}

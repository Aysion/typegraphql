import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutTenantInput } from "../inputs/UserProfileCreateOrConnectWithoutTenantInput";
import { UserProfileCreateWithoutTenantInput } from "../inputs/UserProfileCreateWithoutTenantInput";
import { UserProfileScalarWhereInput } from "../inputs/UserProfileScalarWhereInput";
import { UserProfileUpdateManyWithWhereWithoutTenantInput } from "../inputs/UserProfileUpdateManyWithWhereWithoutTenantInput";
import { UserProfileUpdateWithWhereUniqueWithoutTenantInput } from "../inputs/UserProfileUpdateWithWhereUniqueWithoutTenantInput";
import { UserProfileUpsertWithWhereUniqueWithoutTenantInput } from "../inputs/UserProfileUpsertWithWhereUniqueWithoutTenantInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileUpdateManyWithoutTenantNestedInput", {
  isAbstract: true
})
export class UserProfileUpdateManyWithoutTenantNestedInput {
  @TypeGraphQL.Field(_type => [UserProfileCreateWithoutTenantInput], {
    nullable: true
  })
  create?: UserProfileCreateWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCreateOrConnectWithoutTenantInput], {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileUpsertWithWhereUniqueWithoutTenantInput], {
    nullable: true
  })
  upsert?: UserProfileUpsertWithWhereUniqueWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileWhereUniqueInput], {
    nullable: true
  })
  set?: UserProfileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserProfileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileWhereUniqueInput], {
    nullable: true
  })
  delete?: UserProfileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileWhereUniqueInput], {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileUpdateWithWhereUniqueWithoutTenantInput], {
    nullable: true
  })
  update?: UserProfileUpdateWithWhereUniqueWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileUpdateManyWithWhereWithoutTenantInput], {
    nullable: true
  })
  updateMany?: UserProfileUpdateManyWithWhereWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserProfileScalarWhereInput[] | undefined;
}

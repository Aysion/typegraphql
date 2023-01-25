import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileCreateOrConnectWithoutTenantInput } from "../inputs/UserProfileCreateOrConnectWithoutTenantInput";
import { UserProfileCreateWithoutTenantInput } from "../inputs/UserProfileCreateWithoutTenantInput";
import { UserProfileWhereUniqueInput } from "../inputs/UserProfileWhereUniqueInput";

@TypeGraphQL.InputType("UserProfileCreateNestedManyWithoutTenantInput", {
  isAbstract: true
})
export class UserProfileCreateNestedManyWithoutTenantInput {
  @TypeGraphQL.Field(_type => [UserProfileCreateWithoutTenantInput], {
    nullable: true
  })
  create?: UserProfileCreateWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileCreateOrConnectWithoutTenantInput], {
    nullable: true
  })
  connectOrCreate?: UserProfileCreateOrConnectWithoutTenantInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileWhereUniqueInput], {
    nullable: true
  })
  connect?: UserProfileWhereUniqueInput[] | undefined;
}

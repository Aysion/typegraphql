import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUserProfileInput } from "../inputs/UserCreateOrConnectWithoutUserProfileInput";
import { UserCreateWithoutUserProfileInput } from "../inputs/UserCreateWithoutUserProfileInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutUserProfileInput } from "../inputs/UserUpdateManyWithWhereWithoutUserProfileInput";
import { UserUpdateWithWhereUniqueWithoutUserProfileInput } from "../inputs/UserUpdateWithWhereUniqueWithoutUserProfileInput";
import { UserUpsertWithWhereUniqueWithoutUserProfileInput } from "../inputs/UserUpsertWithWhereUniqueWithoutUserProfileInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutUserProfileNestedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutUserProfileNestedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutUserProfileInput], {
    nullable: true
  })
  create?: UserCreateWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutUserProfileInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutUserProfileInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutUserProfileInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutUserProfileInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutUserProfileInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}

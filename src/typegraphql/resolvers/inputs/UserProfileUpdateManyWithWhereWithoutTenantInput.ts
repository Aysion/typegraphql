import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileScalarWhereInput } from "../inputs/UserProfileScalarWhereInput";
import { UserProfileUpdateManyMutationInput } from "../inputs/UserProfileUpdateManyMutationInput";

@TypeGraphQL.InputType("UserProfileUpdateManyWithWhereWithoutTenantInput", {
  isAbstract: true
})
export class UserProfileUpdateManyWithWhereWithoutTenantInput {
  @TypeGraphQL.Field(_type => UserProfileScalarWhereInput, {
    nullable: false
  })
  where!: UserProfileScalarWhereInput;

  @TypeGraphQL.Field(_type => UserProfileUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserProfileUpdateManyMutationInput;
}

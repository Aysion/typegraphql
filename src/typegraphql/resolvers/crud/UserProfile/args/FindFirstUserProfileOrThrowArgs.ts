import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileOrderByWithRelationInput } from "../../../inputs/UserProfileOrderByWithRelationInput";
import { UserProfileWhereInput } from "../../../inputs/UserProfileWhereInput";
import { UserProfileWhereUniqueInput } from "../../../inputs/UserProfileWhereUniqueInput";
import { UserProfileScalarFieldEnum } from "../../../../enums/UserProfileScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUserProfileOrThrowArgs {
  @TypeGraphQL.Field(_type => UserProfileWhereInput, {
    nullable: true
  })
  where?: UserProfileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserProfileOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserProfileOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserProfileWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserProfileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserProfileScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy" | "tenantId" | "name" | "level"> | undefined;
}

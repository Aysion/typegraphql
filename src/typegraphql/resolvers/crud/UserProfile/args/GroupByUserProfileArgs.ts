import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProfileOrderByWithAggregationInput } from "../../../inputs/UserProfileOrderByWithAggregationInput";
import { UserProfileScalarWhereWithAggregatesInput } from "../../../inputs/UserProfileScalarWhereWithAggregatesInput";
import { UserProfileWhereInput } from "../../../inputs/UserProfileWhereInput";
import { UserProfileScalarFieldEnum } from "../../../../enums/UserProfileScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserProfileArgs {
  @TypeGraphQL.Field(_type => UserProfileWhereInput, {
    nullable: true
  })
  where?: UserProfileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserProfileOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserProfileOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProfileScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy" | "tenantId" | "name" | "level">;

  @TypeGraphQL.Field(_type => UserProfileScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserProfileScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

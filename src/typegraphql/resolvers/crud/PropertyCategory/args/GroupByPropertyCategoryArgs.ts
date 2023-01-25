import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PropertyCategoryOrderByWithAggregationInput } from "../../../inputs/PropertyCategoryOrderByWithAggregationInput";
import { PropertyCategoryScalarWhereWithAggregatesInput } from "../../../inputs/PropertyCategoryScalarWhereWithAggregatesInput";
import { PropertyCategoryWhereInput } from "../../../inputs/PropertyCategoryWhereInput";
import { PropertyCategoryScalarFieldEnum } from "../../../../enums/PropertyCategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPropertyCategoryArgs {
  @TypeGraphQL.Field(_type => PropertyCategoryWhereInput, {
    nullable: true
  })
  where?: PropertyCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PropertyCategoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy" | "tenantId" | "name">;

  @TypeGraphQL.Field(_type => PropertyCategoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PropertyCategoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

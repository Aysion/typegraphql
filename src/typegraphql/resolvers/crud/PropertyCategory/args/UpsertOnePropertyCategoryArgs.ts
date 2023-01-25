import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PropertyCategoryCreateInput } from "../../../inputs/PropertyCategoryCreateInput";
import { PropertyCategoryUpdateInput } from "../../../inputs/PropertyCategoryUpdateInput";
import { PropertyCategoryWhereUniqueInput } from "../../../inputs/PropertyCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePropertyCategoryArgs {
  @TypeGraphQL.Field(_type => PropertyCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: PropertyCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => PropertyCategoryCreateInput, {
    nullable: false
  })
  create!: PropertyCategoryCreateInput;

  @TypeGraphQL.Field(_type => PropertyCategoryUpdateInput, {
    nullable: false
  })
  update!: PropertyCategoryUpdateInput;
}

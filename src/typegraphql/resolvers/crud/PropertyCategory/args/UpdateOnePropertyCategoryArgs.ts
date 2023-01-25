import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PropertyCategoryUpdateInput } from "../../../inputs/PropertyCategoryUpdateInput";
import { PropertyCategoryWhereUniqueInput } from "../../../inputs/PropertyCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePropertyCategoryArgs {
  @TypeGraphQL.Field(_type => PropertyCategoryUpdateInput, {
    nullable: false
  })
  data!: PropertyCategoryUpdateInput;

  @TypeGraphQL.Field(_type => PropertyCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: PropertyCategoryWhereUniqueInput;
}

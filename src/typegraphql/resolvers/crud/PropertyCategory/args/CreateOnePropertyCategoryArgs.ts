import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PropertyCategoryCreateInput } from "../../../inputs/PropertyCategoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePropertyCategoryArgs {
  @TypeGraphQL.Field(_type => PropertyCategoryCreateInput, {
    nullable: false
  })
  data!: PropertyCategoryCreateInput;
}

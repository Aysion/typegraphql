import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PropertyCategoryWhereUniqueInput } from "../../../inputs/PropertyCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePropertyCategoryArgs {
  @TypeGraphQL.Field(_type => PropertyCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: PropertyCategoryWhereUniqueInput;
}

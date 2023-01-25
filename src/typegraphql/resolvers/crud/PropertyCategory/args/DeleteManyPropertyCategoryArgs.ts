import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PropertyCategoryWhereInput } from "../../../inputs/PropertyCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPropertyCategoryArgs {
  @TypeGraphQL.Field(_type => PropertyCategoryWhereInput, {
    nullable: true
  })
  where?: PropertyCategoryWhereInput | undefined;
}

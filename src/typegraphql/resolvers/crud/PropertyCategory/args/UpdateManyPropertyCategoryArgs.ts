import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PropertyCategoryUpdateManyMutationInput } from "../../../inputs/PropertyCategoryUpdateManyMutationInput";
import { PropertyCategoryWhereInput } from "../../../inputs/PropertyCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPropertyCategoryArgs {
  @TypeGraphQL.Field(_type => PropertyCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: PropertyCategoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PropertyCategoryWhereInput, {
    nullable: true
  })
  where?: PropertyCategoryWhereInput | undefined;
}

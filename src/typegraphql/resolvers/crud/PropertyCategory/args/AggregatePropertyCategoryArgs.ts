import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PropertyCategoryOrderByWithRelationInput } from "../../../inputs/PropertyCategoryOrderByWithRelationInput";
import { PropertyCategoryWhereInput } from "../../../inputs/PropertyCategoryWhereInput";
import { PropertyCategoryWhereUniqueInput } from "../../../inputs/PropertyCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePropertyCategoryArgs {
  @TypeGraphQL.Field(_type => PropertyCategoryWhereInput, {
    nullable: true
  })
  where?: PropertyCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PropertyCategoryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PropertyCategoryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PropertyCategoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: PropertyCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

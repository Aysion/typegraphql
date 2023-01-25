import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PropertyCategoryCountAggregate } from "../outputs/PropertyCategoryCountAggregate";
import { PropertyCategoryMaxAggregate } from "../outputs/PropertyCategoryMaxAggregate";
import { PropertyCategoryMinAggregate } from "../outputs/PropertyCategoryMinAggregate";

@TypeGraphQL.ObjectType("AggregatePropertyCategory", {
  isAbstract: true
})
export class AggregatePropertyCategory {
  @TypeGraphQL.Field(_type => PropertyCategoryCountAggregate, {
    nullable: true
  })
  _count!: PropertyCategoryCountAggregate | null;

  @TypeGraphQL.Field(_type => PropertyCategoryMinAggregate, {
    nullable: true
  })
  _min!: PropertyCategoryMinAggregate | null;

  @TypeGraphQL.Field(_type => PropertyCategoryMaxAggregate, {
    nullable: true
  })
  _max!: PropertyCategoryMaxAggregate | null;
}

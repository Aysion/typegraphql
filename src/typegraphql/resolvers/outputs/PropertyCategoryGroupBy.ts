import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PropertyCategoryCountAggregate } from "../outputs/PropertyCategoryCountAggregate";
import { PropertyCategoryMaxAggregate } from "../outputs/PropertyCategoryMaxAggregate";
import { PropertyCategoryMinAggregate } from "../outputs/PropertyCategoryMinAggregate";

@TypeGraphQL.ObjectType("PropertyCategoryGroupBy", {
  isAbstract: true
})
export class PropertyCategoryGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deletedBy!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tenantId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

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

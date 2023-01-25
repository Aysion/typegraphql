import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TenantCreateNestedOneWithoutPropertyCategoryInput } from "../inputs/TenantCreateNestedOneWithoutPropertyCategoryInput";

@TypeGraphQL.InputType("PropertyCategoryCreateInput", {
  isAbstract: true
})
export class PropertyCategoryCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  createdBy?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deletedBy?: string | undefined;

  @TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutPropertyCategoryInput, {
    nullable: false
  })
  tenant!: TenantCreateNestedOneWithoutPropertyCategoryInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;
}

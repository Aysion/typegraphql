import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Tenant } from "../models/Tenant";

@TypeGraphQL.ObjectType("PropertyCategory", {
  isAbstract: true
})
export class PropertyCategory {
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
  createdBy?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  updatedBy?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deletedBy?: string | null;

  tenant?: Tenant;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tenantId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;
}

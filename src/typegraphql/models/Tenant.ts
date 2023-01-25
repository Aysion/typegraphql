import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PropertyCategory } from "../models/PropertyCategory";
import { User } from "../models/User";
import { UserProfile } from "../models/UserProfile";
import { TenantCount } from "../resolvers/outputs/TenantCount";

@TypeGraphQL.ObjectType("Tenant", {
  isAbstract: true
})
export class Tenant {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subdomain?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  domain?: string | null;

  UserProfile?: UserProfile[];

  User?: User[];

  PropertyCategory?: PropertyCategory[];

  @TypeGraphQL.Field(_type => TenantCount, {
    nullable: true
  })
  _count?: TenantCount | null;
}

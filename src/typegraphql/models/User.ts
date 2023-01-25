import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Tenant } from "../models/Tenant";
import { UserProfile } from "../models/UserProfile";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
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

  userProfile?: UserProfile;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userProfileId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | null;
}

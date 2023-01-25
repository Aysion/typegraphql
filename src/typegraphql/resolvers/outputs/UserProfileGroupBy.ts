import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileAvgAggregate } from "../outputs/UserProfileAvgAggregate";
import { UserProfileCountAggregate } from "../outputs/UserProfileCountAggregate";
import { UserProfileMaxAggregate } from "../outputs/UserProfileMaxAggregate";
import { UserProfileMinAggregate } from "../outputs/UserProfileMinAggregate";
import { UserProfileSumAggregate } from "../outputs/UserProfileSumAggregate";

@TypeGraphQL.ObjectType("UserProfileGroupBy", {
  isAbstract: true
})
export class UserProfileGroupBy {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  level!: number;

  @TypeGraphQL.Field(_type => UserProfileCountAggregate, {
    nullable: true
  })
  _count!: UserProfileCountAggregate | null;

  @TypeGraphQL.Field(_type => UserProfileAvgAggregate, {
    nullable: true
  })
  _avg!: UserProfileAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserProfileSumAggregate, {
    nullable: true
  })
  _sum!: UserProfileSumAggregate | null;

  @TypeGraphQL.Field(_type => UserProfileMinAggregate, {
    nullable: true
  })
  _min!: UserProfileMinAggregate | null;

  @TypeGraphQL.Field(_type => UserProfileMaxAggregate, {
    nullable: true
  })
  _max!: UserProfileMaxAggregate | null;
}

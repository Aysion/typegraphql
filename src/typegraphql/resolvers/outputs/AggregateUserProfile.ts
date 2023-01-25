import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProfileAvgAggregate } from "../outputs/UserProfileAvgAggregate";
import { UserProfileCountAggregate } from "../outputs/UserProfileCountAggregate";
import { UserProfileMaxAggregate } from "../outputs/UserProfileMaxAggregate";
import { UserProfileMinAggregate } from "../outputs/UserProfileMinAggregate";
import { UserProfileSumAggregate } from "../outputs/UserProfileSumAggregate";

@TypeGraphQL.ObjectType("AggregateUserProfile", {
  isAbstract: true
})
export class AggregateUserProfile {
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

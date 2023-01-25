import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByUserProfileArgs } from "./args/GroupByUserProfileArgs";
import { UserProfile } from "../../../models/UserProfile";
import { UserProfileGroupBy } from "../../outputs/UserProfileGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfile)
export class GroupByUserProfileResolver {
  @TypeGraphQL.Query(_returns => [UserProfileGroupBy], {
    nullable: false
  })
  async groupByUserProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserProfileArgs): Promise<UserProfileGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userProfile.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

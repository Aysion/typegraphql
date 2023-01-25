import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserProfileOrThrowArgs } from "./args/FindFirstUserProfileOrThrowArgs";
import { UserProfile } from "../../../models/UserProfile";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfile)
export class FindFirstUserProfileOrThrowResolver {
  @TypeGraphQL.Query(_returns => UserProfile, {
    nullable: true
  })
  async findFirstUserProfileOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserProfileOrThrowArgs): Promise<UserProfile | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userProfile.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

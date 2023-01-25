import * as TypeGraphQL from "type-graphql";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Tenant, {
    nullable: false
  })
  async tenant(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Tenant> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).tenant({});
  }

  @TypeGraphQL.FieldResolver(_type => UserProfile, {
    nullable: false
  })
  async userProfile(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<UserProfile> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).userProfile({});
  }
}

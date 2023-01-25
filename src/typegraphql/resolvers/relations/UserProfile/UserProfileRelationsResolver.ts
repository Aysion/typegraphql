import * as TypeGraphQL from "type-graphql";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { UserProfileUserArgs } from "./args/UserProfileUserArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProfile)
export class UserProfileRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Tenant, {
    nullable: false
  })
  async tenant(@TypeGraphQL.Root() userProfile: UserProfile, @TypeGraphQL.Ctx() ctx: any): Promise<Tenant> {
    return getPrismaFromContext(ctx).userProfile.findUnique({
      where: {
        id: userProfile.id,
      },
    }).tenant({});
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async User(@TypeGraphQL.Root() userProfile: UserProfile, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserProfileUserArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).userProfile.findUnique({
      where: {
        id: userProfile.id,
      },
    }).User(args);
  }
}

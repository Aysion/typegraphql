import * as TypeGraphQL from "type-graphql";
import { PropertyCategory } from "../../../models/PropertyCategory";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { UserProfile } from "../../../models/UserProfile";
import { TenantPropertyCategoryArgs } from "./args/TenantPropertyCategoryArgs";
import { TenantUserArgs } from "./args/TenantUserArgs";
import { TenantUserProfileArgs } from "./args/TenantUserProfileArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tenant)
export class TenantRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [UserProfile], {
    nullable: false
  })
  async UserProfile(@TypeGraphQL.Root() tenant: Tenant, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TenantUserProfileArgs): Promise<UserProfile[]> {
    return getPrismaFromContext(ctx).tenant.findUnique({
      where: {
        id: tenant.id,
      },
    }).UserProfile(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async User(@TypeGraphQL.Root() tenant: Tenant, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TenantUserArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).tenant.findUnique({
      where: {
        id: tenant.id,
      },
    }).User(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PropertyCategory], {
    nullable: false
  })
  async PropertyCategory(@TypeGraphQL.Root() tenant: Tenant, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TenantPropertyCategoryArgs): Promise<PropertyCategory[]> {
    return getPrismaFromContext(ctx).tenant.findUnique({
      where: {
        id: tenant.id,
      },
    }).PropertyCategory(args);
  }
}

import * as TypeGraphQL from "type-graphql";
import { PropertyCategory } from "../../../models/PropertyCategory";
import { Tenant } from "../../../models/Tenant";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PropertyCategory)
export class PropertyCategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Tenant, {
    nullable: false
  })
  async tenant(@TypeGraphQL.Root() propertyCategory: PropertyCategory, @TypeGraphQL.Ctx() ctx: any): Promise<Tenant> {
    return getPrismaFromContext(ctx).propertyCategory.findUnique({
      where: {
        id: propertyCategory.id,
      },
    }).tenant({});
  }
}

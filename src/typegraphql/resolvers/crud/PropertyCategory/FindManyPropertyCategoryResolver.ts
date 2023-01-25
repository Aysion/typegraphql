import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPropertyCategoryArgs } from "./args/FindManyPropertyCategoryArgs";
import { PropertyCategory } from "../../../models/PropertyCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PropertyCategory)
export class FindManyPropertyCategoryResolver {
  @TypeGraphQL.Query(_returns => [PropertyCategory], {
    nullable: false
  })
  async propertyCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPropertyCategoryArgs): Promise<PropertyCategory[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).propertyCategory.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

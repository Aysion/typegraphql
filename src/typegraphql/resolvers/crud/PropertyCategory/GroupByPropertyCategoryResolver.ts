import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPropertyCategoryArgs } from "./args/GroupByPropertyCategoryArgs";
import { PropertyCategory } from "../../../models/PropertyCategory";
import { PropertyCategoryGroupBy } from "../../outputs/PropertyCategoryGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PropertyCategory)
export class GroupByPropertyCategoryResolver {
  @TypeGraphQL.Query(_returns => [PropertyCategoryGroupBy], {
    nullable: false
  })
  async groupByPropertyCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPropertyCategoryArgs): Promise<PropertyCategoryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).propertyCategory.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

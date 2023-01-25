import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePropertyCategoryArgs } from "./args/AggregatePropertyCategoryArgs";
import { PropertyCategory } from "../../../models/PropertyCategory";
import { AggregatePropertyCategory } from "../../outputs/AggregatePropertyCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PropertyCategory)
export class AggregatePropertyCategoryResolver {
  @TypeGraphQL.Query(_returns => AggregatePropertyCategory, {
    nullable: false
  })
  async aggregatePropertyCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePropertyCategoryArgs): Promise<AggregatePropertyCategory> {
    return getPrismaFromContext(ctx).propertyCategory.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

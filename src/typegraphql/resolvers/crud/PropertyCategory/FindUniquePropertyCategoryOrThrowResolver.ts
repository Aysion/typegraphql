import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePropertyCategoryOrThrowArgs } from "./args/FindUniquePropertyCategoryOrThrowArgs";
import { PropertyCategory } from "../../../models/PropertyCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PropertyCategory)
export class FindUniquePropertyCategoryOrThrowResolver {
  @TypeGraphQL.Query(_returns => PropertyCategory, {
    nullable: true
  })
  async getPropertyCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePropertyCategoryOrThrowArgs): Promise<PropertyCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).propertyCategory.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

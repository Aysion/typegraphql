import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPropertyCategoryOrThrowArgs } from "./args/FindFirstPropertyCategoryOrThrowArgs";
import { PropertyCategory } from "../../../models/PropertyCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PropertyCategory)
export class FindFirstPropertyCategoryOrThrowResolver {
  @TypeGraphQL.Query(_returns => PropertyCategory, {
    nullable: true
  })
  async findFirstPropertyCategoryOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPropertyCategoryOrThrowArgs): Promise<PropertyCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).propertyCategory.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

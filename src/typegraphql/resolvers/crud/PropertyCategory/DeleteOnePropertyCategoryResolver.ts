import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePropertyCategoryArgs } from "./args/DeleteOnePropertyCategoryArgs";
import { PropertyCategory } from "../../../models/PropertyCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PropertyCategory)
export class DeleteOnePropertyCategoryResolver {
  @TypeGraphQL.Mutation(_returns => PropertyCategory, {
    nullable: true
  })
  async deleteOnePropertyCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePropertyCategoryArgs): Promise<PropertyCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).propertyCategory.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

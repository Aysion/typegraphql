import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePropertyCategoryArgs } from "./args/UpsertOnePropertyCategoryArgs";
import { PropertyCategory } from "../../../models/PropertyCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PropertyCategory)
export class UpsertOnePropertyCategoryResolver {
  @TypeGraphQL.Mutation(_returns => PropertyCategory, {
    nullable: false
  })
  async upsertOnePropertyCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePropertyCategoryArgs): Promise<PropertyCategory> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).propertyCategory.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

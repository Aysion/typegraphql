import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Tenant: crudResolvers.TenantCrudResolver,
  UserProfile: crudResolvers.UserProfileCrudResolver,
  User: crudResolvers.UserCrudResolver,
  PropertyCategory: crudResolvers.PropertyCategoryCrudResolver
};
const actionResolversMap = {
  Tenant: {
    aggregateTenant: actionResolvers.AggregateTenantResolver,
    createOneTenant: actionResolvers.CreateOneTenantResolver,
    deleteManyTenant: actionResolvers.DeleteManyTenantResolver,
    deleteOneTenant: actionResolvers.DeleteOneTenantResolver,
    findFirstTenant: actionResolvers.FindFirstTenantResolver,
    findFirstTenantOrThrow: actionResolvers.FindFirstTenantOrThrowResolver,
    tenants: actionResolvers.FindManyTenantResolver,
    tenant: actionResolvers.FindUniqueTenantResolver,
    getTenant: actionResolvers.FindUniqueTenantOrThrowResolver,
    groupByTenant: actionResolvers.GroupByTenantResolver,
    updateManyTenant: actionResolvers.UpdateManyTenantResolver,
    updateOneTenant: actionResolvers.UpdateOneTenantResolver,
    upsertOneTenant: actionResolvers.UpsertOneTenantResolver
  },
  UserProfile: {
    aggregateUserProfile: actionResolvers.AggregateUserProfileResolver,
    createOneUserProfile: actionResolvers.CreateOneUserProfileResolver,
    deleteManyUserProfile: actionResolvers.DeleteManyUserProfileResolver,
    deleteOneUserProfile: actionResolvers.DeleteOneUserProfileResolver,
    findFirstUserProfile: actionResolvers.FindFirstUserProfileResolver,
    findFirstUserProfileOrThrow: actionResolvers.FindFirstUserProfileOrThrowResolver,
    userProfiles: actionResolvers.FindManyUserProfileResolver,
    userProfile: actionResolvers.FindUniqueUserProfileResolver,
    getUserProfile: actionResolvers.FindUniqueUserProfileOrThrowResolver,
    groupByUserProfile: actionResolvers.GroupByUserProfileResolver,
    updateManyUserProfile: actionResolvers.UpdateManyUserProfileResolver,
    updateOneUserProfile: actionResolvers.UpdateOneUserProfileResolver,
    upsertOneUserProfile: actionResolvers.UpsertOneUserProfileResolver
  },
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  PropertyCategory: {
    aggregatePropertyCategory: actionResolvers.AggregatePropertyCategoryResolver,
    createOnePropertyCategory: actionResolvers.CreateOnePropertyCategoryResolver,
    deleteManyPropertyCategory: actionResolvers.DeleteManyPropertyCategoryResolver,
    deleteOnePropertyCategory: actionResolvers.DeleteOnePropertyCategoryResolver,
    findFirstPropertyCategory: actionResolvers.FindFirstPropertyCategoryResolver,
    findFirstPropertyCategoryOrThrow: actionResolvers.FindFirstPropertyCategoryOrThrowResolver,
    propertyCategories: actionResolvers.FindManyPropertyCategoryResolver,
    propertyCategory: actionResolvers.FindUniquePropertyCategoryResolver,
    getPropertyCategory: actionResolvers.FindUniquePropertyCategoryOrThrowResolver,
    groupByPropertyCategory: actionResolvers.GroupByPropertyCategoryResolver,
    updateManyPropertyCategory: actionResolvers.UpdateManyPropertyCategoryResolver,
    updateOnePropertyCategory: actionResolvers.UpdateOnePropertyCategoryResolver,
    upsertOnePropertyCategory: actionResolvers.UpsertOnePropertyCategoryResolver
  }
};
const crudResolversInfo = {
  Tenant: ["aggregateTenant", "createOneTenant", "deleteManyTenant", "deleteOneTenant", "findFirstTenant", "findFirstTenantOrThrow", "tenants", "tenant", "getTenant", "groupByTenant", "updateManyTenant", "updateOneTenant", "upsertOneTenant"],
  UserProfile: ["aggregateUserProfile", "createOneUserProfile", "deleteManyUserProfile", "deleteOneUserProfile", "findFirstUserProfile", "findFirstUserProfileOrThrow", "userProfiles", "userProfile", "getUserProfile", "groupByUserProfile", "updateManyUserProfile", "updateOneUserProfile", "upsertOneUserProfile"],
  User: ["aggregateUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  PropertyCategory: ["aggregatePropertyCategory", "createOnePropertyCategory", "deleteManyPropertyCategory", "deleteOnePropertyCategory", "findFirstPropertyCategory", "findFirstPropertyCategoryOrThrow", "propertyCategories", "propertyCategory", "getPropertyCategory", "groupByPropertyCategory", "updateManyPropertyCategory", "updateOnePropertyCategory", "upsertOnePropertyCategory"]
};
const argsInfo = {
  AggregateTenantArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateOneTenantArgs: ["data"],
  DeleteManyTenantArgs: ["where"],
  DeleteOneTenantArgs: ["where"],
  FindFirstTenantArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTenantOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTenantArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTenantArgs: ["where"],
  FindUniqueTenantOrThrowArgs: ["where"],
  GroupByTenantArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTenantArgs: ["data", "where"],
  UpdateOneTenantArgs: ["data", "where"],
  UpsertOneTenantArgs: ["where", "create", "update"],
  AggregateUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateOneUserProfileArgs: ["data"],
  DeleteManyUserProfileArgs: ["where"],
  DeleteOneUserProfileArgs: ["where"],
  FindFirstUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserProfileOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserProfileArgs: ["where"],
  FindUniqueUserProfileOrThrowArgs: ["where"],
  GroupByUserProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserProfileArgs: ["data", "where"],
  UpdateOneUserProfileArgs: ["data", "where"],
  UpsertOneUserProfileArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregatePropertyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateOnePropertyCategoryArgs: ["data"],
  DeleteManyPropertyCategoryArgs: ["where"],
  DeleteOnePropertyCategoryArgs: ["where"],
  FindFirstPropertyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPropertyCategoryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPropertyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePropertyCategoryArgs: ["where"],
  FindUniquePropertyCategoryOrThrowArgs: ["where"],
  GroupByPropertyCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPropertyCategoryArgs: ["data", "where"],
  UpdateOnePropertyCategoryArgs: ["data", "where"],
  UpsertOnePropertyCategoryArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Tenant: relationResolvers.TenantRelationsResolver,
  UserProfile: relationResolvers.UserProfileRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  PropertyCategory: relationResolvers.PropertyCategoryRelationsResolver
};
const relationResolversInfo = {
  Tenant: ["UserProfile", "User", "PropertyCategory"],
  UserProfile: ["tenant", "User"],
  User: ["tenant", "userProfile"],
  PropertyCategory: ["tenant"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Tenant: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain"],
  UserProfile: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name", "level"],
  User: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "userProfileId", "email", "name", "password"],
  PropertyCategory: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateTenant: ["_count", "_min", "_max"],
  TenantGroupBy: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain", "_count", "_min", "_max"],
  AggregateUserProfile: ["_count", "_avg", "_sum", "_min", "_max"],
  UserProfileGroupBy: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name", "level", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "userProfileId", "email", "name", "password", "_count", "_min", "_max"],
  AggregatePropertyCategory: ["_count", "_min", "_max"],
  PropertyCategoryGroupBy: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  TenantCount: ["UserProfile", "User", "PropertyCategory"],
  TenantCountAggregate: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain", "_all"],
  TenantMinAggregate: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain"],
  TenantMaxAggregate: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain"],
  UserProfileCount: ["User"],
  UserProfileCountAggregate: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name", "level", "_all"],
  UserProfileAvgAggregate: ["level"],
  UserProfileSumAggregate: ["level"],
  UserProfileMinAggregate: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name", "level"],
  UserProfileMaxAggregate: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name", "level"],
  UserCountAggregate: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "userProfileId", "email", "name", "password", "_all"],
  UserMinAggregate: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "userProfileId", "email", "name", "password"],
  UserMaxAggregate: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "userProfileId", "email", "name", "password"],
  PropertyCategoryCountAggregate: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name", "_all"],
  PropertyCategoryMinAggregate: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name"],
  PropertyCategoryMaxAggregate: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  TenantWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain", "UserProfile", "User", "PropertyCategory"],
  TenantOrderByWithRelationInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain", "UserProfile", "User", "PropertyCategory"],
  TenantWhereUniqueInput: ["id"],
  TenantOrderByWithAggregationInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain", "_count", "_max", "_min"],
  TenantScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain"],
  UserProfileWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "tenantId", "name", "level", "User"],
  UserProfileOrderByWithRelationInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "tenantId", "name", "level", "User"],
  UserProfileWhereUniqueInput: ["id"],
  UserProfileOrderByWithAggregationInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name", "level", "_count", "_avg", "_max", "_min", "_sum"],
  UserProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name", "level"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "tenantId", "userProfile", "userProfileId", "email", "name", "password"],
  UserOrderByWithRelationInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "tenantId", "userProfile", "userProfileId", "email", "name", "password"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "userProfileId", "email", "name", "password", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "userProfileId", "email", "name", "password"],
  PropertyCategoryWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "tenantId", "name"],
  PropertyCategoryOrderByWithRelationInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "tenantId", "name"],
  PropertyCategoryWhereUniqueInput: ["id"],
  PropertyCategoryOrderByWithAggregationInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name", "_count", "_max", "_min"],
  PropertyCategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name"],
  TenantCreateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain", "UserProfile", "User", "PropertyCategory"],
  TenantUpdateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain", "UserProfile", "User", "PropertyCategory"],
  TenantUpdateManyMutationInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain"],
  UserProfileCreateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "name", "level", "User"],
  UserProfileUpdateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "name", "level", "User"],
  UserProfileUpdateManyMutationInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "level"],
  UserCreateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "userProfile", "email", "name", "password"],
  UserUpdateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "userProfile", "email", "name", "password"],
  UserUpdateManyMutationInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "email", "name", "password"],
  PropertyCategoryCreateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "name"],
  PropertyCategoryUpdateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "name"],
  PropertyCategoryUpdateManyMutationInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserProfileListRelationFilter: ["every", "some", "none"],
  UserListRelationFilter: ["every", "some", "none"],
  PropertyCategoryListRelationFilter: ["every", "some", "none"],
  UserProfileOrderByRelationAggregateInput: ["_count"],
  UserOrderByRelationAggregateInput: ["_count"],
  PropertyCategoryOrderByRelationAggregateInput: ["_count"],
  TenantCountOrderByAggregateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain"],
  TenantMaxOrderByAggregateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain"],
  TenantMinOrderByAggregateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  TenantRelationFilter: ["is", "isNot"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserProfileCountOrderByAggregateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name", "level"],
  UserProfileAvgOrderByAggregateInput: ["level"],
  UserProfileMaxOrderByAggregateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name", "level"],
  UserProfileMinOrderByAggregateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name", "level"],
  UserProfileSumOrderByAggregateInput: ["level"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserProfileRelationFilter: ["is", "isNot"],
  UserCountOrderByAggregateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "userProfileId", "email", "name", "password"],
  UserMaxOrderByAggregateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "userProfileId", "email", "name", "password"],
  UserMinOrderByAggregateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "userProfileId", "email", "name", "password"],
  PropertyCategoryCountOrderByAggregateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name"],
  PropertyCategoryMaxOrderByAggregateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name"],
  PropertyCategoryMinOrderByAggregateInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name"],
  UserProfileCreateNestedManyWithoutTenantInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutTenantInput: ["create", "connectOrCreate", "connect"],
  PropertyCategoryCreateNestedManyWithoutTenantInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  UserProfileUpdateManyWithoutTenantNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutTenantNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PropertyCategoryUpdateManyWithoutTenantNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TenantCreateNestedOneWithoutUserProfileInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutUserProfileInput: ["create", "connectOrCreate", "connect"],
  TenantUpdateOneRequiredWithoutUserProfileNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateManyWithoutUserProfileNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TenantCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  UserProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  TenantUpdateOneRequiredWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserProfileUpdateOneRequiredWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TenantCreateNestedOneWithoutPropertyCategoryInput: ["create", "connectOrCreate", "connect"],
  TenantUpdateOneRequiredWithoutPropertyCategoryNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserProfileCreateWithoutTenantInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "level", "User"],
  UserProfileCreateOrConnectWithoutTenantInput: ["where", "create"],
  UserCreateWithoutTenantInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "userProfile", "email", "name", "password"],
  UserCreateOrConnectWithoutTenantInput: ["where", "create"],
  PropertyCategoryCreateWithoutTenantInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name"],
  PropertyCategoryCreateOrConnectWithoutTenantInput: ["where", "create"],
  UserProfileUpsertWithWhereUniqueWithoutTenantInput: ["where", "update", "create"],
  UserProfileUpdateWithWhereUniqueWithoutTenantInput: ["where", "data"],
  UserProfileUpdateManyWithWhereWithoutTenantInput: ["where", "data"],
  UserProfileScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name", "level"],
  UserUpsertWithWhereUniqueWithoutTenantInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutTenantInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutTenantInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "userProfileId", "email", "name", "password"],
  PropertyCategoryUpsertWithWhereUniqueWithoutTenantInput: ["where", "update", "create"],
  PropertyCategoryUpdateWithWhereUniqueWithoutTenantInput: ["where", "data"],
  PropertyCategoryUpdateManyWithWhereWithoutTenantInput: ["where", "data"],
  PropertyCategoryScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenantId", "name"],
  TenantCreateWithoutUserProfileInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain", "User", "PropertyCategory"],
  TenantCreateOrConnectWithoutUserProfileInput: ["where", "create"],
  UserCreateWithoutUserProfileInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "email", "name", "password"],
  UserCreateOrConnectWithoutUserProfileInput: ["where", "create"],
  TenantUpsertWithoutUserProfileInput: ["update", "create"],
  TenantUpdateWithoutUserProfileInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain", "User", "PropertyCategory"],
  UserUpsertWithWhereUniqueWithoutUserProfileInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutUserProfileInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutUserProfileInput: ["where", "data"],
  TenantCreateWithoutUserInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain", "UserProfile", "PropertyCategory"],
  TenantCreateOrConnectWithoutUserInput: ["where", "create"],
  UserProfileCreateWithoutUserInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "name", "level"],
  UserProfileCreateOrConnectWithoutUserInput: ["where", "create"],
  TenantUpsertWithoutUserInput: ["update", "create"],
  TenantUpdateWithoutUserInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain", "UserProfile", "PropertyCategory"],
  UserProfileUpsertWithoutUserInput: ["update", "create"],
  UserProfileUpdateWithoutUserInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "name", "level"],
  TenantCreateWithoutPropertyCategoryInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain", "UserProfile", "User"],
  TenantCreateOrConnectWithoutPropertyCategoryInput: ["where", "create"],
  TenantUpsertWithoutPropertyCategoryInput: ["update", "create"],
  TenantUpdateWithoutPropertyCategoryInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "subdomain", "domain", "UserProfile", "User"],
  UserProfileUpdateWithoutTenantInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name", "level", "User"],
  UserUpdateWithoutTenantInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "userProfile", "email", "name", "password"],
  PropertyCategoryUpdateWithoutTenantInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "name"],
  UserUpdateWithoutUserProfileInput: ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "deletedAt", "deletedBy", "tenant", "email", "name", "password"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}


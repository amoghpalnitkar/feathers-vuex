/*
eslint
@typescript-eslint/no-explicit-any: 0
*/
export interface FeathersVuexOptions {
  serverAlias: string
  addOnUpsert?: boolean
  autoRemove?: boolean
  debug?: boolean
  diffOnPatch?: boolean
  enableEvents?: boolean
  idField?: string
  keepCopiesInStore?: boolean
  nameStyle?: string
  paramsForServer?: string[]
  preferUpdate?: boolean
  replaceItems?: boolean
  skipRequestIfExists?: boolean
  whitelist?: string[]
}

export interface MakeServicePluginOptions {
  Model: any
  service: any
  addOnUpsert?: boolean
  diffOnPatch?: boolean
  enableEvents?: boolean
  idField?: string
  namespace?: string
  servicePath?: string
  state?: {}
  getters?: {}
  mutations?: {}
  actions?: {}
}
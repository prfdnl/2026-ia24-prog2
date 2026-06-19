import DatabaseManager, { type ItemProps } from "./DatabaseManager"

export type CachedItem = {
  [id: number]: Item
}

export class Item {
  private _id!: number
  private _props!: ItemProps

  private constructor() { }

  static create(title: string) {
    const item = new Item()
    item._id = DatabaseManager.Item.insert({ title })
    item._props = { title }
    return item
  }

  static load(id: number) {
    const item = new Item()
    const data = DatabaseManager.Item.one(id)
    if (!data)
      throw `Não foi possível encontrar o item.id=${id}`
    item._id = data.id
    item._props = { title: data.title }
    return item
  }

  remove() {
    throw "MÉTODO AINDA NÃO IMPLEMENTADO :: VAMOS CONECTAR ISSO COM O BANCO"
    const proto = Object.getPrototypeOf(this)
    const keys = Object.keys(Object.getOwnPropertyDescriptors(proto)) as (keyof X)[]
    const erro = new Error('O item foi removido, seus métodos e atributos não podem ser mais acessados.')
    keys.forEach(k => this[k] = () => {})
  }

  get title() {
    return this._props.title
  }
}

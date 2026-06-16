import DatabaseManager, { type ItemProps } from "./DatabaseManager"

export type CachedItem = {
  [id: number]: Item
}

export class Item {
  private _id: number
  private _props: ItemProps

  constructor(title: string) {
    this._id = DatabaseManager.Item.insert({ title })
    this._props = { title }
  }

  remove() {
    const res = DatabaseManager.Item.delete(this._id)
    console.log(Object.getOwnPropertyDescriptors(this))
    console.log(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(this)))
  }

  get title() {
    return this._props.title
  }
}
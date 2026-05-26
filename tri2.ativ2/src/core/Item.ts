import DatabaseManager from "./DatabaseManager"

export type ItemProps = {
  title: string
}

export type ItemPropsWithId = ItemProps & {
  id: number
}

export type CachedItem = {
  [id: number]: Item
}

class Item {
  private static cachedItems: CachedItem = {}
  private id!: number
  private properties!: ItemProps

  constructor(id: number)
  constructor(properties: ItemProps)
  constructor(arg: number | ItemProps) {
    if (typeof arg === 'number')
      return this.load(arg)
    if (typeof arg === 'object')
      return this.create(arg)
    throw new Error('Invalid argument for Item constructor. Expected number or ItemProps.')
  }

  private load(id: number) {
    if (Item.cachedItems[id]) 
      return Item.cachedItems[id]
    const itemData = DatabaseManager.Item.one(id)
    if (!itemData)
      throw new Error(`Item with id ${id} not found.`)
    const { id: itemId, ...properties } = itemData
    this.id = itemId
    this.properties = properties
    Item.cachedItems[id] = this
    return this
  }

  private create(properties: ItemProps) {
    const id = DatabaseManager.Item.insert(properties)
    this.id = id
    this.properties = properties
    Item.cachedItems[id] = this
    return this
  }

  get title() {
    return this.properties.title
  }
}


const i = new Item({ title: 'Example Item' })
const a = new Item(1)
const b = new Item(2)


console.log(a === b) // true
console.log(a.title) // 'Example Item'
console.log(b.title) // 'Example Item'
import type { ItemProps } from './Item'
import { Database, type Changes } from 'bun:sqlite'

const db = new Database('app.db', { strict: true })

db.run(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL
  )
`)

class Item {
  protected static query = {
    selectAll: db.query('SELECT * FROM items'),
    selectOne: db.query('SELECT * FROM items WHERE id = $id'), 
    insert: db.query('INSERT INTO items (title) VALUES ($title)')
  }

  public static all(): ItemProps[] {
    return this.query.selectAll.all() as ItemProps[]
  }

  public static get(id: number): ItemProps | null {
    return this.query.selectOne.get({ id }) as ItemProps | null
  }

  public static insert(props: ItemProps){
    const changes = this.query.insert.run({ title: props.title }) as Changes
    return this.get(changes.lastInsertRowid as number)
  }
}

const a1 = Item.insert({ title: 'First Item' })
const a2 = Item.insert({ title: 'Second Item' })


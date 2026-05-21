import { Database } from "bun:sqlite";

// class Item_ {
//   public title: string
//   constructor(title: string) {
//     this.title = title
//   }
// }

const db = new Database("database.sqlite")
const querySelectItems = db.prepare("SELECT * FROM items")

class Item {
  constructor(public title: string) { }
}


class TodoList {
  private items: Item[] = []

  addItem(item: Item) {
    this.items.push(item)
  }

  removeItem(index: number) {
    this.items.splice(index, 2)
  }

  getItems() {
    const items = querySelectItems.all()
    return items
  }
}

//
// exemplo [ [ [ NÃO COPIEM ] ] ] 
//

const lista = new TodoList()
lista.addItem(new Item("ficar quieto"))
lista.addItem(new Item("prestar atenção"))
lista.addItem(new Item("aprender typescript"))
console.log(lista.getItems())

// Atividades
// 1. permitir trocar ordem dos itens
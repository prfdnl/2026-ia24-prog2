import { describe, it, expect } from "bun:test"
import { Item } from "../src/core/Item"

describe('Item', () => {
    it('cria e exclui uma instancia de Item e seus dados do bd', () => {
        const rnd = crypto.randomUUID()
        const item = new Item(rnd)
        item.remove()
        console.log(item.title)
    })
})
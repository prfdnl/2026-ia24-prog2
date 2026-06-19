import { Item } from "./core/Item"

function routeTest(req: Bun.BunRequest) {
    return Response.json({
        method: req.method,
        time: (new Date).toLocaleString('pt-BR'),
        body: req.body
    })
}

const { hostname, port } = Bun.serve({
    routes: {
        "/": () => new Response(Bun.file("public/index.html")),
        "/debug": new Response(Bun.file("public/debug.html")),
        "/test": routeTest,
        "/item": {
            GET: () => {
                return Response.json(Item.loadAll().map(({ id, title }) => ({ id, title })))
            },

            POST: async (req) => {
                let data

                try {
                    data = await req.body?.json()
                } catch (e) {
                    return Response.json("JSON BODY MALFORMD", { status: 400 })
                }

                if (!data?.title) {
                    return Response.json("JSON BODY TITLE REQUIRED", { status: 400 })
                }

                let item

                try {
                    item = Item.create(data.title)
                } catch (e) {
                    return Response.json('ITERNAL SERVER ERROR', { status: 500 })
                }

                return Response.json({
                    id: item.id,
                    title: item.title
                })
            }
        },
        "/item/:id": {
            GET: (req) => {
                let id: number = parseInt(req.params.id)

                if (isNaN(id)) {
                    return Response.json('É NECESSÁRIO INFORMAR UM ID (número inteiro)')
                }

                let item: Item

                try {
                    item = Item.load(id)
                } catch (e) {
                    return Response.json({}, { status: 500 })
                }

                return Response.json({
                    id: item.id,
                    title: item.title
                })
            },

            DELETE: (req) => {
                try {
                    let id: number = parseInt(req.params.id)
                    if (isNaN(id))
                        return Response.json('É NECESSÁRIO INFORMAR UM ID (número inteiro)')
                    const item = Item.load(id)
                    item.remove()
                } catch (e) {
                    console.log(e)
                    return Response.json(e, { status: 500 })
                }
                return Response.json({}, { status: 200 })
            }
        }
    },
    fetch: () => new Response('Not Found', { status: 404 })
})

console.log(`⚡ Server running on http://${hostname}:${port}`) 
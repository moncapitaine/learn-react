import { rest } from 'msw'

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
      count: 12,
      results: [{ "name": "dirk", "url": "https://pokeapi.co/api/v2/pokemon/1/" }, { "name": "dirk", "url": "https://pokeapi.co/api/v2/pokemon/2/" }, { "name": "picachudirk", "url": "https://pokeapi.co/api/v2/pokemon/3/" }, { "name": "charmander", "url": "https://pokeapi.co/api/v2/pokemon/4/" },]
      }))
  }),
  rest.get('https://pokeapi.co/api/v2/pokemon/:id', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        sprites: {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png"
        }
      })
    )
  })
]
import { useEffect, useState } from "react"

export interface Pokemon {
  name: string
  url: string
}

export const PokemonPage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

  const loadPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    const pokemonsFetched = await response.json() as { results: Pokemon[] }
    setPokemonList(pokemonsFetched.results)
  }

  useEffect(() => {
    loadPokemon().then(() => console.log('pokemon load finished'))
  }, [])

  return (
    <ol>
      {pokemonList.map((pokemon, index) => (<li key={index}>
        <h3>{pokemon.name}</h3>
        <a href={pokemon.url} target="_blank">Details</a>
      </li>))}
    </ol>
  )
}
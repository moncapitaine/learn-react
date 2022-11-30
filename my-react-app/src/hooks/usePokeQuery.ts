import { useEffect, useState } from "react"
import { wait } from "../tools/wait"

export interface Pokemon {
  name: string
  url: string
}

export interface PokemonQueryResult {
  pokemonList: Pokemon[]
  error: string | undefined
  loading: boolean
}



const fetchPokemon = async (): Promise<Pokemon[]> => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
  const data = await response.json()
  return data.results
}

export const usePokeQuery = (): PokemonQueryResult => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [error, setError] = useState<string | undefined>()
  const [loading, setLoading] = useState(false)
  const loadPokemons = async () => {
    try {
      setLoading(true)
      await wait(4000) // will be awaited
      // wait(5000) // will not be awaited for
      const fetchedItems = await fetchPokemon()
      setPokemonList(fetchedItems)
      setError(undefined)
      setLoading(false)
    }
    catch(error) {
      setError('Error fetching pokemons from async')
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPokemons()
  }, [])
  return ({
    pokemonList,
    loading,
    error
  })
}
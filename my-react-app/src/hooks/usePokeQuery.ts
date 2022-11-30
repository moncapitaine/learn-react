import { useEffect, useState } from "react"
import { wait } from "../tools/wait"

export interface Pokemon {
  name: string
  url: string
}


const fetchPokemon = async (): Promise<Pokemon[]> => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
  const data = await response.json()
  return data.results
}

export interface PokemonQueryResult {
  pokemonList: Pokemon[]
  error: string | undefined
  loading: boolean
}


export const usePokeQuery = (timeoutMilliseconds: number = 500): PokemonQueryResult => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [error, setError] = useState<string | undefined>()
  const [loading, setLoading] = useState(false)
  const loadPokemons = async () => {
    try {
      setLoading(true)
      await wait(timeoutMilliseconds)
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

  return {
    pokemonList,
    loading,
    error
  }
}
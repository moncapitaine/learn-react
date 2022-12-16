import { useEffect, useState } from "react"
import { Pokemon } from "../domain/pokemon"

interface PokemonApiResult  { count: number, results: Pokemon[]}

const fetchPokemonListAsync = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  return await response.json() as PokemonApiResult
}

export interface UsePokemonResult {
  isLoading: boolean
  totalCount: number
  list: Pokemon[]
}

export const usePokemon = (): UsePokemonResult => {
  const [list, setList] = useState<Pokemon[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetchPokemonListAsync().then((data) => {
      setList(data.results)
      setTotalCount(data.count)
      setIsLoading(false)
    })
  }, [])

  return { list, totalCount, isLoading }
}
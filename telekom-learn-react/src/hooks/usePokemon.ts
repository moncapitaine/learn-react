import { useEffect, useState } from "react"
import { Pokemon } from "../domain/pokemon"

const fetchPokemonListAsync = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  const data = (await response.json()) as { count: number, results: Pokemon[]}
  return data
}

export const usePokemon = () => {
  const [list, setList] = useState<Pokemon[] | undefined>(undefined)
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log('before fetching...')
    setIsLoading(true)
    fetchPokemonListAsync().then((data) => {
      console.log('finished fetching', data)
      setList(data.results)
      setCount(data.count)
      setTimeout(() => setIsLoading(false), 2000)
    })
    console.log('after fetching...')
  }, [])

  return { list, count, isLoading }
}
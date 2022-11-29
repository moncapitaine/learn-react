import { useEffect, useState } from "react"

export interface Pokemon {
  name: string
  url: string
}

const fetchPokemon = async (): Promise<Pokemon[]> => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
  const data = await response.json()
  return data.results
}

const wait = async (timeInMilliseconds: number): Promise<void> => {
  const result = new Promise<void>((resolve, _reject) => {
    setTimeout(() => resolve(undefined), timeInMilliseconds)
  })
  return result
}

export const PokemonPage = () => {
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
    // fetchPokemon().then((list) => setPokemonList(list))
    //   .catch((reason) => setError('Error fetching pokemons from effect')
    //   )
    loadPokemons()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <ul>
      { error && <li>{error}</li>}
      {pokemonList.map((pokemon, index) => (<li key={index}>
        <h3>{pokemon.name}</h3>
        <a href={pokemon.url} target="_blank">Details</a>
      </li>))}
    </ul>
  )
}
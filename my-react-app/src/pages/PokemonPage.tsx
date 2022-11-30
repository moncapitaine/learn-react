import { useEffect, useState } from "react"
import { usePokeQuery } from "../hooks/usePokeQuery"

export const PokemonPage = () => {

  const { loading, error, pokemonList } = usePokeQuery()

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
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { useEffect, useState } from "react"
import { PokemonListItem } from "../components/PokemonListItem"
import { Pokemon } from "../domain/pokemon"
import { usePokemon } from "../hooks/usePokemon"



export const PokePage = () => {
  const { isLoading, count, list } = usePokemon()

  if (isLoading) {
    return (<div>Loading...</div>)
  }

  return (<section>
    <h2>Pokepage for {count} pokemons</h2>
    <List>
      {list?.map((pokemon, index) => (
        <PokemonListItem key={index} pokemon={pokemon} />
      ))}
    </List>

  </section>)
}
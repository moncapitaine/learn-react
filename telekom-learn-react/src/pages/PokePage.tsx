import { List } from "@mui/material"
import { PokemonListItem } from "../components/PokemonListItem"
import { usePokemon } from "../hooks/usePokemon"

export const PokePage = () => {
  const { isLoading, totalCount, list } = usePokemon()

  if (isLoading) {
    return (<div>Loading...</div>)
  }

  return (<section>
    <h2>Pokepage for {totalCount} pokemons</h2>
    <List>
      {list?.map((pokemon, index) => (
        <PokemonListItem key={index} pokemon={pokemon} />
      ))}
    </List>

  </section>)
}
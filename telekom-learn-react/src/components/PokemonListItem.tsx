import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material"
import { Pokemon } from "../domain/pokemon"
import { usePokemonDetails } from "../hooks/usePokemonDetails"

export interface PokemonListItemProps {
  pokemon: Pokemon
}

export const PokemonListItem: React.FC<PokemonListItemProps> = ({pokemon}) => {
  const { imageSrc } = usePokemonDetails(pokemon.url)
console.log('re-render list item', pokemon, imageSrc)
  return (<ListItem>
    <ListItemAvatar>
      <Avatar src={imageSrc} />
    </ListItemAvatar>
    <ListItemText primary={pokemon.name} secondary={pokemon.url} />
  </ListItem>)
}
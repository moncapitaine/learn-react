import { Autocomplete, AutocompleteRenderInputParams, Avatar, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField } from "@mui/material"
import { Container } from "@mui/system"
import { ReactNode, useState } from "react"
import { useFreeMealSearch } from "../hooks/useFreeMealSearch"

export const FreeMealPage = () => {
  const [searchString, setSearchString] = useState('')
  const { meals, search, isLoading } = useFreeMealSearch(searchString)
  return (<Container>
    <Stack>
      <TextField onChange={(event) => setSearchString(event.target.value)} placeholder="Suche Rezept" />
      { isLoading && (<div>loading...</div>)}
      { !isLoading && (<>
        <List>
          <ListItem><ListItemText primary={`Suche nach '${search}'`} /></ListItem>
          {meals.map((meal) => (
            <ListItem>
              <ListItemAvatar>
                <Avatar src={meal.thumbnailUrl ?? '/logo.svg'} />
              </ListItemAvatar>
              <ListItemText primary={meal.name} secondary={meal.instructions.substring(0, 140) + '...'} />
            </ListItem>
          ))}
          
        </List>
      </>)}
    </Stack>
  </Container>)
}
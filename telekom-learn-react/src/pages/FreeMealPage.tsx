import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField } from "@mui/material"
import { useState } from "react"
import { useFreeMealSearch } from "../hooks/useFreeMealSearch"

export const FreeMealPage = () => {
  const [searchString, setSearchString] = useState('')
  const { meals, search, isLoading } = useFreeMealSearch(searchString)

  return (
    <Stack>
      <TextField onChange={(event) => setSearchString(event.target.value)} placeholder="Suche Rezept" />
      { isLoading && (<div>loading...</div>)}
      { !isLoading && (<>
        <List>
          {searchString && (<ListItem><ListItemText primary={`Suche nach '${search}'`} /></ListItem>)}
          {meals.map((meal) => (
            <ListItem key={meal.id}>
              <ListItemAvatar>
                <Avatar src={meal.thumbnailUrl ?? '/logo.svg'} />
              </ListItemAvatar>
              <ListItemText primary={meal.name} secondary={meal.instructions?.substring(0, 80) + '...'} />
            </ListItem>
          ))}
        </List>
      </>)}
    </Stack>)
}
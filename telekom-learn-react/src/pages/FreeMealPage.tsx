import { Autocomplete, AutocompleteRenderInputParams, List, ListItem, Stack, TextField } from "@mui/material"
import { Container } from "@mui/system"
import { ReactNode } from "react"

export const FreeMealPage = () => {
  // const { searchResult } = useFreeMeal(searchString)
  return (<Container>
    <Stack>
      <TextField placeholder="Suche Rezept" />
      <List>
        <ListItem></ListItem>
      </List>
    </Stack>
  </Container>)
}
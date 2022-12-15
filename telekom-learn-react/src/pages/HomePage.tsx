import { useState } from "react"
import { RecipeList } from "../components/RecipeList"
import { testRecipes } from "../domain/testRecipes"
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
export const HomePage = () => {
  const [showList, setShowList] = useState(true)
  const recipes = testRecipes
  return (<section>
    <Typography variant="h2">Homepage</Typography>
      <Button variant="contained" onClick={() => setShowList(!showList)}>Toggle</Button>
      { showList && <RecipeList list={recipes} /> }
    </section>)
}
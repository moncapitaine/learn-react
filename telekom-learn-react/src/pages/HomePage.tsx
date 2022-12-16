import { useState } from "react"
import { RecipeList } from "../components/RecipeList"
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useRecipes } from "../hooks/useRecipes"
import { CircularProgress } from "@mui/material"
export const HomePage = () => {
  const [showList, setShowList] = useState(true)
  const {recipes, isLoading} = useRecipes()
  return (<section>
    <Typography variant="h2">Homepage</Typography>
      <Button variant="contained" onClick={() => setShowList(!showList)}>Toggle</Button>
      { isLoading && <CircularProgress />}
      { showList && !isLoading && <RecipeList list={recipes} /> }
    </section>)
}
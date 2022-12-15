import { Box, Card, CardContent, Grid, Typography } from "@mui/material"
import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { testRecipes } from "../domain/testRecipes"

export const RecipeDetailsPage = () => {
  const { recipeId } = useParams()

  const recipe = useMemo(() => testRecipes.find((recipe) => recipe.id === recipeId), [recipeId])

  if (!recipe) {
    return (<Typography>Rezept {recipeId} nicht gefunden</Typography>)
  }

  return (<section>
    <Grid container spacing={2}>
      <Grid item>
        <Card variant="elevation">
          <CardContent>
            <Typography variant='h4'>{recipe?.name}</Typography>
            <Typography variant="h5">Name</Typography>
            <Typography variant="body2">{recipe.name}</Typography>
            <Typography variant="h5">Description</Typography>
            <Typography variant="body2">{recipe.description}</Typography>
          </CardContent>
        </Card>
      </Grid>
    <Grid item>
      <Card>
        <CardContent>
          <Typography variant="h4">Schritte</Typography>
          {recipe.steps.map((step, index) => (
            <Box key={index}>
              <Typography>{step.sequenceNumber}. {step.name}</Typography>
              <Typography>{step.durationMinutes}</Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Grid>
    <Grid item>
      <Card>
        <CardContent>
          <Typography variant="h4">Zutaten</Typography>
          {recipe.ingredients.map((ingredient, index) => (
            <Box key={index}>
              <Typography variant='h5'>{ingredient.name}</Typography>
              <Typography>{ingredient.id}</Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Grid>
    </Grid>

  </section>)
}
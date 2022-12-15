import { Box, Card, CardContent, Grid, List, ListItem, Stack, Typography } from "@mui/material"
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
    <Stack spacing={2}>
      <Card variant="elevation">
        <CardContent>
          <Typography variant='h4'>{recipe?.name}</Typography>
          <Typography variant="h5">Name</Typography>
          <Typography variant="body2">{recipe.name}</Typography>
          <Typography variant="h5">Description</Typography>
          <Typography variant="body2">{recipe.description}</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h4">Schritte</Typography>
          <List>
          {recipe.steps.map((step, index) => (
            <ListItem key={index}>
              <Typography>{step.sequenceNumber}. {step.name}</Typography>
              <Typography>{step.durationMinutes}</Typography>
            </ListItem>
          ))}
          </List>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h4">Zutaten</Typography>
          <List>
            {recipe.ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <Typography variant='h5'>{ingredient.name}</Typography>
                <Typography>{ingredient.id}</Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Stack>

  </section>)
}
import { Block } from "@mui/icons-material"
import { Box, Button, List, ListItem, Stack, TextField } from "@mui/material"
import { useFieldArray, useForm } from "react-hook-form"
import { Navigate, useNavigate, useParams } from "react-router"
import { Recipe } from "../domain/recipe"
import { useRecipe } from "../hooks/useRecipe"

export const RecipeEditPage = () => {
  const { recipeId } = useParams()
  const navigate = useNavigate()
  const { isLoading, recipe, save } = useRecipe(recipeId)

  const { control, register, handleSubmit } = useForm({ defaultValues: recipe })
  const { fields: ingredientFields, append: appendIngredient, remove: removeIngredient } = useFieldArray({control, name: 'ingredients'})
  const onSubmit = (data: Recipe) => {
    console.log('submitted', data)
    save(data)
    navigate(`/recipes/${recipeId}`)
  }

  return (<form onSubmit={handleSubmit(onSubmit)}>
    <Stack spacing={3}>
      <TextField label="Name" {...register("name", { required: true })} />
      <TextField label="Beschreibung" {...register("description", { required: true })} />
      <Box>
        <Button onClick={() => appendIngredient({id: '', name: 'Neue Zutat'})}>Neue Zutat</Button>
        <List>
          {ingredientFields.map((field, index) => (<ListItem>
            <TextField label="Id" {...register(`ingredients.${index}.id`, { required: true })} />
            <TextField label="Name" {...register(`ingredients.${index}.name`, { required: true })} />
            <Button onClick={() => removeIngredient(index) }>Entfernen</Button>
          </ListItem>))}
        </List>
      </Box>
      <Button type='submit'>Submit</Button>
    </Stack>
  </form>)
}
import { Block } from "@mui/icons-material"
import { Box, Button, CircularProgress, List, ListItem, Stack, TextField } from "@mui/material"
import { useFieldArray, useForm } from "react-hook-form"
import { Navigate, useNavigate, useParams } from "react-router"
import { Recipe } from "../domain/recipe"
import { useRecipe } from "../hooks/useRecipe"

export const RecipeEditPage = () => {
  const { recipeId } = useParams()
  const navigate = useNavigate()
  const { isLoading, recipe, save } = useRecipe(recipeId)

  const { control, register, handleSubmit, formState } = useForm({ defaultValues: recipe })
  const { fields: ingredientFields, append: appendIngredient, remove: removeIngredient } = useFieldArray({control, name: 'ingredients'})
  const onSubmit = (data: Recipe) => {
    save(data)
    navigate(`/recipes/${recipeId}`)
  }

  if (isLoading) {
    return <CircularProgress />
  }

  return (<form onSubmit={handleSubmit(onSubmit)}>
    <Stack spacing={3}>
      { formState.errors.name && (<Box>
          <pre>
            {formState.errors.name && "Name ist Pflicht"}
          </pre>
      </Box>)}
      <TextField label="Name" {...register("name", { required: true })}/>
      <TextField label="Beschreibung" {...register("description", { required: true })} />
      <Box>
        <Button onClick={() => appendIngredient({id: '', name: 'Neue Zutat'})}>Neue Zutat</Button>
        <List>
          {ingredientFields.map((field, index) => (<ListItem key={index}>
            <Stack spacing={2} direction='row'>
              <TextField label="Id" {...register(`ingredients.${index}.id`, { required: true })} />
              <TextField label="Name" {...register(`ingredients.${index}.name`, { required: true })} />
              <Button onClick={() => removeIngredient(index) }>Entfernen</Button>
            </Stack>
          </ListItem>))}
        </List>
      </Box>
      <Button type='submit'>Speichern</Button>
    </Stack>
  </form>)
}
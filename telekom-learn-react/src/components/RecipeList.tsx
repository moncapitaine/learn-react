import { Typography, TextField, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { useContext, useMemo, useState } from "react"
import { CookingContext } from "../context/cookingContext"
import { Recipe } from "../domain/recipe"
export interface RecipeListProps {
  list: Recipe[]
  children?: JSX.Element
}

export const RecipeList: React.FC<RecipeListProps> = ({ list, children }) => {

  const { recipeFilterText, setRecipeFilterText } = useContext(CookingContext)

  const internalList = useMemo(() => list.filter(
    (recipe) => recipe.description.includes(recipeFilterText) 
  ), [recipeFilterText])

  console.log('re-render recipe list')
  return (<div>
    <Typography variant="h4">Recipe List has {internalList.length} items</Typography>
    <TextField 
      placeholder='Rezepte filtern' 
      type='text'
      value={recipeFilterText}
      onChange={(event) => setRecipeFilterText(event.target.value)}></TextField>
    <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Beschreibung</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {internalList.map((recipe, index) => (<TableRow key={index}>
            <TableCell>{recipe.id}</TableCell>
            <TableCell>{recipe.name}</TableCell>
            <TableCell>{recipe.description}</TableCell>
          </TableRow>)
        )}
      </TableBody>
    </Table>
    </TableContainer>
    {children}
  </div>)
}
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
    <h3>Recipe List has {internalList.length} items</h3>
    <input 
      placeholder='Rezepte filtern' 
      type='text'
      value={recipeFilterText}
      onChange={(event) => setRecipeFilterText(event.target.value)}></input>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Beschreibung</th>
        </tr>
      </thead>
      <tbody>
        {internalList.map((recipe, index) => (<tr key={index}>
            <td>{recipe.id}</td>
            <td>{recipe.name}</td>
            <td>{recipe.description}</td>
          </tr>)
        )}
      </tbody>
    </table>
    {children}
  </div>)
}
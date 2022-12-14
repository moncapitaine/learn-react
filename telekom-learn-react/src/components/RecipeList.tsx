import { ChangeEvent, ChangeEventHandler, useState } from "react"
import { Recipe } from "../domain/recipe"

export interface RecipeListProps {
  list: Recipe[]
  selectedRecipe?: Recipe
}

export const RecipeList: React.FC<RecipeListProps> = ({ list, selectedRecipe }) => {
  const [internalList, setInternalList] = useState(list)
  const handleFilterTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInternalList(
      list.filter(
        (recipe) => recipe.description.includes(event.target.value) 
      ))
  }
  return (<div>
    <h3>Recipe List has {internalList.length} items</h3>
    <input placeholder='Rezepte filtern' type='text' onChange={handleFilterTextChange}></input>
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
  </div>)
}
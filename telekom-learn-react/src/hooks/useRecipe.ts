import { useMemo, useState } from "react"
import { Recipe } from "../domain/recipe"
import { testRecipes } from "../domain/testRecipes"

export const useRecipe = (recipeId?: string) => {
  const [isLoading, setIsLoading ] = useState(false)

  const recipe = useMemo(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1000)
    return testRecipes.find((recipe) => recipe.id === recipeId)}, [recipeId])

  const save = (newData: Recipe) => {
    const index = testRecipes.findIndex((r) => newData.id === r.id )
    if (index > -1) {
      testRecipes[index] = newData
    } else {
      testRecipes.push(newData)
    }
  }

  return { isLoading, recipe, save }
}
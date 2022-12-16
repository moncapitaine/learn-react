import { useEffect, useMemo, useState } from 'react'
import { FreeMeal, FreeMealIngredient } from '../domain/freeMeal'

interface MealApiData {
  meals: ({
    idMeal: string
    strMeal: string
    strMealThumb?: string
    strImageSource?: string
    strInstructions?: string
    strCategory: string
    strSource?: string
  } & Record<string, string>)[]
}

const fetchDataAsync = async (search: string): Promise<FreeMeal[]> => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  const apiData = await response.json() as MealApiData
  if (!apiData.meals) {
    return []
  }
  return apiData.meals.map((apiMeal) => {
    
    const ingredients = Object.keys(apiMeal)
      .filter((key) => key.startsWith('strIngredient'))
      .map((ingredientKey) => ({
        name: apiMeal[ingredientKey],
        measure: apiMeal[ingredientKey.replace('strIngredient', 'strMeasure')]
      })).filter((ingredient) => (ingredient.name ?? '').length > 0 ) as FreeMealIngredient[]

    return {
      id: apiMeal.idMeal,
      name: apiMeal.strMeal,
      category: apiMeal.strCategory,
      instructions: apiMeal.strInstructions,
      ingredients,
      thumbnailUrl: apiMeal.strMealThumb,
      image: apiMeal.strImageSource
    }
  })
}

export const useFreeMealSearch = (search: string) => {
  const [meals, setMeals] = useState<FreeMeal[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetchDataAsync(search).then((data) => {
      setMeals(data)
      setIsLoading(false)
    })
  }, [search])
  return { isLoading, search, meals }
}
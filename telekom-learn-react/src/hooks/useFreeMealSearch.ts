import { SolarPower } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { FreeMeal, FreeMealIngredient } from '../domain/freeMeal'

const fetchData = async (search: string): Promise<FreeMeal[]> => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  const data = await response.json()
  if (!data.meals) {
    return []
  }
  return data.meals.map((apiMeal: Record<string, string | null>) => {
    const ingredients = Object.keys(apiMeal)
      .filter((key) => key.startsWith('strIngredient'))
      .map((ingredientKey) => ({
        name: apiMeal[ingredientKey],
        measure: apiMeal[ingredientKey.replace('strIngredient', 'strMeasure')]
      })).filter((ingredient) => (ingredient.name ?? '').length > 0 ) as FreeMealIngredient[]

    return {
      id: apiMeal['idMeal'],
      name: apiMeal['strMeal'],
      category: apiMeal['category'],
      instructions: apiMeal['strInstructions'],
      ingredients,
      thumbnailUrl: apiMeal['strMealThumb'],
      image: apiMeal['strImageSource']
    }
  })
}

export const useFreeMealSearch = (search: string) => {
  const [meals, setMeals] = useState<FreeMeal[]>([])
  const [isLoading, setIsLoading] = useState(false)
console.log('useFree..', search)
  useEffect(() => {
    setIsLoading(true)
    fetchData(search).then((data) => {
      setMeals(data)
      setIsLoading(false)
    })
  }, [search])
  return { isLoading, search, meals }
}
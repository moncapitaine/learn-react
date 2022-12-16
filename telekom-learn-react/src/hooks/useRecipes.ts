import { useEffect, useState } from "react"
import { testRecipes } from "../domain/testRecipes"

export const useRecipes = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 300)}, [])

  return { isLoading, recipes: testRecipes }
}
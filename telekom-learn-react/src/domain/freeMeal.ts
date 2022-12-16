export interface FreeMeal {
  id: string
  name: string
  category: string
  ingredients: FreeMealIngredient[]
  thumbnailUrl?: string
  instructions?: string
}

export interface FreeMealIngredient {
  name: string
  measure: string
}
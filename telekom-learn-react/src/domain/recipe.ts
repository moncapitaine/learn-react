export interface Recipe {
  id: string
  name: string
  description: string
  ingredients: Ingredient[]
  steps: PreparationStep[]
}

export interface Ingredient {
  id: string
  name: string
}

export interface PreparationStep {
  sequenceNumner: number
  name: string
  durationMinutes?: number
}
import { Recipe } from "./recipe";

export const testRecipes: Recipe[] = [
  {
    id: '123',
    name: 'Griessbrei',
    description: 'Lecker nicht nur für Kids',
    ingredients: [],
    steps: []
  },
  {
    id: 'abc',
    name: 'Wiener Schnitzel',
    description: 'Der Klassiker',
    ingredients: [
      {
        id: 'i1',
        name: 'Kalbfleisch'
      },
      {
        id: 'i2',
        name: 'Eier'
      }
    ],
    steps: [
      {
        sequenceNumner: 1,
        name: 'Fleisch klopfen'
      },
      {
        sequenceNumner: 2,
        name: 'Panieren'
      },
      {
        sequenceNumner: 3,
        name: 'Braten'
      }
    ]
  },
  {
    id: 'xyz',
    name: 'Lasagne',
    description: 'Bella Italia!',
    ingredients: [],
    steps: []
  }
]
import { RecipeList } from "../components/RecipeList"
import { testRecipes } from "../domain/testRecipes"

export const HomePage = () => {
  const recipes = testRecipes
  console.log('outside JSX')
  return (<section>
    <h2>Homepage</h2>
    <>{console.log('inside JSX')}</>
    <RecipeList list={recipes}  />
    </section>)
}
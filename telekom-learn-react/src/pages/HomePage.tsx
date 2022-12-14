import { useState } from "react"
import { RecipeList } from "../components/RecipeList"
import { testRecipes } from "../domain/testRecipes"

export const HomePage = () => {
  const [showList, setShowList] = useState(true)
  const recipes = testRecipes
  return (<section>
    <h2>Homepage</h2>
      <button onClick={() => setShowList(!showList)}>Toggle</button>
      { showList && <RecipeList list={recipes} /> }
    </section>)
}
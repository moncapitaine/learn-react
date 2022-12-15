import { useParams } from "react-router-dom"

export const RecipeDetailsPage = () => {
  const { recipeId } = useParams()

  return (<section>
    <h2>{recipeId}</h2>
  </section>)
}
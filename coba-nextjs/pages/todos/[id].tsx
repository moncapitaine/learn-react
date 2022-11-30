import { useRouter } from "next/router"
import { ToDoDetails } from "../../components/ToDoDetails"

const ToDoDetailsPage = () => {
  const router = useRouter()
  return <article>
    <button onClick={() => router.back()}>Back</button>
    <h2>ToDo Item Details</h2>
    <ToDoDetails />
  </article>
}

export default ToDoDetailsPage

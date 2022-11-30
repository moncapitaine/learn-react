import { useRouter } from "next/router"
import {ToDoList} from "../../components/ToDoList"

const ToDosList = () => {
  const router = useRouter()
  return (
  <article>
    <h2>ToDo List Index Page</h2>
    <button onClick={() => router.push(`/todos/new`)}>New Item</button>

    <ToDoList />
    </article>)
}

export default ToDosList
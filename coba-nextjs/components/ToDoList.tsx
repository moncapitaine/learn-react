import Link from "next/link"
import { useState } from "react"

export interface ToDoItem {
  id: string
  name: string
}
export const ToDoList = () => {
  const [list, setList] = useState<ToDoItem[]>([
    {
      id: '1', name: 'item 1'
    }, {
      id: '2', name: 'item 2'
    },
  ])

  const handleAddItemClick = () => {
    setList((oldList) => [...list, { id: (oldList.length + 1).toString(), name: 'new item' }])
  }
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <Link href={`/todos/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default ToDoList
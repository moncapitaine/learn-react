import React from "react"
import { ToDoItem } from "../../domain/todoItem"

export interface MyToDoItemProps {
  item: ToDoItem
  onDeleteItem: (item: ToDoItem) => void 
}

// export function MyToDoItem(props: MyToDoItemProps): JSX.Element {
export const MyToDoItem: React.FC<MyToDoItemProps> = ({item, onDeleteItem}) => {
  const handleDeleteItem = (e: React.MouseEvent) => {
    e.preventDefault()
    onDeleteItem(item)
  }
  return (
    <form>
      <h2>Item {item.name}</h2>
      <button onClick={(e) => handleDeleteItem(e)}>Delete item</button>
    </form>
  )
}
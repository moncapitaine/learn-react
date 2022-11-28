import { useState } from "react"
import { MyToDoItem } from "./components/myToDoItem/MyToDoItem"
import { MyToDoList, MyToDoListProps } from "./components/myToDoList/MyToDoList"
import { ToDoItem } from "./domain/todoItem"

const testTodoList: ToDoItem[] = [
  {
    name: 'Waschen',
    state: 'not started'
  },
  {
    name: 'Kochen',
  },
  {
    name: 'Bügeln',
  }
]

export const App = () => {
  const [selectedItem, setSelectedItem] = useState<ToDoItem>()

  const handleSelectItem = (item: ToDoItem) => {
    setSelectedItem(item)
  }

  return (
    <section className="main">
      <h1>Welcome to the Commerzbank Todo List React App</h1>
      <MyToDoList listItems={testTodoList} onSelectItem={handleSelectItem} />
      { selectedItem ? (<MyToDoItem item={selectedItem} />) : (<span>Please select an Item...</span>) }
    </section>
  )
}

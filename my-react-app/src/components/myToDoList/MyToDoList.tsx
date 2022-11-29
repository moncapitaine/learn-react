import { ToDoItem } from "../../domain/todoItem"

export interface MyToDoListProps {
  listItems: ToDoItem[]
  onSelectItem: (selectedItem: ToDoItem) => void
}

export const MyToDoList: React.FC<MyToDoListProps> = ({ listItems, onSelectItem }) => {
  const handleItemSelect = (item: ToDoItem) => {
    onSelectItem(item)
  }
  return (
    <ul>
      {listItems.map((item, index) => (
        <li key={index}>
          <button  onClick={() => handleItemSelect(item)}>Select item</button>
          <span>{item.name} ({item.state})</span>
        </li>))}
    </ul>
  )
}
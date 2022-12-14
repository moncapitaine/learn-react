import { useContext, useEffect, useState } from "react"
import { MyToDoItem } from "../components/myToDoItem/MyToDoItem"
import { MyToDoList } from "../components/myToDoList/MyToDoList"
import { UserContext } from "../contexts/userContext"
import { ToDoItem } from "../domain/todoItem"

const testTodoList: ToDoItem[] = [
  {
    id: '1',
    name: 'Waschen',
    state: 'not started'
  },
  {
    id: '2',
    name: 'Kochen',
  },
  {
    id: '3',
    name: 'Bügeln',
  }
]

export const TodoPage = () => {
  const userContext = useContext(UserContext)
  const [itemList, setItemList] = useState(testTodoList)
  const [selectedItem, setSelectedItem] = useState<ToDoItem>()
  const [newItemText, setNewItemText] = useState('new item')

  const handleSelectItem = (item: ToDoItem) => {
    setSelectedItem(item)
  }

  const handleClickNewItem = () => {
    setItemList([...itemList, { id: `${itemList.length + 1}`, name: newItemText } ])
  }

  const handleDeleteItem = (itemToRemove: ToDoItem) => {
    const filteredItems = itemList.filter((item) => item.id !== itemToRemove.id)
    setItemList(filteredItems)
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemText(e.target.value)
  }

  useEffect(() => {
    console.log('inside useEffect, only if selected item changed', selectedItem)
    return () => console.log('useEffect termination', selectedItem)
  }, [selectedItem])

  useEffect(() => {
    console.log('activation of ToDoPage')
    return () => console.log('deactivation of ToDoPage')
  }, [])

  console.log('ToDoPage re-render')

  return (
    <>
      <h2>Todo Page</h2>
      <p>Hallo lieber {userContext.userName}</p>
      <input type="text" onChange={handleTextChange} />
      <button onClick={handleClickNewItem}>Add item</button>
      <MyToDoList listItems={itemList} onSelectItem={handleSelectItem} />
      { selectedItem ? (<MyToDoItem onDeleteItem={handleDeleteItem} item={selectedItem} />) : (<span>Please select an Item...</span>) }
    </>
  )
}
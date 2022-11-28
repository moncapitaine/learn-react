import { ToDoItem } from "../../domain/todoItem"

export interface MyToDoItemProps {
  item: ToDoItem
}

// export function MyToDoItem(props: MyToDoItemProps): JSX.Element {
export const MyToDoItem: React.FC<MyToDoItemProps> = ({item}) => {
  console.log('MyToDoItem', item)
  return (
    <form>
      <h2>Item {item.name}</h2>
    </form>
  )
}
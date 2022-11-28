export interface ToDoItem {
  id: string
  name: string
  state?: 'not started' | 'started' | 'done'
}
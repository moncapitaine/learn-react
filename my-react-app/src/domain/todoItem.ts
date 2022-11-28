export interface ToDoItem {
  name: string
  state?: 'not started' | 'started' | 'done'
}
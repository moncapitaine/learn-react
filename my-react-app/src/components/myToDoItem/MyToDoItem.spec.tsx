import { vi, it, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { ToDoItem } from '../../domain/todoItem';
import { MyToDoItem } from './MyToDoItem';

describe('the MyToDoItem', () => {
  const testItem: ToDoItem = {
    id: 'testid',
    name: 'testname'
  }
  const handleDeleteItem = vi.fn((item) => console.log('handleDeleteItem mock', item))
  it('renders an accessible form...', () => {
    render(<MyToDoItem item={testItem} onDeleteItem={handleDeleteItem} />)
    const myForm = screen.getByRole('form')
    expect(myForm).toBeDefined()
    expect(handleDeleteItem).not.toHaveBeenCalled()
  })

  it('renders a button to delete an item...', () => {
    render(<MyToDoItem item={testItem} onDeleteItem={handleDeleteItem} />)
    const deleteButton = screen.getByRole('button', { name: /delete item/i})
    expect(deleteButton).toBeEnabled()
    expect(handleDeleteItem).not.toHaveBeenCalled()
  })

  it('triggers delete item if clicked on the delete button..', async () => {
    render(<MyToDoItem item={testItem} onDeleteItem={handleDeleteItem} />)
    const deleteButton = screen.getByRole('button', { name: /delete item/i})
    await userEvent.click(deleteButton)
    expect(handleDeleteItem).toBeCalledWith(testItem)
    expect(handleDeleteItem).toHaveBeenCalledTimes(1)
  })
})
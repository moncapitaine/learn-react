import { jsx } from '@emotion/react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { describe, test } from 'vitest'
import { HomePage } from './HomePage'

const wrapper = (props: {children: JSX.Element}) => (<BrowserRouter>{props.children}</BrowserRouter>)
describe('the homepage', () => {
  test('renders the recipe table', async () => {
    render(<HomePage />, { wrapper })
    const table = await screen.findByRole('table')
    expect(table).toBeVisible()
  })

  test('renders textbox for filtering', async () => {
    render(<HomePage />, { wrapper })
    const filterBox = await screen.findByRole('textbox')
    expect(filterBox).toBeEnabled()
  })

  test('can filter the recipes', async () => {
    render(<HomePage />, { wrapper })
    const filterBox = await screen.findByRole('textbox')
    const rows = await screen.findAllByRole('row')
    expect(rows).toHaveLength(4)
    await userEvent.type(filterBox, 'Griess')
    screen.logTestingPlaygroundURL()
    await waitFor(() => expect(rows).toHaveLength(2))    
  })
})
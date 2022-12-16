import { jsx } from '@emotion/react'
import { findAllByRole, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { describe, test } from 'vitest'
import { CookingContextProvider } from '../context/cookingContext'
import { HomePage } from './HomePage'

const wrapper = (props: {children: JSX.Element}) => (<BrowserRouter><CookingContextProvider>{props.children}</CookingContextProvider></BrowserRouter>)
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
    await userEvent.type(filterBox, 'ü')
    screen.logTestingPlaygroundURL()
    await waitFor(async () => {
      expect((await screen.findAllByRole('row'))).toHaveLength(2)
    })    
  })
})
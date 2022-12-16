import { render, screen } from '@testing-library/react'
import { describe, test } from 'vitest'
import { mockedServer } from '../mocks/server'
import { PokePage } from './PokePage'

describe('the poke page', () => {
  test('finds 12 total', async () => {
    render(<PokePage />)
    const headline = await screen.findByRole('heading', { name: /pokepage for 12 pokemons/i })
    expect(headline).toBeVisible()
  })
  test('loads the items from the network', async () => {
    render(<PokePage />)
    const rows = await screen.findAllByRole('listitem')
    expect(rows).toHaveLength(4)
  })
})
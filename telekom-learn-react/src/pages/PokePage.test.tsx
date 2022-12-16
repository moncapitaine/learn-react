import { render, screen } from '@testing-library/react'
import { beforeAll, afterEach, afterAll, describe, test } from 'vitest'
import { mockedServer } from '../mocks/server'
import { PokePage } from './PokePage'

describe('the poke page', () => {

  beforeAll(() => {
    mockedServer.listen({ onUnhandledRequest: 'error'})
  })
  afterEach(() => mockedServer.resetHandlers())
  afterAll(() => mockedServer.close())
  test('loads the items from the network', async () => {
    render(<PokePage />)
    const rows = await screen.findAllByRole('listitem')
    screen.logTestingPlaygroundURL()
    expect(rows).toHaveLength(20)
  })
})
import { test, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import { MainNavigation } from './MainNavigation';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import { UserContextProvider } from '../context/userContext';

const wrapper = (props: { children: JSX.Element }) => (<BrowserRouter><UserContextProvider>{props.children}</UserContextProvider></BrowserRouter>)
describe('the main navigation', () => {
  test('renders the Homepage button', () => {
    render(<MainNavigation />, {wrapper: BrowserRouter})
    const homePageButton = screen.getByRole('link', { name: /home/i})
    expect(homePageButton).toBeEnabled()
  })
  test('can click the login button', async () => {
    render(<MainNavigation />, {wrapper})
    const loginButton = screen.getByRole('button', { name: /login/i})
    expect(loginButton).toBeEnabled()
    await userEvent.click(loginButton)
    screen.logTestingPlaygroundURL()
    const logoutButton = await screen.findByRole('button', { name: /logout/i})
    expect(logoutButton).toBeEnabled()
  })
})
import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Banner } from './components/Banner'
import { MainNavigation } from './components/MainNavigation'
import { CookingContext, CookingContextProvider } from './context/cookingContext'
import { UserContext, UserContextProvider } from './context/userContext'
import { FreeMealPage } from './pages/FreeMealPage'
import { HomePage } from './pages/HomePage'
import { NewRecipePage } from './pages/NewRecipePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PokePage } from './pages/PokePage'
import { RecipeDetailsPage } from './pages/RecipeDetailsPage'
import { RecipeEditPage } from './pages/RecipeEditPage'

export const App = ():JSX.Element => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <CookingContextProvider>
          <>
          <header className='header'>
            <Banner />
            <MainNavigation />
          </header>
          <main className='main'>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/recipes/new' element={<NewRecipePage />} />
                <Route path='/recipes/:recipeId' element={<RecipeDetailsPage />} />
                <Route path='/recipes/:recipeId/edit' element={<RecipeEditPage />} />
                <Route path='/pokemon' element={<PokePage />} />
                <Route path='/freemeal' element={<FreeMealPage />} />
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
          </main>
          <footer className='footer'>HH</footer>
          </>
      </CookingContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}

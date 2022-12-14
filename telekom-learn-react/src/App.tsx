import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Banner } from './components/Banner'
import { MainNavigation } from './components/MainNavigation'
import { HomePage } from './pages/HomePage'
import { NewRecipePage } from './pages/NewRecipePage'
import { NotFoundPage } from './pages/NotFoundPage'

export const App = ():JSX.Element => {
  return (
    <BrowserRouter>
      <header className='header'>
        <Banner />
        <MainNavigation />
      </header>
      <main className='main'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/newRecipe' element={<NewRecipePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer className='footer'>Footer</footer>
    </BrowserRouter>
  )
}

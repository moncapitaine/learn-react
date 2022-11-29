import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserContext, UserContextData } from "./contexts/userContext"
import { UserContextProvider } from "./contexts/userContextProvider"
import { MyLayout } from "./MyLayout"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { TodoPage } from "./pages/TodoPage"


export const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <MyLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todos" element={<TodoPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <h1>Welcome to the Commerzbank Todo List React App</h1>
        </MyLayout>
      </BrowserRouter>
    </UserContextProvider>
  )
}

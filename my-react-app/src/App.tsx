import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MyLayout } from "./MyLayout"
import { HomePage } from "./pages/HomePage"
import { TodoPage } from "./pages/TodoPage"


export const App = () => (
  <BrowserRouter>
    <MyLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodoPage />} />
      </Routes>
      <h1>Welcome to the Commerzbank Todo List React App</h1>
    </MyLayout>
  </BrowserRouter>
)

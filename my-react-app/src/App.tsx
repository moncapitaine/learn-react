import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserContext, UserContextData } from "./contexts/userContext"
import { MyLayout } from "./MyLayout"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { TodoPage } from "./pages/TodoPage"


export const App = () => {
  // const userContextValue: UserContextData = { userName: 'Michael', role: 'admin' }
  const [loginData, setLoginData] = useState<UserContextData>({userName: undefined, role: undefined})
  return (
    <UserContext.Provider value={loginData}>
      <BrowserRouter>
        <MyLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todos" element={<TodoPage />} />
            <Route path="/login" element={<LoginPage userRole={loginData.role} onLoginChange={(userName, role) => setLoginData({userName, role})} />} />
          </Routes>
          <h1>Welcome to the Commerzbank Todo List React App</h1>
        </MyLayout>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

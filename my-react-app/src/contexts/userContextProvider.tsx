import { useState } from "react"
import { UserContext, UserContextData } from "./userContext"

export interface UserContextProviderProps {
  children: JSX.Element
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [loginData, setLoginData] = useState<{userName: string | undefined, role: 'admin' | 'user' | undefined}>({ userName: undefined, role: undefined })

  return (<UserContext.Provider value={{...loginData, setLoginData}}>
    {children}
  </UserContext.Provider>)
}
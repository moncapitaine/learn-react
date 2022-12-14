import { createContext, useState } from "react";

export interface UserContextProps {
  userName?: string
  setUserName: (newValue: string | undefined) => void
}

export const UserContext = createContext<UserContextProps>({ userName: undefined, setUserName:  () => ({})})

export interface UserContextProviderProps {
  children: JSX.Element
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({children}) => {
  const [userName, setUserName] = useState<string | undefined>()

  return (<UserContext.Provider  value={{userName, setUserName}}>
    {children}
  </UserContext.Provider>)
}

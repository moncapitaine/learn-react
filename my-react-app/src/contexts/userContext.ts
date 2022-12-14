import { createContext } from "react";

export interface UserContextData {
  role: 'admin' | 'user' | undefined
  userName?: string
  setLoginData: (options: {userName: string | undefined, role: 'admin' | 'user' | undefined}) => void
}

export const UserContext = createContext<UserContextData>({
  role: undefined,
  userName: undefined,
  setLoginData: ({userName, role}) => {}
})

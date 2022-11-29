import { createContext } from "react";

export interface UserContextData {
  role: 'admin' | 'user' | undefined
  userName?: string
}

export const UserContext = createContext<UserContextData>({
  role: undefined,
  userName: undefined
})

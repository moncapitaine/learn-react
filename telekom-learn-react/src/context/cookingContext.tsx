import { createContext, useState } from "react";

export interface CookingContextProps {
  recipeFilterText: string
  setRecipeFilterText: (newValue: string) => void
}

export const CookingContext = createContext<CookingContextProps>({ recipeFilterText: '', setRecipeFilterText: () => ({})})

export interface CookingContextProviderProps {
  children: JSX.Element
}

export const CookingContextProvider: React.FC<CookingContextProviderProps> = ({children}) => {
  const [recipeFilterText, setRecipeFilterText] = useState('')

  return (<CookingContext.Provider value={{recipeFilterText, setRecipeFilterText}}>
    {children}
  </CookingContext.Provider>)
}
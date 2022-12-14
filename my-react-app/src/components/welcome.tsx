import { useContext } from "react"
import { UserContext } from "../contexts/userContext"


export const Welcome = () => {
  const { userName } = useContext(UserContext)
  return (
    <>
      <h2>Allerliebster Kunde {userName}...</h2>
      <p>Laber, Bauchpinsel,...</p>
    </>
  )
}
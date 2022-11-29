import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/userContext"

export type UserRole = 'admin' | 'user' | undefined

export const LoginPage: React.FC<{}> = () => {

  const { role, setLoginData } = useContext(UserContext)

  const handleLoginClick = (newRole: UserRole) => {
    // onLoginChange(`username for ${newRole}`, newRole)
    setLoginData({userName: `username for ${newRole}`, role: newRole})
  }

  useEffect(() => {
    console.log('role changed', role)
  }, [role])

  return (
    <article>
      {role ? (<span>You are currently logged in {role}</span>) : (<span>You are not loggend in</span>)}
      <button onClick={() => handleLoginClick('admin')}>Login as Admin</button>
      <button onClick={() => handleLoginClick('user')}>Login as User</button>
      {role && (<button onClick={() => handleLoginClick(undefined)}>Logout</button>)}
    </article>
  )
}
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/userContext"

export type UserRole = 'admin' | 'user' | undefined

export const LoginPage: React.FC<{}> = () => {

  const { role: userRole, setLoginData } = useContext(UserContext)

  const handleLoginClick = (newRole: UserRole) => {
    // onLoginChange(`username for ${newRole}`, newRole)
    setLoginData({userName: `username for ${newRole}`, role: newRole})
  }

  useEffect(() => {
    console.log('role changed', userRole)
  }, [userRole])

  return (
    <div>
      {userRole ? (<span>You are currently logged in {userRole}</span>) : (<span>You are not loggend in</span>)}
      <button onClick={() => handleLoginClick('admin')}>Login as Admin</button>
      <button onClick={() => handleLoginClick('user')}>Login as User</button>
      {userRole && (<button onClick={() => handleLoginClick(undefined)}>Logout</button>)}
    </div>
  )
}
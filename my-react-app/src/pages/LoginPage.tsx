import { useEffect, useState } from "react"

export type UserRole = 'admin' | 'user' | undefined

export interface LoginPageProps {
  userRole: 'admin' | 'user' | undefined
  onLoginChange: (userName: string | undefined, role: 'admin' | 'user' | undefined) => void
}

export const LoginPage: React.FC<LoginPageProps> = ({userRole, onLoginChange}) => {
  const handleLoginClick = (newRole: UserRole) => {
    onLoginChange(`username for ${newRole}`, newRole)
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
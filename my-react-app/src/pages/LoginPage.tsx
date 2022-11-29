import { useState } from "react"

export type UserRole = 'admin' | 'user' | undefined

export const LoginPage = () => {
  const [userRole, setUserRole] = useState<UserRole>()
  return (
    <div>
      {userRole ? (<span>You are currently logged in {userRole}</span>) : (<span>You are not loggend in</span>)}
      <button onClick={() => setUserRole('admin')}>Login as Admin</button>
      <button onClick={() => setUserRole('user')}>Login as User</button>
      {userRole && (<button onClick={() => setUserRole(undefined)}>Logout</button>)}
    </div>
  )
}
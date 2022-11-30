import React from "react"
import { Link } from "react-router-dom"

export interface MyLayoutProps {
  children: JSX.Element[]
}

export const MyLayout: React.FC<MyLayoutProps> = ({children}) => {
  return (
    <>
      {/* React Fragment */}
      <header>
        <Link to="/">Homepage</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/login">Login</Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/DemoUseEffectPromise">DemoUseEffectPromise</Link>
      </header>
      <main>
        {children}
      </main>
      <footer>Layout Footer</footer>
    </>
  )
}
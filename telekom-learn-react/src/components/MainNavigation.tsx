import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import './MainNavigation.css'

export const MainNavigation = () => {
  const { userName, setUserName } = useContext(UserContext)
  return (<ul className="main-navigation">
      <li><Link to="/">Homepage</Link></li>
      <li><Link to="/newRecipe">Neues Rezept anlegen</Link></li>
      <li><button onClick={() => setUserName(userName ? undefined : 'Michael')}>{userName ? 'logout' : 'login'}</button></li>
    </ul>)
}
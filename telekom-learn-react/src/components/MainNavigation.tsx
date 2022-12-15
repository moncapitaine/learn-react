import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import './MainNavigation.css'
import Button from '@mui/material/Button'

export const MainNavigation = () => {
  const { userName, setUserName } = useContext(UserContext)
  return (<ul className="main-navigation">
      <li><Button component={Link}to="/">Homepage</Button></li>
      <li><Button component={Link} to="/newRecipe">Neu</Button></li>
      <li><Button component={Link} to="/freemeal">Free</Button></li>

      <li><Button onClick={() => setUserName(userName ? undefined : 'Michael')}>{userName ? 'logout' : 'login'}</Button></li>
    </ul>)
}
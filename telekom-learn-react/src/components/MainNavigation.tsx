import { Link } from 'react-router-dom'
import './MainNavigation.css'

export const MainNavigation = () => {
  return (<ul className="main-navigation">
      <li><Link to="/">Homepage</Link></li>
      <li><Link to="/newRecipe">Neues Rezept anlegen</Link></li>
    </ul>)
}
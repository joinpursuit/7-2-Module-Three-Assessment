import "./navbar.css"
import { NavLink } from 'react-router-dom'
import logo from "./logo.png"

const Navbar = () => {

    return (

        <nav className="nav-bar">
            <NavLink exact to="/"><img src={logo} alt="ghibli-logo"/></NavLink>
            <NavLink exact to="movies">Movies</NavLink>
            <NavLink exact to="people">People</NavLink>
            <NavLink exact to="locations">Locations</NavLink>
        </nav>
    )
}

export default Navbar
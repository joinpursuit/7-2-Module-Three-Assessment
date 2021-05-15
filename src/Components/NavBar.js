import { NavLink } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return(
        <nav className="NavBarContainer">
            <NavLink to={"/"}> <img src="https://i.pinimg.com/originals/bf/6c/6a/bf6c6ab3902a11066ffb711744e531b2.png"/></NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/people">People</NavLink>
            <NavLink to="/locations">Locations</NavLink>
        </nav>
    )
}

export default NavBar;
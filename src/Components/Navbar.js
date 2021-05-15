import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const NavBar = () => {
    return (
        <nav className="NavBarContainer">
            <NavLink to={"/"}><img src="https://image.pngaaa.com/822/997822-middle.png" alt="totoro" /></NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/people">People</NavLink>
            <NavLink to ="/locations">Locations</NavLink>
        </nav>
    )

}

export default NavBar;
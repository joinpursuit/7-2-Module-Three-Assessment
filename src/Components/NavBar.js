import { NavLink } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return(
        <nav className="NavBarContainer">
            <NavLink to={"/"}><img alt="" src="https://i.pinimg.com/236x/37/b6/16/37b616503c897d4fdf4315a319b72e74--agora-sunflowers.jpg"/></NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/people">People</NavLink>
            <NavLink to="/locations">Locations</NavLink>
        </nav>
    )
}

export default NavBar; 
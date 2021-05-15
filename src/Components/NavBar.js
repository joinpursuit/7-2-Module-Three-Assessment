import { NavLink } from 'react-router-dom';
import "./Nav.css";

const NavBar = () => {
    return(
        <nav className="NavContainer">
            <NavLink to={"/"}><img src="https://s3.narvii.com/image/2rvaimrxg75uwjyfesk5e63dpdf45jrk_128.jpg" alt="logo"/></NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/people">People</NavLink>
            <NavLink to="/locations">Locations</NavLink>
        </nav>
    )
}

export default NavBar; 
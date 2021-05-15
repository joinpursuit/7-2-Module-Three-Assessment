import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return(
        <nav className="NavBarContainer">
            <NavLink to={"/"}><img src="https://cdn.dribbble.com/users/3117394/screenshots/6979664/kaonashi_still_2x.gif?compress=1&resize=50x50" alt="no-face"></img></NavLink>
            <NavLink to={"/movies"}>Movies</NavLink>
            <NavLink to={"/people"}>People</NavLink>
            <NavLink to={"/locations"}>Locations</NavLink>
        </nav>
    )
}

export default NavBar;
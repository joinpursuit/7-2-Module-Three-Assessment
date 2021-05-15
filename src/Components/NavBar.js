import {NavLink} from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="NavBarContainer">
            <NavLink to={"/"}><img src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043233-anime-away-face-no-nobody-spirited_113254.png" alt="homeLinkPic"/></NavLink>
            <NavLink to={"/movies"}>Movies</NavLink>
            <NavLink to={"/people"}>People</NavLink>
            <NavLink to={"locations"}>Locations</NavLink>
        </nav>
    )
}

export default NavBar;
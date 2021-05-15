import {NavLink} from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="NavBarContainer">
            <NavLink to={"/"}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oHf60ml-n6hTfabzRVniBVdnmG0-vsb-rw&usqp=CAU" alt="homeLinkPic"/></NavLink>
            <NavLink to={"/movies"}>Movies</NavLink>
            <NavLink to={"/people"}>People</NavLink>
            <NavLink to={"locations"}>Locations</NavLink>
        </nav>
    )
}

export default NavBar;
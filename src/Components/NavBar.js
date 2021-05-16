import {NavLink}  from "react-router-dom"
import "./NavBar.css"
const NavBar =() =>{
    return (
        <nav>
            <NavLink to="/people">People</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/movies"> Movies</NavLink>
            <NavLink exact to="/">
                <img src="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1517845732/1517845731.jpg" alt="img" width="50px" height="50px"/>
                </NavLink>
        </nav>
    )
}

export default NavBar
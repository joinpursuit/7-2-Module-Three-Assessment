import { NavLink } from 'react-router-dom'

import "./NavBar.css"

const NavBar = () => {
    return(
        <nav className="navBar">
                        <NavLink exact to="/">
                <img className="homeIcon" src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hTqVjZ27HD5yPcO1lN9u1AHaHa%26pid%3DApi&f=1"} alt="Red and white striped bucket of movie theater popcorn with a film reel behind the bucket and the movie ticket in front."/>
            </NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/people">People</NavLink>
            <NavLink to="/locations">Locations</NavLink>
        </nav>
    ) 
}

export default NavBar;
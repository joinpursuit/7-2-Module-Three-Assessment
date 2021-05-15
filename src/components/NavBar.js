import {NavLink} from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return (
        <header>
            <nav>
                <NavLink to={"/"}><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3H2SCuJBcmnrjvLMYrbWth4-_pUKiPUwdQ&usqp=CAU"}></img></NavLink>
                <NavLink to={"/movies"}>Movies</NavLink>
                <NavLink to={"/people"}>People</NavLink>
                <NavLink to={"/locations"}>Locations</NavLink>
            </nav>
        </header>
    )
}

export default NavBar
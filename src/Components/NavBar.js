import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
    return (
        <nav className="NavBarContainer">
            <NavLink to={"/"} onClick={() => props.setColor('tomato')}><img className='nav-logo'src="https://tse3.mm.bing.net/th?id=OIP.dXZc09KuQD2u4h63izlINQHaHa&pid=Api" alt="studio ghibli art"/></NavLink>
            <NavLink to={"/movies"} onClick={() => props.setColor('lightblue')}>Movies</NavLink>
            <NavLink to={"/people"} onClick={() => props.setColor('lightyellow')}>People</NavLink>
            <NavLink to={"/locations"}>Locations</NavLink>
        </nav>
    )
}

export default NavBar;
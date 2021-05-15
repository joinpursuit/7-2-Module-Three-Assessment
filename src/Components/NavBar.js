import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
    return (
        <nav className="NavBarContainer">
            <NavLink to={"/"} onClick={() => document.body.style = 'background: tomato'}><img className='nav-logo'src="https://tse3.mm.bing.net/th?id=OIP.dXZc09KuQD2u4h63izlINQHaHa&pid=Api" alt="studio ghibli art"/></NavLink>
            <NavLink to={"/movies"} onClick={() => document.body.style = 'background: lightblue'}>Movies</NavLink>
            <NavLink to={"/people"} onClick={() => document.body.style = 'background: lightyellow'}>People</NavLink>
            <NavLink to={"/locations"} onClick={() =>  document.body.style = 'background: skyblue'}>Locations</NavLink>
        </nav>
    )
}

export default NavBar;
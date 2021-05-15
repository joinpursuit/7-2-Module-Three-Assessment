import { NavLink } from "react-router-dom";
import './NavBar.css'


const NavBar = () => {

    return (
        <nav>
            <NavLink to='/'> <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/funny-dog-captions-1563456605.jpg' alt="homePic"/></NavLink>
            <NavLink to='/movies'>Movies</NavLink>
            <NavLink to='/people'>People</NavLink>
            <NavLink to='/locations'>Locations</NavLink>
        </nav>
    )
}

export default NavBar
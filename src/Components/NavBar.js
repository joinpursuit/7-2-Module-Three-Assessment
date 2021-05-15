import { NavLink } from 'react-router-dom'
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavContainer">
            <NavLink to={'/'}><img src="https://i.pinimg.com/originals/c9/db/06/c9db06f07d4831b68812feca92d05843.jpg" alt='Ghibli'/></NavLink>
            <NavLink to={'/movies'}>Movies</NavLink>
            <NavLink to={'/people'}>People</NavLink>
            <NavLink to={'/locations'}>Locations</NavLink>
        </nav>
    )
}

export default NavBar; 
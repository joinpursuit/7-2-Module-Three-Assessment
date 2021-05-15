import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
    return (
        <nav className='navContainer'>
            <NavLink to={'/'}><img src='https://i.pinimg.com/originals/11/1d/0d/111d0d822f1870b37ef735bffcce0e86.png'/></NavLink>
            <NavLink to='/locations'>Locations</NavLink>
            <NavLink to='/people'>People</NavLink>
            <NavLink to='/movies'>Movies</NavLink>
        </nav>
    )
}

export default NavBar;
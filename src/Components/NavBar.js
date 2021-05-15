import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/'>
                <img src='https://img.favpng.com/15/19/11/movie-logo-png-favpng-Xx2p2CQEqRH6p3WyivTU8P5zj.jpg'
                    alt='Movie Logo'
                />
            </NavLink>
            <NavLink to='/movies' className='navlink'>Movies</NavLink>
            <NavLink to='locations' className='navlink'>Locations</NavLink>
            <NavLink to='/people' className='navlink'>People</NavLink>
        </nav>
    )
}

export default NavBar;
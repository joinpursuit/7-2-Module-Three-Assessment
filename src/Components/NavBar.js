import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navBar">
            <NavLink exact to="/"><img value='Logo' alt="Logo" src="https://via.placeholder.com/50" /></NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/people">People</NavLink>
            <NavLink to="/locations">Locations</NavLink>
        </nav>
    )
}

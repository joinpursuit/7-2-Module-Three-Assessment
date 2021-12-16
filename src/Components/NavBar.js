import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">
        <img
          src="https://i.pinimg.com/originals/80/67/9b/80679bed85b17eafa3edf3aea74d6b80.png"
          alt="logo"
        />
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/people">People</NavLink>
      <NavLink to="/locations">Locations</NavLink>
    </nav>
  );
}

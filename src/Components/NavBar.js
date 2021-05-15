import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="Nav">
      <NavLink to="/">
        <img className="img"
        src="https://simg.nicepng.com/png/small/198-1987193_any-transparent-studio-ghibli-photos-and-or-gifs.png"
        alt="logo" />
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/people">People</NavLink>
      <NavLink to="/locations">Locations</NavLink>
    </nav>
  );
};

export default NavBar;

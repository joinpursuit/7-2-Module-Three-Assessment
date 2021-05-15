import { NavLink } from "react-router-dom";
import "./Styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBarContainer">
      <NavLink to={"/"}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" />
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/people">People</NavLink>
      <NavLink to="/locations">Locations</NavLink>
    </nav>
  );
};
export default NavBar;

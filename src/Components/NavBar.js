import { NavLink } from "react-router-dom";
import MovieDog from "../assets/MovieDog.jpeg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBarContainer">
      <NavLink to="/">
        <img src={MovieDog} alt="Dog wearing shades with popcorn and soda" />
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/people">People</NavLink>
      <NavLink to="/locations">Locations</NavLink>
    </nav>
  );
};

export default NavBar;

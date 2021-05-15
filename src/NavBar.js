import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavContainer">
      <NavLink to={"/"}>
        <img
          src="https://i.pinimg.com/originals/78/5d/2b/785d2ba1454ee9088bb8c3b09052e52a.png"
          alt="bugsBunny"
        />
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/people">People</NavLink>
      <NavLink to="/locations">Locations</NavLink>
    </nav>
  );
};

export default NavBar;

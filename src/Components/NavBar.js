import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-component">
      <NavLink to="/">
        <img
          src="https://img-aws.ehowcdn.com/600x400/cpi.studiod.com/www_ehow_com/i.ehow.com/images/a06/jk/b5/scan-disc-camera-negatives-800x800.jpg"
          alt="film negatives"
        />
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/people">People</NavLink>
      <NavLink to="locations">Locations</NavLink>
    </div>
  );
};

export default NavBar;

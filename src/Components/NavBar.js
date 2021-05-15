import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
		<nav>
			<NavLink to={"/"}>
				<img
					src="https://thumbs.dreamstime.com/z/dog-watching-movie-25584729.jpg"
					alt="dog at the movies"
				/>
			</NavLink>
			<NavLink to="movies">Movies</NavLink>
			<NavLink to="people">People</NavLink>
			<NavLink to="locations">Location</NavLink>
		</nav>
	);
};

export default NavBar;

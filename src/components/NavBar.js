import React from "react";
import { NavLink } from "react-router-dom";


function NavBar({activePage, handleClick}) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" onClick={() => handleClick("home")} className={activePage === "home" ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" onClick={() => handleClick("movies")} className={activePage === "movies" ? "active" : ""}>Movies</NavLink>
          </li>
          <li>
            <NavLink to="/directors" onClick={() => handleClick("directors")} className={activePage === "directors" ? "active" : ""}>Directors</NavLink>
          </li>
          <li>
            <NavLink to="/actors" onClick={() => handleClick("actors")} className={activePage === "actors" ? "active" : ""}>Actors </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return(
     <div>
    <NavLink path="/Home">Home</NavLink>
    <NavLink path="/directors">Directors</NavLink>
    <NavLink path="/movies">Movies</NavLink>
    <NavLink path="/Actors">Actors</NavLink>
  </div>
  )
}

export default NavBar;

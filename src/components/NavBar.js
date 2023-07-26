import React from "react";
import { NavLink, Switch, Route} from "react-router-dom";
import Movies from "./Movies";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";

function NavBar() {
  return (
    <div>
  <nav>
  <ul>
    <li>
      <NavLink exact to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/movies">Movies</NavLink>
    </li>
    <li>
      <NavLink to="/directors">Directors</NavLink>
    </li>
    <li>
      <NavLink to="/actors">Actors </NavLink>
    </li>
  </ul>
 </nav>

<Switch>
<Route path="/movies" component={Movies} />
<Route path="/directors" component={Directors} />
<Route path="/actors" component={Actors} />
<Route path="/" component={Home} />

</Switch>
</div>

  )
}

export default NavBar

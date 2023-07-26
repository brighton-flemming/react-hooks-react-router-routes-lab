import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {

  const [activePage, setActivePage] = useState("home")

  const handleClick = (page) => {
    setActivePage(page)
  }
  return (
    <div>
    <NavBar activePage={activePage} handleClick={handleClick}/>
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/directors" component={Directors} />
        <Route path="/actors" component={Actors} />
        <Route path="/" component={Home} />
      </Switch>
      </div>
  );
}

export default App;

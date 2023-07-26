import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";



function App() {


  return (
  <div>
    <NavBar/>
    <Home />
    <Movies />
    <Actors />
    <Directors />

    </div>
    )
  }

export default App

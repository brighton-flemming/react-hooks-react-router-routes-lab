import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Pages</h1>
    <div> 
      <li component={movies.title}>Title;{movies.title}</li>
      <li component={movies.time}>Time;{movies.time}</li>
      <ul component={movies.genres}>
        <li>Gneres;{movies.genres}</li>
        </ul> 



    </div>

  </div>;
}

export default Movies;

import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movies => (
        <div key={movies.title}>
          <h2>{movies.title}</h2>
          <p>Time:{movies.time}</p>
          <ul>
            {movies.genres.map((generes)=>(
              <li key={generes}>{generes}</li>
            ))}
          </ul>
        </div>
      ))}
      
    </div>

  )
}

export default Movies;

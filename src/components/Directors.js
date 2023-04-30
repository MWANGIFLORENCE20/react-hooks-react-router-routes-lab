import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
    {directors.map((directors)=>(
      <div key={directors.name}>
        <h2>{directors.name}</h2>
        <li>
          {directors.movies.map((movies)=>(
            <li key={movies}>{movies}</li>
          ))}
        </li>
      </div>
    ))}
    
  </div>
  )
}

export default Directors;

import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    <h1>Actors Page</h1>
    {actors.map((actors,index) =>(
      <div key={index}>
        <h2>{actors.name}</h2>
        
        <ul>
          {actors.movies.map((movies,index) =>(
            <li key={index}>{movies}</li>
            
          ))}
        </ul>
      </div>
    ))}
  </div>
);
}

export default Actors;

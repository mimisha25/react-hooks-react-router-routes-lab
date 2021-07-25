import React from "react";
import { movies } from "../data";

function Movies() {
  const items=movies.map((movie)=>(
    <div key={movie.title}>
      <h1>{movie.title}</h1>
      <h2>{movie.time}</h2>
      <ul>
        {movie.genres.map((genre)=>(
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));
  return <div><h1>Movies Page</h1>{items}</div>;
}

export default Movies;

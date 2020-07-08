import React from "react";
import MovieItem from './components/movieitem';
import "./App.css";

const movie = {
  title: "Avengers: Infinity War",
  vote_avetage: 8.5,
  image: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
  overview:
    "As the Avengers and their allies have continued to protect the world from threats",
};

function App() {
  return <div className="App">
    <MovieItem data={movie}/>
  </div>;
}

export default App;

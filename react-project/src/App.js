import React from "react";
import MovieItem from "./components/movieitem";
import { moviesData } from "./components/moviesData";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
    };
  }
  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter((item) => {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies,
    });
  }
  render() {
    return (
      <div className="App">
        <div>
          {this.state.movies.map((movie) => {
            return (
              <MovieItem
                key={movie.id}
                movie={movie}
                removeMovie={this.removeMovie}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

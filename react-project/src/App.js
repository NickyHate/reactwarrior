import React from "react";
import MovieItem from "./components/movieitem";
import MovieTabs from "./components/movieTabs";
import Pagination from "./components/pagination";
import { API_URL, API_KEY_3 } from "./utils/api";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      currentPage: 1,
      totalPages: 1,
    };
  }
  componentDidMount() {
    this.getMovies();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies();
    }
  }
  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          movies: data.results,
        });
      });
  };
  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter((item) => {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies,
    });
  };
  addMovieToWillWatch = (movie) => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    });
  };
  removeMovieFromWillWatch = (movie) => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter((item) => {
      return item.id !== movie.id;
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    });
  };
  updateSortBy = (value) => {
    this.setState({
      sort_by: value,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-12">
            <div className="row">
              <div className="col-lg-12 col/div>-12 mb-4">
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className="row align-items-center">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-lg-6 col-12 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <p>Will watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
        <div className="col-lg-6 col-12 mb-4">
          <Pagination />
        </div>
      </div>
    );
  }
}

export default App;

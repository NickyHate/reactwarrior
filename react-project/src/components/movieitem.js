import React from "react";

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false,
    };
  }
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${
            this.props.movie.backdrop_path || this.props.movie.poster_path
          }`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{this.props.movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-3">Rating: {this.props.movie.vote_average}</p>
          </div>
          <div className="btn-container">
          <button
            type="button"
            onClick={this.props.removeMovie.bind(null, this.props.movie)}
            className="btn-delete"
          >
            Delete movie
          </button>
          {this.state.willWatch ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.setState({
                  willWatch: false,
                });
                this.props.removeMovieFromWillWatch(this.props.movie);
              }}
            >
              Remove Will Watch
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                this.setState({
                  willWatch: true,
                });
                this.props.addMovieToWillWatch(this.props.movie);
              }}
            >
              Add Will Watch
            </button>
          )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;

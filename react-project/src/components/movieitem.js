import React from "react";

const MovieItem = (props) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500${
          props.movie.backdrop_path || props.movie.poster_path
        }`}
        alt=""
      />
      <div className="card-body">
        <h6 className="card-title">{props.movie.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">Rating: {props.movie.vote_average}</p>
          <button type="button" className="btn btn-secondary" onClick={props.addMovieToWillWatch.bind(null, props.movie)}>
            Will Watch
          </button>
        </div>
        <button
          type="button"
          onClick={props.removeMovie.bind(null, props.movie)}
        >
          Delete movie
        </button>
      </div>
    </div>
  );
};

export default MovieItem;

import React from "react";
import classNames from "classnames";

const MovieTabs = (props) => {
  const { sort_by, updateSortBy } = props;
  const handleClick = (value) => () => {
    updateSortBy(value);
  };
  let classes = sort => classNames("nav-link", {
      active: sort_by === sort
  })

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={classes("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
          Popularity
        </div>
      </li>
      <li className="nav-item">
        <div
          className={classes("revenue.desc")}
          onClick={handleClick("revenue.desc")}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={classes("vote_average.desc")}
          onClick={handleClick("vote_average.desc")}
        >
          Vote average desc
        </div>
      </li>
    </ul>
  );
};
export default MovieTabs;

import React from "react";

const MovieTabs = (props) => {
  const { sort_by, updateSortBy } = props;
  const handleClick = (value) => () => {
    updateSortBy(value);
  };
  const getclassLink = (value) => {
    return `nav-link ${sort_by === value ? "active" : ""}`;
  };
  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={getclassLink("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
          Popularity
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getclassLink("revenue.desc")}
          onClick={handleClick("revenue.desc")}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getclassLink("vote_average.desc")}
          onClick={handleClick("vote_average.desc")}
        >
          Vote average desc
        </div>
      </li>
    </ul>
  );
};
export default MovieTabs;

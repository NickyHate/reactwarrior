import React from "react";

const MovieTabs = () => {
  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div className="nav-link active">Popularity</div>
      </li>
      <li className="nav-item">
        <div className="nav-link">Revenue desc</div>
      </li>
      <li className="nav-item">
        <div className="nav-link">Vote average desc</div>
      </li>
    </ul>
  );
};
export default MovieTabs;

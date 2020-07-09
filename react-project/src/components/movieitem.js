import React from "react";
import Image from "./image";

export default class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false,
    };
  }
  toggleOverview = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  handleLike = () => {
    this.setState({
      like: !this.state.like,
    });
  };
  render() {
    const {
      data: { title, vote_avetage, image, overview },
    } = this.props;
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_avetage}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            className={this.state.like ? "btn--like" : ""}
            type="button"
            onClick={this.handleLike}
          >
            Like
          </button>
        </div>
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

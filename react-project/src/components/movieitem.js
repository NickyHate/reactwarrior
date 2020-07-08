import React from "react";
import Image from "./image";

export default class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }
  render() {
    const {
      data: { title, vote_avetage, image, overview },
    } = this.props;
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_avetage}</p>
        <button
          type="button"
          onClick={() => {
            this.setState({
              show: true,
            });
          }}
        >
          show
        </button>
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

import React, { Component } from "react";

class ImageButton extends Component {
  state = {};
  render() {
    const { x, y } = this.props.coords;
    return (
      <img
        src="#"
        style={{ marginLeft: x, marginTop: y, position: "absolute" }}
      />
    );
  }
}

export default ImageButton;

import React, { Component } from "react";
import Global from "../Global";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 200,
      height: 100,
      x: 10,
      y: 10
    };
  }
  render() {
    const { width, height, x, y } = this.state;
    return (
      <Rnd
        style={style}
        size={{ width: width, height: height }}
        position={{ x: x, y: y }}
        onDragStop={(e, d) => {
          this.setState({ x: d.x, y: d.y });
        }}
        onResize={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.style.width,
            height: ref.style.height,
            ...position
          });
        }}
      >
        <div
          className="card widget-common"
          style={{ width: width, height: height }}
        />
      </Rnd>
    );
  }
}

export default Card;

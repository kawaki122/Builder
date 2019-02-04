import React, { Component } from "react";
import logo from "../../logo.svg";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid green"
};
class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 50,
      height: 50,
      x: 10,
      y: 10
    };
  }

  componentWillMount() {}
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
        lockAspectRatio={true}
      >
        <img
          src={logo}
          className="widget-common"
          style={{ width: width, height: height }}
        />
      </Rnd>
    );
  }
}

export default Image;

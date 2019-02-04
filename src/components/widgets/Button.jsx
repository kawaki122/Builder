import React, { Component } from "react";
import Global from "../Global";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 85,
      height: 45,
      x: 10,
      y: 10
    };
  }

  componentWillMount() {}
  render() {
    return (
      <Rnd
        style={style}
        size={{ width: this.state.width, height: this.state.height }}
        position={{ x: this.state.x, y: this.state.y }}
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
        <div className="btn widget-common">Button</div>
      </Rnd>
    );
  }
}

export default Button;

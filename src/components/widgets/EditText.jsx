import React, { Component } from "react";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
class EditText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 250,
      height: 60,
      x: 10,
      y: 10
    };
  }
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
        <input
          type="text"
          placeholder="input"
          className="form-control widget-common"
        />
      </Rnd>
    );
  }
}

export default EditText;

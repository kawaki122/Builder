import React, { Component } from "react";
import logo from "../../logo.svg";
import Global from "../Global";
class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: props.coords.x,
      y: props.coords.y
    };
  }
  drag = event => {
    Global.fresh = false;
  };
  drop = event => {
    let { clientX, clientY } = event;
    if (clientX < 455) clientX = 455;
    if (clientY < 70) clientY = 70;
    if (clientX > 680) clientX = 680;
    if (clientY > 528) clientY = 528;
    this.setState({ x: clientX - 455, y: clientY - 70 });
  };
  render() {
    const { x, y } = this.state;
    return (
      <img
        src={logo}
        draggable
        onDragStart={event => this.drag(event)}
        onDragEnd={event => this.drop(event)}
        style={{ marginLeft: x, marginTop: y, position: "absolute" }}
      />
    );
  }
}

export default Image;

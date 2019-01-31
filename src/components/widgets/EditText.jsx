import React, { Component } from "react";

class EditText extends Component {
  state = {};
  render() {
    const { x, y } = this.props.coords;
    return (
      <input
        type="text"
        style={{ marginLeft: x, marginTop: y, position: "absolute" }}
      />
    );
  }
}

export default EditText;

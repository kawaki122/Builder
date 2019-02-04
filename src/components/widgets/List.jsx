import React, { Component } from "react";

class List extends Component {
  state = {};
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">List item</li>
        <li className="list-group-item">List item</li>
        <li className="list-group-item">List item</li>
        <li className="list-group-item">List item</li>
        <li className="list-group-item">List item</li>
        <li className="list-group-item">List item</li>
      </ul>
    );
  }
}

export default List;

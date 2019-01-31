import React, { Component } from "react";
import Global from "./Global";
import Button from "./widgets/Button";
import EditText from "./widgets/EditText";
import List from "./widgets/List";
import ImageButton from "./widgets/ImageButton";
import Image from "./widgets/Image";
import Card from "./widgets/Card";

class SideMenu extends Component {
  state = {};
  drag = (event, type) => {
    Global.current = type;
    Global.fresh = true;
  };

  allowDrop = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="card mt-5" onDragOver={event => this.allowDrop(event)}>
        <ul className="list-group">
          <li className="list-group-item">
            <small draggable onDragStart={event => this.drag(event, Button)}>
              Button
            </small>
          </li>
          <li className="list-group-item">
            <small draggable onDragStart={event => this.drag(event, Image)}>
              Image
            </small>
          </li>
          <li className="list-group-item">
            <small draggable onDragStart={event => this.drag(event, List)}>
              List
            </small>
          </li>
          <li className="list-group-item">
            <small draggable onDragStart={event => this.drag(event, EditText)}>
              Input
            </small>
          </li>
          <li className="list-group-item">
            <small draggable onDragStart={event => this.drag(event, Card)}>
              Card
            </small>
          </li>
          <li className="list-group-item">
            <small
              draggable
              onDragStart={event => this.drag(event, ImageButton)}
            >
              ImageButton
            </small>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideMenu;

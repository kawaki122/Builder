import React, { Component } from "react";
import Global from "./Global";
import AppBar from "./widgets/AppBar";

class HomeScreen extends Component {
  state = {
    widgets: [{ widget: AppBar, coords: { x: 0, y: 0 } }]
  };
  drag = event => {
    event.dataTransfer.setData("text", "screen");
  };

  allowDrop = event => {
    event.preventDefault();
  };

  drop = event => {
    event.preventDefault();
    const { widgets } = this.state;
    if (Global.fresh) {
      const newWidget = {
        widget: Global.current,
        coords: { x: event.clientX - 429, y: event.clientY - 89 }
      };
      this.setState({
        widgets: [...widgets, newWidget]
      });
    }
  };
  render() {
    const { widgets } = this.state;
    return (
      <div
        className="card Screen"
        onDrop={event => this.drop(event)}
        onDragOver={event => this.allowDrop(event)}
      >
        {widgets.map((View, index) => (
          <View.widget key={index} coords={View.coords} />
        ))}
      </div>
    );
  }
}

export default HomeScreen;

import React, { Component } from "react";
import Global from "./Global";
import AppBar from "./widgets/AppBar";

class HomeScreen extends Component {
  state = {
    widgets: [AppBar]
  };
  allowDrop = event => {
    event.preventDefault();
  };

  drop = event => {
    event.preventDefault();
    if (Global.fresh) {
      const { widgets } = this.state;
      this.setState({
        widgets: [...widgets, Global.current]
      });
      Global.fresh = false;
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
          <View key={index} />
        ))}
      </div>
    );
  }
}

export default HomeScreen;

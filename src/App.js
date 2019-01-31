import React, { Component } from "react";
import NavBar from "./components/navBar";
import "./App.css";
import SideMenu from "./components/SideMenu";
import HomeScreen from "./components/HomeScreen";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <main className="container-fluid">
          <div className="row">
            <div className="col-md-1">
              <SideMenu />
            </div>
            <div className="col-md-3" />
            <div className="col-md-4">
              <HomeScreen />
            </div>
            <div className="col-md-4" />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

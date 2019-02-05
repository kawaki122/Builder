import React, { Component } from "react";
import NavBar from "./components/navBar";
import "./App.css";
import SideMenu from "./components/SideMenu";
import HomeScreen from "./components/HomeScreen";
import CenterBar from "./components/centerBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <SideMenu />
            </div>
            <div className="col-md-6">
              <CenterBar />
              <div className="border center">
                <HomeScreen />
              </div>
            </div>
            <div className="col-md-3" />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

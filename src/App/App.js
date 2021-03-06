import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { PrivateRoute } from "../components";
import { HomePage } from "../HomePage/HomePage";
import { LoginPage } from "../LoginPage/LoginPage";
import { SignUp } from "../SignUp/SignUp";

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <Router>
              <div>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUp} />
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export { App };

import React, { Component } from "react";
import NavBar from "./components/navBar";
import "./App.css";
import SideMenu from "./components/SideMenu";
import HomeScreen from "./components/HomeScreen";
import CenterBar from "./components/centerBar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import FabMenu from "./components/FabMenu";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 500
  },
  margin: {
    margin: theme.spacing.unit
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <NavBar color="primary" />
        <div className={classes.root}>
          <Grid container spacing={8}>
            <Grid item xs={2}>
              <FabMenu />
            </Grid>
            <Grid item xs={8}>
              <div />
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(App);

import React, { Component } from "react";
import PropTypes from "prop-types";
import Add from "@material-ui/icons/AddCircle";
import Upload from "@material-ui/icons/CloudUpload";
import Phone from "@material-ui/icons/StayCurrentPortrait";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});
class FabMenu extends Component {
  state = {
    Button: 0,
    extended: false
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Fab
          size="medium"
          color="secondary"
          aria-label="Add"
          className={classes.margin}
          onMouseOver={e => {
            this.setState({
              Button: 1,
              extended: true
            });
          }}
        >
          <Phone />
        </Fab>
        <br />
        <Fab
          size="medium"
          color="secondary"
          aria-label="Add"
          className={classes.margin}
        >
          <Add />
        </Fab>
        <br />
        <Fab
          size="medium"
          color="secondary"
          aria-label="Add"
          className={classes.margin}
        >
          <Upload />
        </Fab>
      </div>
    );
  }
}

FabMenu.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(FabMenu);

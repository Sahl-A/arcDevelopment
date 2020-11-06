import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../../assets/logo.svg";

// To set the elevation when scroll down
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// To set override default styles
const useStyles = makeStyles({
  logo: {
    height: "7em",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <ElevationScroll>
      <AppBar position="sticky">
        <Toolbar disableGutters>
          <img src={logo} alt="Company logo" className={classes.logo} />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

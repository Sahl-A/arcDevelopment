import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

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

export default function Header() {
  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant='h3'>Arc Development</Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

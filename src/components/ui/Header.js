import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

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
const useStyles = makeStyles((theme) => ({
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logo: {
    height: "8em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "15px",
    margin: "0 25px 0 50px",
    height: "45px",
  },
}));

export default function Header() {
  const classes = useStyles();
  // useState to change the value when changing the tab
  const [value, setValue] = useState(0);
  // to handle the tab value when reloading the page
  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        setValue(0);
        break;

      case "/services":
        setValue(1);
        break;

      case "/revolution":
        setValue(2);
        break;

      case "/about":
        setValue(3);
        break;

      case "/contact":
        setValue(4);
        break;

      default:
        break;
    }
  }, [value]);

  // handleChange to change the above value when chanigng the tab
  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <ElevationScroll>
      <AppBar position="sticky">
        <Toolbar disableGutters>
          <Button
            component={Link}
            to="/"
            disableRipple
            className={classes.logoContainer}
            onClick={() => {
              setValue(0);
            }}
          >
            <img src={logo} alt="Company logo" className={classes.logo} />
          </Button>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            className={classes.tabContainer}
          >
            <Tab className={classes.tab} component={Link} to="/" label="Home" />
            <Tab
              className={classes.tab}
              component={Link}
              to="/services"
              label="Services"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/revolution"
              label="The Revolution"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/about"
              label="About Us"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/contact"
              label="Contact Us"
            />
          </Tabs>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Free Estimate
          </Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

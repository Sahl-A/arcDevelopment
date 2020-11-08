import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: "0.7",
    "&:hover": {
      opacity: 1,
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  ///////// State Control ///////////
  // useState to change the value when changing the tab
  const [tabValue, setTabValue] = useState(0);
  // Indicator to be used to close the menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  // to handle the tab value when reloading the page
  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        setTabValue(0);
        break;

      case "/services":
        setTabValue(1);
        break;

      case "/revolution":
        setTabValue(2);
        break;

      case "/about":
        setTabValue(3);
        break;

      case "/contact":
        setTabValue(4);
        break;

      default:
        break;
    }
  }, [tabValue]);

  ////////// Handlers /////////////
  // handleTabChange to change the above value when chanigng the tab
  const handleTabChange = (e, tabValue) => {
    setTabValue(tabValue);
  };
  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle menu open when clicking the services tab
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
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
              setTabValue(0);
            }}
          >
            <img src={logo} alt="Company logo" className={classes.logo} />
          </Button>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            className={classes.tabContainer}
          >
            <Tab className={classes.tab} component={Link} to="/" label="Home" />
            <Tab
              aria-owns={anchorEl ? "services-menu" : anchorEl}
              aria-haspopup={anchorEl ? "true" : anchorEl}
              onMouseEnter={handleMenuClick}
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
          <Menu
            id="services-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{ onMouseLeave: handleMenuClose }}
            classes={{ paper: classes.menu }}
          >
            <MenuItem
              component={Link}
              to="/services"
              onClick={() => {
                handleMenuClose();
                setTabValue(1);
              }}
              classes={{ root: classes.menuItem }}
            >
              Services
            </MenuItem>
            <MenuItem
              component={Link}
              to="/customsoftware"
              onClick={() => {
                handleMenuClose();
                setTabValue(1);
              }}
              classes={{ root: classes.menuItem }}
            >
              Custom Software Development
            </MenuItem>
            <MenuItem
              component={Link}
              to="/mobileapps"
              onClick={() => {
                handleMenuClose();
                setTabValue(1);
              }}
              classes={{ root: classes.menuItem }}
            >
              Moblie App Development
            </MenuItem>
            <MenuItem
              component={Link}
              to="/websites"
              onClick={() => {
                handleMenuClose();
                setTabValue(1);
              }}
              classes={{ root: classes.menuItem }}
            >
              Web Development
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

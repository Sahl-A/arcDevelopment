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
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
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
  menuIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menuIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: "0.7",
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
}));

export default function Header(props) {
  const {
    tabValue,
    setTabValue,
    selectedMenuItemIndex,
    setselectedMenuItemIndex,
  } = props;
  // Variable to handle the drawer in ios devices
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  //////////// HOOKS /////////////
  ////////////////////////////////
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  /// useState ////
  // Indicator to be used to close the menu
  const [anchorEl, setAnchorEl] = useState(null);

  // To open drawer
  const [openDrawer, setopenDrawer] = useState(false);

  ////////// Handlers /////////////
  ////////////////////////////////
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

  // Handle when clicking the menu Item
  const handleMenuItemClick = (event, index) => {
    setselectedMenuItemIndex(index);
    setAnchorEl(null);
  };

  /////// Variables ////////
  //////////////////////////
  const menuOptions = [
    { name: "services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Moblie App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Web Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "services-menu" : anchorEl,
      ariaPopUp: anchorEl ? "true" : anchorEl,
      onMouseEnter: handleMenuClick,
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  /////// USE EFFECT HOOK ////////
  ////////////////////////////////
  // to handle the tab value when reloading the page
  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (tabValue !== route.activeIndex) {
            setTabValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== selectedMenuItemIndex
            ) {
              setselectedMenuItemIndex(route.selectedIndex);
            }
          }
          break;

        default:
          break;
      }
    });
    if (window.location.pathname === "/estimate") {
      setTabValue(5);
    }
  }, [
    tabValue,
    menuOptions,
    selectedMenuItemIndex,
    routes,
    setTabValue,
    setselectedMenuItemIndex,
  ]);

  /////// Rendered Variables /////
  ////////////////////////////////
  const tabs = (
    <>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="primary"
        className={classes.tabContainer}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route.name}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopUp}
            onMouseEnter={route.onMouseEnter}
          />
        ))}
      </Tabs>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        component={Link}
        to="/estimate"
        onClick={() => setTabValue(15)}
      >
        Free Estimate
      </Button>
      <Menu
        elevation={0}
        id="services-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        classes={{ paper: classes.menu }}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={option.name}
            component={Link}
            to={option.link}
            selected={index === selectedMenuItemIndex && tabValue === 1}
            onClick={(event) => {
              handleMenuClose();
              setTabValue(1);
              handleMenuItemClick(event, index);
            }}
            classes={{ root: classes.menuItem }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
        onOpen={() => setopenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={route.name}
              divider
              button
              component={Link}
              to={route.link}
              selected={tabValue === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setopenDrawer(false);
                setTabValue(route.activeIndex);
              }}
            >
              <ListItemText disableTypography className={classes.drawerItem}>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            className={classes.drawerItemEstimate}
            classes={{
              selected: classes.drawerItemSelected,
              root: classes.drawerItemEstimate,
            }}
            selected={tabValue === 5}
            onClick={() => {
              setopenDrawer(false);
              setTabValue(5);
            }}
            divider
            button
            component={Link}
            to="/estimate"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        aria-label="open drawer"
        onClick={() => setopenDrawer(true)}
        disableRipple
        className={classes.menuIconContainer}
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
    </>
  );

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
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

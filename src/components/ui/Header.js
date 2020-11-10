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
    opacity: 1,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
}));

export default function Header() {
  const menuOptions = [    { name: "services", link: "/services", activeIndex: 1, selectedIndex: 0 },
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
    { name: "Services", link: "/services", activeIndex: 1 },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];
  // Variable to handle the drawer in ios devices
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  //////////// HOOKS /////////////
  ////////////////////////////////
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  /// useState ////
  // useState to change the value when changing the tab
  const [tabValue, setTabValue] = useState(0);

  // Indicator to be used to close the menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Indicator to be used when selecting the menu item
  const [selectedMenuItemIndex, setselectedMenuItemIndex] = React.useState(0);

  // To open drawer
  const [openDrawer, setopenDrawer] = React.useState(false);

  // to handle the tab value when reloading the page
  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if(tabValue !== route.activeIndex) {
            setTabValue(route.activeIndex);
            if(route.selectedIndex && route.selectedIndex !== selectedMenuItemIndex){
              setselectedMenuItemIndex(route.selectedIndex)
            }
          }
          break;
      
        default:
          break;
      }
    })
  }, [tabValue, menuOptions, selectedMenuItemIndex, routes]); 

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
      <Button className={classes.button} variant="contained" color="secondary">
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
          <ListItem
            selected={tabValue === 0}
            onClick={() => {
              setopenDrawer(false);
              setTabValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
          >
            <ListItemText
              className={
                tabValue === 0
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            selected={tabValue === 1}
            onClick={() => {
              setopenDrawer(false);
              setTabValue(1);
            }}
            divider
            button
            component={Link}
            to="/services"
          >
            <ListItemText
              className={
                tabValue === 1
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            selected={tabValue === 2}
            onClick={() => {
              setopenDrawer(false);
              setTabValue(2);
            }}
            divider
            button
            component={Link}
            to="/revolution"
          >
            <ListItemText
              className={
                tabValue === 2
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            selected={tabValue === 3}
            onClick={() => {
              setopenDrawer(false);
              setTabValue(3);
            }}
            divider
            button
            component={Link}
            to="/about"
          >
            <ListItemText
              className={
                tabValue === 3
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            selected={tabValue === 4}
            onClick={() => {
              setopenDrawer(false);
              setTabValue(4);
            }}
            divider
            button
            component={Link}
            to="/contact"
          >
            <ListItemText
              className={
                tabValue === 4
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItemEstimate}
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
            <ListItemText
              className={
                tabValue === 5
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
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

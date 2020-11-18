import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: "1302",
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  gridContainer: {
    position: "absolute",
    margin: "1.5rem 0",
  },
  link: {
    fontSize: ".75rem",
    fontFamily: "Arial",
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
  },
}));

export default function Footer(props) {
  const {
    setTabValue,
    setselectedMenuItemIndex,
  } = props;
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid
        container
        justify="center"
        className={classes.gridContainer}
        spacing="10"
      >
        <Grid item>
          <Grid container direction="column" spacing="2">
            <Grid
              item
              className={classes.link}
              component={Link}
              onClick={() => {
                setTabValue(0);
              }}
              to="/"
            >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing="2">
            <Grid
              item
              className={classes.link}
              component={Link}
              onClick={() => {
                setTabValue(1);
                setselectedMenuItemIndex(0);
              }}
              to="/services"
            >
              Services
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              onClick={() => {
                setTabValue(1);
                setselectedMenuItemIndex(1);
              }}
              to="/customsoftware"
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              onClick={() => {
                setTabValue(1);
                setselectedMenuItemIndex(2);
              }}
              to="/mobileapps"
            >
              iOS/Android App Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              onClick={() => {
                setTabValue(1);
                setselectedMenuItemIndex(3);
              }}
              to="/websites"
            >
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing="2">
            <Grid
              item
              className={classes.link}
              component={Link}
              onClick={() => {
                setTabValue(2);
              }}
              to="/revolution"
            >
              The Revolution
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              onClick={() => {
                setTabValue(2);
              }}
              to="/revolution"
            >
              Vision
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              onClick={() => {
                setTabValue(2);
              }}
              to="/revolution"
            >
              Technology
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              onClick={() => {
                setTabValue(2);
              }}
              to="/revolution"
            >
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing="2">
            <Grid
              item
              className={classes.link}
              component={Link}
              onClick={() => {
                setTabValue(3);
              }}
              to="/about"
            >
              About Us
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              onClick={() => {
                setTabValue(3);
              }}
              to="/about"
            >
              History
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              onClick={() => {
                setTabValue(3);
              }}
              to="/about"
            >
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing="2">
            <Grid
              item
              className={classes.link}
              component={Link}
              onClick={() => {
                setTabValue(4);
              }}
              to="/contact"
            >
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        alt="footer adorment"
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  );
}

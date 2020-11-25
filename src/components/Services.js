import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ButtonArrow from "../components/ui/ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import iosAndroidIcon from "../assets/mobile.svg";
import websiteIcon from "../assets/website.svg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  subtitle: {
    marginBottom: ".2em",
    lineHeight: 1.7,
  },
  icon: {
    marginLeft: "2em",
    width: 240,
    height: 240,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      width: 120,
      height: 120,
    },
  },
  serviceContainer: {
    marginTop: "6em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "3em",
    },
  },
}));

export default function Services(props) {
  const { setTabValue, setselectedMenuItemIndex } = props;
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      {/* Custome Software Development */}
      <Grid
        item
        container
        justify={matchesSM ? "center" : undefined}
        className={classes.serviceContainer}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
          }}
        >
          <Typography variant="h4">Custom Software Development</Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Save Energy. Save Time. Save Money.
          </Typography>
          <Typography variant="subtitle1">
            Complete digital solutions, from investigation to celebration
          </Typography>
          <Button
            variant="outlined"
            className={classes.learnButton}
            style={{ marginTop: ".8rem" }}
            component={Link}
            to="/customsoftware"
            onClick={() => {
              setTabValue(1);
              setselectedMenuItemIndex(1);
            }}
          >
            <span style={{ margin: "0 2px 0 5px" }}>Learn More</span>
            <ButtonArrow
              height="10"
              width="10"
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item>
          <img
            alt="Custom Software Icon"
            src={customSoftwareIcon}
            className={classes.icon}
          />
        </Grid>
      </Grid>
      {/* ios/Android Development */}
      <Grid
        item
        container
        justify={matchesSM ? "center" : "flex-end"}
        className={classes.serviceContainer}
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? "center" : undefined,
          }}
        >
          <Typography variant="h4">iOS/Android App Development</Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Extend Functionality. Extend Access. Increase Engagement.
          </Typography>
          <Typography variant="subtitle1">
            Integrate your web experience or create a standalone app
            {matchesSM ? null : <br />}with either mobile platform.
          </Typography>
          <Button
            variant="outlined"
            className={classes.learnButton}
            style={{ marginTop: ".8rem" }}
            component={Link}
            to="/mobileapps"
            onClick={() => {
              setTabValue(1);
              setselectedMenuItemIndex(2);
            }}
          >
            <span style={{ margin: "0 2px 0 5px" }}>Learn More</span>
            <ButtonArrow
              height="10"
              width="10"
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
          <img
            alt="Mobile Phone Icon"
            src={iosAndroidIcon}
            className={classes.icon}
          />
        </Grid>
      </Grid>
      {/* Website Development */}
      <Grid
        item
        container
        justify={matchesSM ? "center" : undefined}
        className={classes.serviceContainer}
        style={{ marginBottom: matchesSM ? "3rem" : "6rem" }}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined,
          }}
        >
          <Typography variant="h4">Website Development</Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Reach More. Discover More. Sell More.
          </Typography>
          <Typography variant="subtitle1">
            Optimized for Search Engines, built for speed.
          </Typography>
          <Button
            variant="outlined"
            className={classes.learnButton}
            style={{ marginTop: ".8rem" }}
            component={Link}
            to="/websites"
            onClick={() => {
              setTabValue(1);
              setselectedMenuItemIndex(3);
            }}
          >
            <span style={{ margin: "0 2px 0 5px" }}>Learn More</span>
            <ButtonArrow
              height="10"
              width="10"
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item>
          <img alt="Website Icon" src={websiteIcon} className={classes.icon} />
        </Grid>
      </Grid>
    </Grid>
  );
}

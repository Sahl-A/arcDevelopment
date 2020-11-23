import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import animationData from "../animations/landinganimation/data";
import ButtonArrow from "../components/ui/ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import iosAndroidIcon from "../assets/mobile.svg";
import websiteIcon from "../assets/website.svg";

const useStyles = makeStyles((theme) => ({
  heroAnimation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      margin: "2em auto",
      minWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  subtitle: {
    marginBottom: ".2em",
    lineHeight: 1.7,
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      height: 120,
      width: 120,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "7em",
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  // Default options for the animations
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direcition="column" className={classes.mainContainer}>
      {/* ///////// HERO Block ////////// */}
      <Grid item container justify="flex-end" alignItems="center">
        <Grid sm item className={classes.heroTextContainer}>
          <Typography variant="h2" align="center">
            Bringing the west technology to the rest of the world
          </Typography>
          <Grid container justify="center" className={classes.buttonContainer}>
            <Grid item>
              <Button variant="contained" className={classes.estimateButton}>
                Free estimate
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" className={classes.learnButtonHero}>
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width="15"
                  height="15"
                  fill={theme.palette.primary.main}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid sm item className={classes.heroAnimation}>
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
        </Grid>
      </Grid>
      {/* ///////// SERVICES Block ////////// */}
      <Grid item container>
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
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
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
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
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
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ButtonArrow
                height="10"
                width="10"
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="Website Icon"
              src={websiteIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* ///////// REVOLUTION Block ////////// */}
      <Grid item container></Grid>
      {/* ///////// INFORMATION Block ////////// */}
      <Grid item container></Grid>
      {/* ///////// Call To Action Block ////////// */}
      <Grid item container></Grid>
    </Grid>
  );
}

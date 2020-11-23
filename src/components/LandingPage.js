import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

import animationData from "../animations/landinganimation/data";
import ButtonArrow from "../components/ui/ButtonArrow";

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
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

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
      <Grid item container>
        <div>second part</div>
      </Grid>
    </Grid>
  );
}

import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import animationData from "../animations/landinganimation/data";
import ButtonArrow from "../components/ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({}));

export default function LandingPage() {
  const classes = useStyles();

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
    <Grid container direcition="column">
      <Grid item container>
        <Grid item>
          <div>Bringing the west technology to the rest</div>
          <Grid container>
            <Grid item>
              <Button variant="contained">Free estimate</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">
                Learn More
                <ButtonArrow width="15" height="15" fill="red" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
        </Grid>
      </Grid>
      <Grid item container>
        <div>second part</div>
      </Grid>
    </Grid>
  );
}

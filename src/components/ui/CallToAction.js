import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import ButtonArrow from "./ButtonArrow";
import CTABackground from "../../assets/background.jpg";
import CTAMobileBackground from "../../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  CTAContainer: {
    boxSizing: "border-box",
    backgroundImage: `url(${CTABackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "98.9vw",
    height: "100vh",
    padding: "0 5rem",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${CTAMobileBackground})`,
      flexDirection: "column",
      justifyContent: "center",
      width: "96.65vw",
    },
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
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 25,
    height: 70,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "1rem",
      height: 60,
      width: 205,
    },
  },
}));

export default function CallToAction(props) {
  const { setTabValue } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container className={classes.CTAContainer}>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Typography variant="h2" align="center">
            Simple Software.
            <br />
            Revolutionary Results.
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
            Take advantage of the 21st Century.
          </Typography>
          <Grid item>
            <Button
              variant="outlined"
              className={classes.learnButton}
              style={{ marginTop: ".8rem" }}
              component={Link}
              to="/revolution"
              onClick={() => setTabValue(2)}
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ButtonArrow
                height="10"
                width="10"
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <Button
              className={classes.estimateButton}
              variant="contained"
              color="secondary"
              component={Link}
              to="/estimate"
              onClick={() => setTabValue(15)}
            >
              Free Estimate
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

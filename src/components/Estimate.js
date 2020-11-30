import React, { useState } from "react";
import Lottie from "react-lottie";
import { cloneDeep } from "lodash";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import people from "../assets/people.svg";
import usersIcon from "../assets/users.svg";
import iPhone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";
import estimateAnimation from "../animations/estimateAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "9rem",
    height: "9rem",
  },
  answerText: {
    maxWidth: "12rem",
    marginBottom: "1rem",
    textAlign: "center",
    lineHeight: 1,
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
    height: 50,
    width: 225,
    marginTop: "2rem",
    fontSize: "1.25rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export default function Estimate() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  // Default options for the animations
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container style={{ margin: "5rem 0 5rem 0" }}>
      {/* Left Side that includes title & animation */}
      {/* .......................................... */}
      <Grid
        lg={4}
        style={{ margin: matchesMD ? "2rem 0 10rem 0" : "2rem 5rem 5rem 0" }}
        item
        container
        direction="column"
      >
        <Grid item>
          <Typography
            style={{
              margin: matchesMD ? " -5rem 0  " : "-3rem 0 2rem 5rem",
              textAlign: matchesMD ? "center" : undefined,
            }}
            variant="h2"
          >
            Estimate
          </Typography>
        </Grid>
        <Grid item>
          <Lottie
            options={defaultOptions}
            height={"100%"}
            width={"100%"}
            style={{ maxWidth: "40rem" }}
          />
        </Grid>
      </Grid>
      {/* Right Side that includes the Questions */}
      {/* .......................................... */}
      <Grid lg={6} item container direction="column" alignItems="center">
        {/* Question */}
        <Grid item>
          <Typography style={{ marginBottom: "2rem" }} variant="h4">
            Which Service are you interested in?
          </Typography>
        </Grid>
        {/* Answers */}
        <Grid item container direction="row" spacing={6}>
          {/* First Answer */}
          <Grid md item container direction="column" alignItems="center">
            <Grid item>
              <Typography className={classes.answerText} variant="h6">
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                src={software}
                alt="three floating screens"
              />
            </Grid>
          </Grid>
          {/* Second Answer */}
          <Grid md item container direction="column" alignItems="center">
            <Grid item>
              <Typography className={classes.answerText} variant="h6">
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                src={software}
                alt="three floating screens"
              />
            </Grid>
          </Grid>
          {/* Third Answer */}
          <Grid md item container direction="column" alignItems="center">
            <Grid item>
              <Typography className={classes.answerText} variant="h6">
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                src={software}
                alt="three floating screens"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Navigation Arrows */}
        <Grid item container>
          <Grid
            item
            container
            justify="space-between"
            style={{ width: "18rem", margin: "3em auto 0 auto" }}
          >
            <Grid item>
              <IconButton>
                <img src={backArrow} alt="Previous question" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <img src={forwardArrow} alt="Next question" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        {/* Estimate Button */}
        <Grid item>
          <Button variant="contained" className={classes.estimateButton}>
            Get Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

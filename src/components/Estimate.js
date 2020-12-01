import React, { useState } from "react";
import Lottie from "react-lottie";
import { cloneDeep } from "lodash";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
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
import backArrow from "../assets/backArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import estimateAnimation from "../animations/estimateAnimation/data.json";

import {
  defaultQuestions,
  softwareQuestions,
  websiteQuestions,
} from "../assets/estimateQuestions";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "9rem",
    height: "9rem",
  },
  answer: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
      cursor: "pointer",
    },
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

  // Default options for the animations
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  /////////// HOOKS ////////////
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  // UseState
  const [questions, setQuestions] = useState(softwareQuestions);

  ////////// Functions ///////////
  // Navigate to the next question
  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);

    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };
  // Navigate to the previous question
  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);

    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  // Check wheather the previous navigation is disabled or not
  const backButtonDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    const activeId = currentlyActive[0].id;

    if (activeId === 1) {
      return true;
    }
    return false;
  };
  // Check wheather the forward navigation is disabled or not
  const forwardButtonDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    const activeId = currentlyActive[0].id;

    if (activeId === questions[questions.length - 1].id) {
      return true;
    }
    return false;
  };

  return (
    <Grid container style={{ margin: "5rem 0 5rem 0" }}>
      {/* Left Side that includes title & animation */}
      {/* .......................................... */}
      <Grid
        lg={4}
        style={{ margin: matchesMD ? "2rem 0 7rem 0" : "2rem 5rem 5rem 0" }}
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
      <Grid
        lg={6}
        style={{ marginLeft: "auto" }}
        item
        container
        direction="column"
        alignItems="center"
      >
        {/* Question & Answers */}
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              {/* //////// Question  */}
              <Grid item>
                <Typography
                  style={{
                    marginBottom: "2rem",
                    maxWidth: matchesMD ? "25rem" : undefined,
                    textAlign: matchesMD ? "center" : undefined,
                  }}
                  variant="h4"
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: "2.5em" }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              {/* /////// Answers */}
              <Grid item container direction="row" spacing={6}>
                {question.options.map((option, index) => (
                  <Grid
                    key={index}
                    md
                    item
                    container
                    direction="column"
                    alignItems="center"
                    className={classes.answer}
                  >
                    <Grid item>
                      <Typography className={classes.answerText} variant="h6">
                        {option.title}
                      </Typography>
                      <Typography align="center" variant="caption">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        className={classes.icon}
                        src={option.icon}
                        alt={option.iconAlt}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}
        {/* Navigation Arrows */}
        <Grid item container>
          <Grid
            item
            container
            justify="space-between"
            style={{ width: "18rem", margin: "3em auto 0 auto" }}
          >
            <Grid item>
              <IconButton
                disabled={backButtonDisabled()}
                onClick={previousQuestion}
              >
                <img
                  src={backButtonDisabled() ? backArrowDisabled : backArrow}
                  alt="Previous question"
                />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                disabled={forwardButtonDisabled()}
                onClick={nextQuestion}
              >
                <img
                  src={
                    forwardButtonDisabled()
                      ? forwardArrowDisabled
                      : forwardArrow
                  }
                  alt="Next question"
                />
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

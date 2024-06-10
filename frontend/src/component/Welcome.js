import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "calc(100vh - 64px)", // Adjusted to account for navbar height (assuming a standard navbar height of 64px)
    backgroundImage:
      "url(https://img.freepik.com/free-photo/we-are-hiring-digital-collage_23-2149667037.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "flex-start",
    // justifyContent: "flex-end", // Align items to the right
    alignItems: "flex-end", // Align items to the top
    // alignItems: "center",
    flexDirection: "column", // Adjusted to center the text vertically
    paddingTop: "20px", // Add padding to the top
  },
  text: {
    color: "#000", // Set text color to black
    fontSize: "2rem",
    "@media (min-width:600px)": {
      fontSize: "3rem",
      fontFamily: "Lucida Console, Courier New", // Corrected font-family syntax
    },
    "@media (min-width:960px)": {
      fontSize: "4rem",
    },
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Typography variant="h2" align="center" className={classes.text}>
        Welcome to Job Portal
      </Typography>
    </Grid>
  );
};

export const ErrorPage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Typography variant="h2" align="center" className={classes.text}>
        Error 404
      </Typography>
    </Grid>
  );
};

export default Welcome;

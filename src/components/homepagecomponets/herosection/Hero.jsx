import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeroLeftSection from "./HeroLeftSection";
import HeroRightSection from "./HeroRightSection";

const useStyles = makeStyles({
  heroContainer: {
    position: "relative",
    minHeight: "85vh",
    display: "flex",
    alignItems: "center",
    padding: "20px 0 0 0",
    overflow: "hidden",
    marginBottom: 0,
  },
  contentContainer: {
    position: "relative",
    zIndex: 3,
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
      opacity: 0.5,
    },
    "100%": {
      transform: "scale(1.1)",
      opacity: 0.6,
    },
  },
  "@keyframes float": {
    "0%": {
      transform: "translate(0, 0)",
    },
    "50%": {
      transform: "translate(-30px, 20px)",
    },
    "100%": {
      transform: "translate(20px, -30px)",
    },
  },
});

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroContainer}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={7} lg={8}>
            <HeroLeftSection />
          </Grid>
          
          <Grid item xs={12} md={5} lg={4}>
            <HeroRightSection />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
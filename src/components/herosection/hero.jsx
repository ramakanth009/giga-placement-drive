import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeroLeftSection from "./HeroLeftSection";
import HeroRightSection from "./HeroRightSection";

const useStyles = makeStyles({
  heroContainer: {
    position: "relative",
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    padding: "20px 0 0 0",
    overflow: "hidden",
    marginBottom: 0,
  },
});

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroContainer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
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
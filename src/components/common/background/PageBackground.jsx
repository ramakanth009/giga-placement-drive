import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  bgElement: {
    position: "absolute",
    borderRadius: "50%",
    background: "rgba(42, 43, 106, 0.04)",
    filter: "blur(80px)",
  },
  bgElement1: {
    width: "800px",
    height: "800px",
    top: "-300px",
    right: "-200px",
    animation: "$pulse 15s infinite alternate",
  },
  bgElement2: {
    width: "600px",
    height: "600px",
    bottom: "-200px",
    left: "-100px",
    background: "radial-gradient(circle, rgba(42,43,106,0.1) 0%, rgba(42,43,106,0) 70%)",
    animation: "$float 18s infinite alternate",
  },
  bgGrid: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.4,
    backgroundImage: "linear-gradient(to right, rgba(42,43,106,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(42,43,106,0.10) 1px, transparent 1px)",
    backgroundSize: "30px 30px",
  },
  "@keyframes pulse": {
    "0%": { transform: "scale(1)", opacity: 0.5 },
    "100%": { transform: "scale(1.1)", opacity: 0.6 },
  },
  "@keyframes float": {
    "0%": { transform: "translate(0, 0)" },
    "50%": { transform: "translate(-30px, 20px)" },
    "100%": { transform: "translate(20px, -30px)" },
  },
});

const PageBackground = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.wrapper}>
      <Box className={`${classes.bgElement} ${classes.bgElement1}`} />
      <Box className={`${classes.bgElement} ${classes.bgElement2}`} />
      <Box className={classes.bgGrid} />
    </Box>
  );
};

export default PageBackground;

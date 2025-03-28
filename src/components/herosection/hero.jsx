import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  herocontainer: {
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0", // Example background color
  },
  herosub1: {
    width: "100%",
    height: "50%",
    backgroundColor: "#e0e0e0", // Example background color
  },
  heroheading: {
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  herosub2: {
    width: "100%",
    height: "50%",
    backgroundColor: "#d0d0d0", // Example background color
  },
});
const Hero = () => {
  const Classes = useStyles();
  return (
    <div>
      <Box className={Classes.herocontainer}>
        <Box className={Classes.herosub1}>
          <Typography variant="h3" className={Classes.heroheading}>
            Gigaversity's <span>virtual placement drive</span>
          </Typography>
        </Box>
        <Box className={Classes.herosub2}>helo2</Box>
      </Box>
    </div>
  );
};

export default Hero;

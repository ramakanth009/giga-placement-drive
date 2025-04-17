import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  numberCounter: {
    animation: "$numberPulse 2s infinite alternate",
    color: "#2F2E51 !important",
    fontWeight: "bold !important",
  },
  "@keyframes numberPulse": {
    "0%": {
      // textShadow: "0 0 5px rgba(255, 198, 20, 0.3)",
    },
    "100%": {
      // textShadow: "0 0 15px rgba(255, 198, 20, 0.8)",
    },
  },
});

// Component for animated counter
const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const classes = useStyles();
  
  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span className={classes.numberCounter}>{prefix}{count}{suffix}</span>;
};

export default AnimatedCounter;
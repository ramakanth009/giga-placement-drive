// src/components/aboutcomponents/whatsetsuapartsection/WhatSetsUsApartSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';

const useStyles = makeStyles({
  programsSection: {
    padding: "80px 20px 100px",
    position: "relative",
    background: "linear-gradient(to bottom, #f8f9ff, #ffffff)",
    "@media (max-width: 1200px)": {
      padding: "70px 20px 90px",
    },
    "@media (max-width: 960px)": {
      padding: "60px 20px 80px",
    },
    "@media (max-width: 600px)": {
      padding: "50px 15px 70px",
    },
    "@media (max-width: 480px)": {
      padding: "40px 15px 60px",
    },
    "@media (max-width: 375px)": {
      padding: "30px 10px 50px",
    },
  },
  programsContentContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    "@media (max-width: 1200px)": {
      maxWidth: "1000px",
    },
    "@media (max-width: 960px)": {
      maxWidth: "90%",
    },
  },
  programsTitle: {
    fontSize: "2.2rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "20px !important",
    textAlign: "center",
    "&:after": {
      content: '""',
      display: "block",
      width: "60px",
      height: "3px",
      backgroundColor: "#FFC614",
      margin: "15px auto 0",
    },
    "@media (max-width: 1200px)": {
      fontSize: "2.1rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "2rem !important",
      "&:after": {
        width: "55px",
        margin: "12px auto 0",
      },
    },
    "@media (max-width: 768px)": {
      fontSize: "2rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.7rem !important",
      marginBottom: "15px !important",
      "&:after": {
        width: "50px",
        height: "2.5px",
        margin: "10px auto 0",
      },
    },
    "@media (max-width: 480px)": {
      fontSize: "1.5rem !important",
      "&:after": {
        width: "45px",
        margin: "8px auto 0",
      },
    },
    "@media (max-width: 375px)": {
      fontSize: "1.3rem !important",
      marginBottom: "12px !important",
      "&:after": {
        width: "40px",
        height: "2px",
        margin: "6px auto 0",
      },
    },
  },
  programCard: {
    padding: "30px 25px",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.06)",
    height: "100%",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    border: "1px solid #f0f0f0",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 1200px)": {
      padding: "28px 22px",
      borderRadius: "14px",
    },
    "@media (max-width: 1100px)": {
      padding: "25px 20px",
    },
    "@media (max-width: 960px)": {
      padding: "22px 18px",
      borderRadius: "12px",
    },
    "@media (max-width: 768px)": {
      padding: "25px 20px",
    },
    "@media (max-width: 600px)": {
      padding: "20px 18px",
      borderRadius: "10px",
      marginBottom: "15px",
    },
    "@media (max-width: 480px)": {
      padding: "18px 15px",
      borderRadius: "8px",
      marginBottom: "12px",
    },
    "@media (max-width: 375px)": {
      padding: "15px 12px",
      borderRadius: "6px",
      marginBottom: "10px",
    },
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
    },
  },
  programIcon: {
    width: "60px",
    height: "60px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
    transition: "all 0.3s ease",
    "& svg": {
      fontSize: "30px",
      color: "white",
    },
    "@media (max-width: 1200px)": {
      width: "55px",
      height: "55px",
      "& svg": {
        fontSize: "28px",
      },
    },
    "@media (max-width: 960px)": {
      width: "50px",
      height: "50px",
      marginBottom: "12px",
      borderRadius: "10px",
      "& svg": {
        fontSize: "25px",
      },
    },
    "@media (max-width: 600px)": {
      width: "45px",
      height: "45px",
      marginBottom: "10px",
      "& svg": {
        fontSize: "22px",
      },
    },
    "@media (max-width: 480px)": {
      width: "40px",
      height: "40px",
      marginBottom: "8px",
      borderRadius: "8px",
      "& svg": {
        fontSize: "20px",
      },
    },
    "@media (max-width: 375px)": {
      width: "35px",
      height: "35px",
      marginBottom: "6px",
      borderRadius: "6px",
      "& svg": {
        fontSize: "18px",
      },
    },
  },
  programTitle: {
    fontSize: "1.3rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "12px !important",
    "@media (max-width: 1200px)": {
      fontSize: "1.25rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "1.2rem !important",
      marginBottom: "10px !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.15rem !important",
      marginBottom: "8px !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.1rem !important",
      marginBottom: "6px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "1rem !important",
      marginBottom: "5px !important",
    },
  },
  programDesc: {
    fontSize: "0.95rem !important",
    color: "#666 !important",
    lineHeight: "1.5 !important",
    "@media (max-width: 1200px)": {
      fontSize: "0.93rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "0.9rem !important",
      lineHeight: "1.45 !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.85rem !important",
      lineHeight: "1.4 !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.8rem !important",
      lineHeight: "1.35 !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.75rem !important",
      lineHeight: "1.3 !important",
    },
  },
  colorBar: {
    height: "4px",
    width: "50px",
    borderRadius: "2px",
    marginBottom: "15px",
    "@media (max-width: 960px)": {
      width: "45px",
      height: "3px",
      marginBottom: "12px",
    },
    "@media (max-width: 600px)": {
      width: "40px",
      marginBottom: "10px",
    },
    "@media (max-width: 480px)": {
      width: "35px",
      height: "3px",
      marginBottom: "8px",
    },
    "@media (max-width: 375px)": {
      width: "30px",
      height: "2px",
      marginBottom: "6px",
    },
  },
  decorCircle: {
    position: "absolute",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(42, 43, 106, 0.05) 0%, rgba(42, 43, 106, 0) 70%)",
    zIndex: 0,
  },
});

const WhatSetsUsApartSection = () => {
  const classes = useStyles();

  // Programs data
  const programs = [
    {
      icon: <SchoolIcon />,
      title: "Virtual Placement Drive",
      description: "A 30-day hiring & learning program with 100+ job opportunities, tailored training, and AI-powered learning.",
      color: "#8a5cf7"
    },
    {
      icon: <WorkIcon />,
      title: "Master Internship Program",
      description: "A 3-month intensive internship where students develop one full-fledged product and receive guaranteed interview opportunities.",
      color: "#4376eb"
    },
    {
      icon: <BuildIcon />,
      title: "Advanced Full-Stack & Data Science Program",
      description: "A 9-month deep-dive training with major projects and numerous job opportunities for each student.",
      color: "#f07c3e"
    },
    {
      icon: <PeopleIcon />,
      title: "Corporate Training",
      description: "Customized upskilling programs for companies looking to enhance their team's technical capabilities.",
      color: "#e8518d"
    }
  ];

  return (
    <Box className={classes.programsSection}>
      <Box className={classes.decorCircle} sx={{ top: '10%', right: '5%', width: '300px', height: '300px' }} />
      <Box className={classes.decorCircle} sx={{ bottom: '5%', left: '10%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(255, 198, 20, 0.05) 0%, rgba(255, 198, 20, 0) 70%)' }} />
      
      <Box className={classes.programsContentContainer}>
        <Typography variant="h2" className={classes.programsTitle}>
          What Sets Us Apart
        </Typography>

        <Box 
          display="flex" 
          flexWrap="wrap"
          gap={4} 
          sx={{ mt: 3 }}
          justifyContent="center"
        >
          {programs.map((program, index) => (
            <Box 
              key={index} 
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' },
                minWidth: { xs: '100%', sm: '45%', md: '22%' }
              }}
            >
              <Box className={classes.programCard}>
                <Box 
                  className={classes.programIcon} 
                  sx={{ backgroundColor: program.color }}
                >
                  {program.icon}
                </Box>
                <Box 
                  className={classes.colorBar}
                  sx={{ backgroundColor: program.color }}
                />
                <Typography className={classes.programTitle}>
                  {program.title}
                </Typography>
                <Typography className={classes.programDesc}>
                  {program.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WhatSetsUsApartSection;
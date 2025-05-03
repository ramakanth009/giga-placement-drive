// src/components/common/legalpagetemplate/LegalPageTemplate.jsx
import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles({
  legalPage: {
    backgroundColor: "#f9fafc",
    minHeight: "100vh",
  },
  headerSection: {
    backgroundColor: "#2A2B6A",
    color: "white",
    padding: "100px 0 60px 0",
    position: "relative",
    overflow: "hidden",
    "@media (max-width: 1200px)": {
      padding: "90px 0 55px 0",
    },
    "@media (max-width: 960px)": {
      padding: "80px 0 50px 0",
    },
    "@media (max-width: 600px)": {
      padding: "70px 0 45px 0",
    },
    "@media (max-width: 480px)": {
      padding: "60px 0 40px 0",
    },
    "@media (max-width: 375px)": {
      padding: "50px 0 35px 0",
    },
  },
  backgroundGradient: {
    position: "absolute",
    width: "767px",
    height: "566px",
    top: "-100px",
    right: "-150px",
    background: "#BCE1FF",
    borderRadius: "50%",
    opacity: "0.15",
    filter: "blur(100px)",
    zIndex: "0",
    "@media (max-width: 1200px)": {
      width: "700px",
      height: "520px",
    },
    "@media (max-width: 960px)": {
      width: "600px",
      height: "450px",
    },
    "@media (max-width: 600px)": {
      width: "500px",
      height: "370px",
    },
    "@media (max-width: 480px)": {
      width: "400px",
      height: "300px",
    },
    "@media (max-width: 375px)": {
      width: "300px",
      height: "220px",
    },
  },
  headerContent: {
    position: "relative",
    zIndex: "1",
  },
  pageTitle: {
    fontSize: "3rem !important",
    fontWeight: "bold !important",
    marginBottom: "16px !important",
    color: "#ffffff !important",
    "& span": {
      color: "#FFC614 !important",
    },
    "@media (max-width: 1200px)": {
      fontSize: "2.8rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "2.5rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.8rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.6rem !important",
    },
  },
  pageSubtitle: {
    color: "#ffffff !important",
    fontSize: "1.2rem !important",
    maxWidth: "800px",
    fontWeight: "400 !important",
    opacity: "0.9",
    "@media (max-width: 1200px)": {
      fontSize: "1.15rem !important",
      maxWidth: "750px",
    },
    "@media (max-width: 960px)": {
      fontSize: "1.1rem !important",
      maxWidth: "700px",
    },
    "@media (max-width: 600px)": {
      fontSize: "1rem !important",
      maxWidth: "95%",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.9rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.85rem !important",
    },
  },
  contentSection: {
    padding: "40px 0 60px 0",
    backgroundColor: "white",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
    margin: "0 auto",
    borderRadius: "20px",
    transform: "translateY(-30px)",
    position: "relative",
    zIndex: "2",
    "@media (max-width: 1200px)": {
      transform: "translateY(-28px)",
    },
    "@media (max-width: 960px)": {
      transform: "translateY(-25px)",
      padding: "35px 0 55px 0",
    },
    "@media (max-width: 600px)": {
      transform: "translateY(-20px)",
      padding: "30px 0 50px 0",
      borderRadius: "15px",
    },
    "@media (max-width: 480px)": {
      transform: "translateY(-15px)",
      padding: "25px 0 45px 0",
      borderRadius: "12px",
    },
    "@media (max-width: 375px)": {
      transform: "translateY(-12px)",
      padding: "20px 0 40px 0",
      borderRadius: "10px",
    },
  },
  accordionContainer: {
    margin: "0 auto",
    maxWidth: "90%",
    "@media (max-width: 600px)": {
      maxWidth: "95%",
    },
  },
  accordion: {
    margin: "0 0 16px 0 !important",
    borderRadius: "10px !important",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1) !important",
    "&:before": {
      display: "none",
    },
    "&.Mui-expanded": {
      margin: "0 0 16px 0 !important",
    },
    "@media (max-width: 960px)": {
      margin: "0 0 14px 0 !important",
      "&.Mui-expanded": {
        margin: "0 0 14px 0 !important",
      },
    },
    "@media (max-width: 600px)": {
      margin: "0 0 12px 0 !important",
      borderRadius: "8px !important",
      "&.Mui-expanded": {
        margin: "0 0 12px 0 !important",
      },
    },
    "@media (max-width: 480px)": {
      margin: "0 0 10px 0 !important",
      "&.Mui-expanded": {
        margin: "0 0 10px 0 !important",
      },
    },
    "@media (max-width: 375px)": {
      margin: "0 0 8px 0 !important",
      borderRadius: "6px !important",
      "&.Mui-expanded": {
        margin: "0 0 8px 0 !important",
      },
    },
  },
  accordionSummary: {
    backgroundColor: "#f5f7fb",
    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
    minHeight: "64px",
    "&.Mui-expanded": {
      minHeight: "64px",
    },
    "@media (max-width: 960px)": {
      minHeight: "60px",
      "&.Mui-expanded": {
        minHeight: "60px",
      },
    },
    "@media (max-width: 600px)": {
      minHeight: "56px",
      "&.Mui-expanded": {
        minHeight: "56px",
      },
    },
    "@media (max-width: 480px)": {
      minHeight: "52px",
      "&.Mui-expanded": {
        minHeight: "52px",
      },
    },
    "@media (max-width: 375px)": {
      minHeight: "48px",
      "&.Mui-expanded": {
        minHeight: "48px",
      },
    },
  },
  accordionIcon: {
    color: "#2A2B6A",
    marginRight: "15px",
    fontSize: "24px !important",
    "@media (max-width: 960px)": {
      fontSize: "22px !important",
      marginRight: "12px",
    },
    "@media (max-width: 600px)": {
      fontSize: "20px !important",
      marginRight: "10px",
    },
    "@media (max-width: 480px)": {
      fontSize: "18px !important",
      marginRight: "8px",
    },
    "@media (max-width: 375px)": {
      fontSize: "16px !important",
      marginRight: "6px",
    },
  },
  accordionTitle: {
    fontSize: "1.2rem !important",
    fontWeight: "600 !important",
    color: "#2A2B6A !important",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 960px)": {
      fontSize: "1.15rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.1rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "1rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.9rem !important",
    },
  },
  accordionContent: {
    padding: "24px",
    "@media (max-width: 960px)": {
      padding: "22px",
    },
    "@media (max-width: 600px)": {
      padding: "20px",
    },
    "@media (max-width: 480px)": {
      padding: "18px",
    },
    "@media (max-width: 375px)": {
      padding: "16px",
    },
  },
  contentText: {
    fontSize: "1rem !important",
    color: "#4A4A4A !important",
    lineHeight: "1.7 !important",
    marginBottom: "16px !important",
    "&:last-child": {
      marginBottom: "0 !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "0.95rem !important",
      lineHeight: "1.6 !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.9rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.85rem !important",
      lineHeight: "1.5 !important",
      marginBottom: "14px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.8rem !important",
      marginBottom: "12px !important",
    },
  },
  highlight: {
    color: "#2A2B6A !important",
    fontWeight: "600 !important",
  },
  divider: {
    margin: "24px 0 !important",
    "@media (max-width: 960px)": {
      margin: "22px 0 !important",
    },
    "@media (max-width: 600px)": {
      margin: "20px 0 !important",
    },
    "@media (max-width: 480px)": {
      margin: "18px 0 !important",
    },
    "@media (max-width: 375px)": {
      margin: "16px 0 !important",
    },
  },
  lastUpdated: {
    fontStyle: "italic !important",
    color: "#6A6B6C !important",
    marginTop: "40px !important",
    textAlign: "center !important",
    "@media (max-width: 960px)": {
      marginTop: "35px !important",
      fontSize: "0.95rem !important",
    },
    "@media (max-width: 600px)": {
      marginTop: "30px !important",
      fontSize: "0.9rem !important",
    },
    "@media (max-width: 480px)": {
      marginTop: "25px !important",
      fontSize: "0.85rem !important",
    },
    "@media (max-width: 375px)": {
      marginTop: "20px !important",
      fontSize: "0.8rem !important",
    },
  },
  expandIcon: {
    color: "#2A2B6A !important",
    "@media (max-width: 480px)": {
      fontSize: "1.2rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.1rem !important",
    },
  },
  listItem: {
    margin: "8px 0 !important",
    paddingLeft: "20px !important",
    position: "relative !important",
    "&:before": {
      content: '"•"',
      position: "absolute",
      left: "0",
      color: "#2A2B6A",
      fontWeight: "bold",
    },
    "@media (max-width: 600px)": {
      margin: "6px 0 !important",
    },
    "@media (max-width: 375px)": {
      paddingLeft: "15px !important",
    },
  },
});

const LegalPageTemplate = ({ 
  pageTitle, 
  pageTitleHighlight, 
  pageSubtitle, 
  sections, 
  lastUpdatedDate 
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(sections[0]?.id || false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className={classes.legalPage}>
      {/* Header Section */}
      <Box className={classes.headerSection}>
        <Box className={classes.backgroundGradient} />
        <Container maxWidth="lg" className={classes.headerContent}>
          <Typography variant="h1" className={classes.pageTitle}>
            {pageTitle} <span>{pageTitleHighlight}</span>
          </Typography>
          <Typography variant="subtitle1" className={classes.pageSubtitle}>
            {pageSubtitle}
          </Typography>
        </Container>
      </Box>
      
      {/* Main Content Section with Accordions */}
      <Container maxWidth="lg">
        <Box className={classes.contentSection}>
          <Box className={classes.accordionContainer}>
            {sections.map((section) => (
              <Accordion 
                key={section.id}
                expanded={expanded === section.id}
                onChange={handleChange(section.id)}
                className={classes.accordion}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                  className={classes.accordionSummary}
                >
                  <Typography className={classes.accordionTitle}>
                    {section.icon}
                    {section.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionContent}>
                  {section.content}
                </AccordionDetails>
              </Accordion>
            ))}
            
            {lastUpdatedDate && (
              <Typography className={classes.lastUpdated}>
                Last Updated: {lastUpdatedDate}
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LegalPageTemplate;
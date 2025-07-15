// src/components/blog/BlogNotFound.jsx
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import PageBackground from "../common/background/PageBackground";
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";

const useStyles = makeStyles({
  pageContainer: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    isolation: "isolate",
  },
  notFoundContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 20px",
    textAlign: "center",
  },
  notFoundTitle: {
    fontSize: "2.5rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "20px !important",
  },
  notFoundText: {
    fontSize: "1.1rem !important",
    color: "#666 !important",
    marginBottom: "30px !important",
    maxWidth: "600px",
  },
  backButton: {
    backgroundColor: "#2A2B6A !important",
    color: "white !important",
    padding: "12px 30px !important",
    borderRadius: "50px !important",
    fontWeight: "600 !important",
    textTransform: "none !important",
    "&:hover": {
      backgroundColor: "#1a1b43 !important",
      transform: "translateY(-3px)",
      boxShadow: "0 5px 15px rgba(42, 43, 106, 0.3) !important",
    },
  },
});

const BlogNotFound = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.pageContainer}>
      <PageBackground />
      <Navbar />
      <Container maxWidth="lg">
        <Box className={classes.notFoundContainer}>
          <Typography variant="h1" className={classes.notFoundTitle}>
            Blog Post Not Found
          </Typography>
          <Typography variant="body1" className={classes.notFoundText}>
            The blog post you're looking for doesn't exist or has been removed.
          </Typography>
          <Button
            variant="contained"
            className={classes.backButton}
            onClick={() => navigate("/blog")}
            title="Return to blog posts list"
          >
            Back to Blog
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default BlogNotFound;

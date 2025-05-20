// src/pages/blog/BlogDetailPage.jsx
import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BlogPostDetail from '../blogdetail/BlogPostDetail';
import Navbar from '../../common/navbar/Navbar';
import Footer from '../../common/footer/Footer';
import PageBackground from '../../common/background/PageBackground';

const useStyles = makeStyles({
  pageContainer: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    isolation: "isolate",
  }
});

const BlogDetailPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.pageContainer}>
      <PageBackground />
      <Navbar />
      <BlogPostDetail />
      <Footer />
    </Box>
  );
};

export default BlogDetailPage;
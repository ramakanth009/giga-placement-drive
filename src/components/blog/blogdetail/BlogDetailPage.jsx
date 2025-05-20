// src/components/blog/blogdetail/BlogDetailPage.jsx
import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BlogPostDetail from './BlogPostDetail';
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
      <BlogPostDetail />
    </Box>
  );
};

export default BlogDetailPage;
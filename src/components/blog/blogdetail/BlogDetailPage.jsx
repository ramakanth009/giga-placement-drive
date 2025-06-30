// src/components/blog/blogdetail/BlogDetailPage.jsx
import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';
import BlogPostDetail from './BlogPostDetail';
import PageBackground from '../../common/background/PageBackground';
import { getPostById } from '../../../data/blogData';

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
  const { slug } = useParams();
  const post = getPostById(slug);

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <Box className={classes.pageContainer}>
      <PageBackground />
      <BlogPostDetail />
    </Box>
  );
};

export default BlogDetailPage;
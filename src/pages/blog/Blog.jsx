// src/pages/blog/Blog.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Paper, Divider, Chip, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import DataIcon from '@mui/icons-material/Storage';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Navbar from '../../components/common/navbar/Navbar';
import Footer from '../../components/common/footer/Footer';
import PageBackground from '../../components/common/background/PageBackground';
import { scrollToTop } from '../../utils/scrollUtils';
import BlogPostCard from '../../components/blog/BlogPostCard';
import BlogHero from '../../components/blog/BlogHero';
import { blogPosts } from '../../data/blogData';

const useStyles = makeStyles({
  pageContainer: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    isolation: "isolate",
  },
  content: {
    position: 'relative',
    zIndex: 1,
    padding: '40px 0 80px',
    '@media (max-width: 960px)': {
      padding: '30px 0 60px',
    },
    '@media (max-width: 600px)': {
      padding: '20px 0 40px',
    },
  },
  sectionTitle: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '15px !important',
    textAlign: 'center',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.2rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  sectionDescription: {
    fontSize: '1.1rem !important',
    color: '#666666 !important',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 40px !important',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '90%',
      margin: '0 auto 30px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      margin: '0 auto 25px !important',
    },
  },
  filterContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '40px',
    '@media (max-width: 960px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '25px',
    },
  },
  filterChip: {
    background: 'white !important',
    border: '1px solid #e0e0e0 !important',
    fontSize: '0.9rem !important',
    fontWeight: '500 !important',
    padding: '8px 15px !important',
    borderRadius: '50px !important',
    transition: 'all 0.3s ease !important',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05) !important',
    '&:hover': {
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1) !important',
      transform: 'translateY(-2px)',
    },
  },
  activeFilterChip: {
    background: 'linear-gradient(45deg, #2A2B6A 0%, #4A4C9B 100%) !important',
    color: 'white !important',
    boxShadow: '0 4px 10px rgba(42, 43, 106, 0.25) !important',
  },
  blogGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    '@media (max-width: 960px)': {
      gap: '25px',
    },
    '@media (max-width: 600px)': {
      gap: '20px',
    },
  },
  loadMoreButton: {
    margin: '40px auto 0 !important',
    display: 'block !important',
    padding: '10px 30px !important',
    background: 'linear-gradient(45deg, #2A2B6A 0%, #4A4C9B 100%) !important',
    color: 'white !important',
    borderRadius: '50px !important',
    fontWeight: '600 !important',
    textTransform: 'none !important',
    fontSize: '1rem !important',
    boxShadow: '0 4px 15px rgba(42, 43, 106, 0.25) !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      boxShadow: '0 6px 20px rgba(42, 43, 106, 0.35) !important',
      transform: 'translateY(-2px)',
    },
    '@media (max-width: 600px)': {
      padding: '8px 25px !important',
      fontSize: '0.9rem !important',
    },
  },
});

const Blog = () => {
  const classes = useStyles();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visiblePosts, setVisiblePosts] = useState(6);
  
  const categories = [
    { id: 'all', label: 'All Topics', icon: <BookIcon /> },
    { id: 'project-learning', label: 'Project Learning', icon: <SchoolIcon /> },
    { id: 'careers', label: 'Tech Careers', icon: <WorkIcon /> },
    { id: 'full-stack', label: 'Full Stack', icon: <CodeIcon /> },
    { id: 'data-science', label: 'Data Science', icon: <DataIcon /> },
    { id: 'internships', label: 'Internships', icon: <TrendingUpIcon /> },
  ];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.categories.includes(selectedCategory));

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisiblePosts(6); // Reset visible posts when changing category
    scrollToTop();
  };

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 3);
  };

  // Calculate if there are more posts to load
  const hasMorePosts = visiblePosts < filteredPosts.length;

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Box className={classes.pageContainer}>
      <PageBackground />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        
        <BlogHero />
        
        <Box className={classes.content}>
          <Container maxWidth="lg">
            <Typography variant="h2" className={classes.sectionTitle}>
              Insights for Your <span>Tech Journey</span>
            </Typography>
            <Typography variant="body1" className={classes.sectionDescription}>
              Explore our latest articles, guides, and insights on project-based learning, tech careers, and industry trends
            </Typography>
            
            {/* Category Filters */}
            <Box className={classes.filterContainer}>
              {categories.map((category) => (
                <Chip
                  key={category.id}
                  icon={category.icon}
                  label={category.label}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`${classes.filterChip} ${
                    selectedCategory === category.id ? classes.activeFilterChip : ''
                  }`}
                />
              ))}
            </Box>
            
            {/* Blog Posts Grid */}
            <Box className={classes.blogGrid}>
              {filteredPosts.slice(0, visiblePosts).map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </Box>
            
            {/* Load More Button */}
            {hasMorePosts && (
              <Button 
                className={classes.loadMoreButton}
                onClick={loadMorePosts}
              >
                Load More Articles
              </Button>
            )}
          </Container>
        </Box>
        
        <Footer />
      </Box>
    </Box>
  );
};

export default Blog;
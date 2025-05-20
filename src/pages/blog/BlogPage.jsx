// src/pages/blog/BlogPage.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, TextField, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import { getAllPosts } from '../../data/blogData';
import BlogCard from '../../components/blog/BlogCard';
import Navbar from '../../components/common/navbar/Navbar';
import Footer from '../../components/common/footer/Footer';
import PageBackground from '../../components/common/background/PageBackground';
import BlogHero from '../../components/blog/BlogHero';

const useStyles = makeStyles({
  pageContainer: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    isolation: "isolate",
  },
  mainContent: {
    padding: '60px 0',
    position: 'relative',
    zIndex: 1,
    '@media (max-width: 960px)': {
      padding: '40px 0',
    },
    '@media (max-width: 600px)': {
      padding: '30px 0',
    },
  },
  sectionTitle: {
    fontSize: '2.2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '40px !important',
    textAlign: 'center',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: '#FFC614',
      borderRadius: '2px',
    },
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
      marginBottom: '35px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '30px !important',
      '&::after': {
        width: '60px',
        height: '3px',
        bottom: '-10px',
      },
    },
  },
  filterContainer: {
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
      marginBottom: '30px',
    },
  },
  searchField: {
    width: '100%',
    maxWidth: '500px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '50px',
      '&:hover fieldset': {
        borderColor: '#2A2B6A',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2A2B6A',
      },
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#2A2B6A',
    },
  },
  blogsContainer: {
    marginTop: '30px',
  },
  noBlogsMessage: {
    textAlign: 'center',
    padding: '40px 0',
    color: '#666',
  },
});

const BlogPage = () => {
  const classes = useStyles();
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulate API call to get all blog posts
    const fetchBlogs = () => {
      try {
        const data = getAllPosts();
        setBlogs(data);
        setFilteredBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    // Filter blogs based on search term
    if (!searchTerm.trim()) {
      setFilteredBlogs(blogs);
      return;
    }

    const filtered = blogs.filter(blog => 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredBlogs(filtered);
  }, [searchTerm, blogs]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box className={classes.pageContainer}>
      <PageBackground />
      <Navbar />
      <BlogHero />
      
      <Container maxWidth="lg" className={classes.mainContent}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Latest Articles
        </Typography>
        
        <Box className={classes.filterContainer}>
          <TextField
            className={classes.searchField}
            placeholder="Search articles..."
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box className={classes.blogsContainer}>
          {filteredBlogs.length > 0 ? (
            <Grid container spacing={4}>
              {filteredBlogs.map((blog) => (
                <Grid item xs={12} sm={6} md={4} key={blog.id}>
                  <BlogCard post={blog} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography variant="h6" className={classes.noBlogsMessage}>
              No articles found. Try adjusting your search.
            </Typography>
          )}
        </Box>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default BlogPage;
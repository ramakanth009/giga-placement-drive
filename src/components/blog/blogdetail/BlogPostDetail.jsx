// src/components/blog/blogdetail/BlogPostDetail.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Chip, Divider, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import { getPostById } from '../../../data/blogData';

const useStyles = makeStyles({
  mainContent: {
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
  header: {
    marginBottom: '40px',
    '@media (max-width: 600px)': {
      marginBottom: '30px',
    },
  },
  breadcrumbs: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    color: '#666',
    fontSize: '0.9rem',
    '@media (max-width: 600px)': {
      marginBottom: '15px',
    },
  },
  backButton: {
    color: '#2A2B6A !important',
    marginRight: '10px !important',
    padding: '4px 10px !important',
    fontSize: '0.9rem !important',
    textTransform: 'none !important',
    '&:hover': {
      backgroundColor: 'rgba(42, 43, 106, 0.05) !important',
    },
  },
  title: {
    fontSize: '2.8rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    lineHeight: '1.3 !important',
    '@media (max-width: 960px)': {
      fontSize: '2.4rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
      marginBottom: '15px !important',
    },
  },
  metaContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '30px',
    '@media (max-width: 600px)': {
      gap: '10px',
      marginBottom: '20px',
    },
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    color: '#666',
    fontSize: '0.95rem',
    '& svg': {
      fontSize: '1.1rem',
      marginRight: '5px',
      color: '#2A2B6A',
    },
  },
  categoryChip: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    fontWeight: '500 !important',
    '& .MuiChip-label': {
      padding: '0 10px',
    },
  },
  featuredImageContainer: {
    width: '100%',
    height: '400px',
    borderRadius: '15px',
    overflow: 'hidden',
    marginBottom: '40px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 960px)': {
      height: '350px',
      marginBottom: '30px',
    },
    '@media (max-width: 600px)': {
      height: '250px',
      marginBottom: '25px',
    },
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  contentContainer: {
    fontSize: '1.1rem !important',
    lineHeight: '1.8 !important',
    color: '#333 !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
    },
    '& h2': {
      fontSize: '1.8rem',
      color: '#2A2B6A',
      marginTop: '40px',
      marginBottom: '20px',
      fontWeight: 'bold',
      '@media (max-width: 600px)': {
        fontSize: '1.5rem',
        marginTop: '30px',
        marginBottom: '15px',
      },
    },
    '& h3': {
      fontSize: '1.5rem',
      color: '#2A2B6A',
      marginTop: '30px',
      marginBottom: '15px',
      fontWeight: 'bold',
      '@media (max-width: 600px)': {
        fontSize: '1.3rem',
        marginTop: '25px',
        marginBottom: '12px',
      },
    },
    '& p': {
      marginBottom: '20px',
      '@media (max-width: 600px)': {
        marginBottom: '15px',
      },
    },
    '& ul, & ol': {
      paddingLeft: '20px',
      marginBottom: '20px',
      '@media (max-width: 600px)': {
        marginBottom: '15px',
      },
    },
    '& li': {
      marginBottom: '10px',
      '@media (max-width: 600px)': {
        marginBottom: '8px',
      },
    },
  },
  divider: {
    margin: '50px 0 !important',
    '@media (max-width: 600px)': {
      margin: '30px 0 !important',
    },
  },
  notFoundContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 20px',
    textAlign: 'center',
  },
  notFoundTitle: {
    fontSize: '2rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
  },
  notFoundText: {
    fontSize: '1.1rem !important',
    color: '#666 !important',
    marginBottom: '30px !important',
  },
  backToBlogButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '10px 25px !important',
    borderRadius: '50px !important',
    fontWeight: '600 !important',
    textTransform: 'none !important',
    '&:hover': {
      backgroundColor: '#1a1b43 !important',
    },
  },
});

const BlogPostDetail = () => {
  const classes = useStyles();
  const { slug } = useParams(); // Get the slug parameter from the URL
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch post data
    const fetchPost = () => {
      setLoading(true);
      try {
        console.log("Fetching post with slug:", slug);
        const postData = getPostById(slug);
        console.log("Post data:", postData);
        setPost(postData);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const handleBack = () => {
    navigate('/blog');
  };

  // Function to remove the featured image from the HTML content if present
  const removeFeaturedImageFromContent = (content, imageUrl) => {
    if (!content || !imageUrl) return content;
    // Regex to remove <img ...src="imageUrl"...>
    const imgRegex = new RegExp(`<img[^>]+src=["']${imageUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>`, 'i');
    return content.replace(imgRegex, '');
  };

  // Function to render HTML content
  const formatContent = (content) => {
    if (!content) return null;
    // Remove featured image if present in content
    const cleanedContent = removeFeaturedImageFromContent(content, post?.image);
    return <div dangerouslySetInnerHTML={{ __html: cleanedContent }} />;
  };

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ padding: '100px 0', textAlign: 'center' }}>
          <Typography variant="h5">Loading post...</Typography>
        </Box>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container maxWidth="lg">
        <Box className={classes.notFoundContainer}>
          <Typography variant="h3" className={classes.notFoundTitle}>
            Blog Post Not Found
          </Typography>
          <Typography variant="body1" className={classes.notFoundText}>
            The blog post you're looking for doesn't exist or has been removed.
          </Typography>
          <Button 
            variant="contained" 
            className={classes.backToBlogButton}
            onClick={handleBack}
          >
            Back to Blog
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" className={classes.mainContent}>
      <Box className={classes.header}>
        <Box className={classes.breadcrumbs}>
          <Button 
            className={classes.backButton}
            startIcon={<ArrowBackIcon />}
            onClick={handleBack}
          >
            Back to Blog
          </Button>
        </Box>

        <Typography variant="h1" className={classes.title}>
          {post.title}
        </Typography>

        <Box className={classes.metaContainer}>
          <Box className={classes.meta}>
            <CalendarTodayIcon />
            <Typography>{post.date}</Typography>
          </Box>
          <Box className={classes.meta}>
            <PersonIcon />
            <Typography>{post.author}</Typography>
          </Box>
          {post.featuredCategory && (
            <Chip label={post.featuredCategory} className={classes.categoryChip} />
          )}
        </Box>
      </Box>

      <Box className={classes.featuredImageContainer}>
        <img 
          src={post.image} 
          alt={post.imageAlt || post.title} 
          className={classes.featuredImage} 
        />
      </Box>

      <Box className={classes.contentContainer}>
        {formatContent(post.content)}
      </Box>

      <Divider className={classes.divider} />
    </Container>
  );
};

export default BlogPostDetail;
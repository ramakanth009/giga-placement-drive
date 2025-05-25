import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    borderRadius: '12px',
    margin: '40px 0',
  },
  title: {
    fontSize: '2.2rem !important',
    fontWeight: '700 !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '16px !important',
    '@media (max-width: 600px)': {
      fontSize: '1.8rem !important',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#666 !important',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 40px auto !important',
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      maxWidth: '90%',
      marginBottom: '30px !important',
    },
  },
  card: {
    borderRadius: '12px !important',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08) !important',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12) !important',
    },
  },
  mediaContainer: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  media: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  cardContent: {
    padding: '20px !important',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mentorName: {
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    color: '#333 !important',
    marginBottom: '6px !important',
  },
  mentorTitle: {
    fontSize: '0.9rem !important',
    color: '#666 !important',
    lineHeight: '1.4 !important',
  },
});

const MentorShowcase = () => {
  const classes = useStyles();

  const mentors = [
    {
      id: 1,
      name: 'Ankit Sharma',
      title: 'CTO & Co-founder, TechScale',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    },
    {
      id: 2,
      name: 'Priya Desai',
      title: 'Head of Data Science, InnovateCorp',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    },
    {
      id: 3,
      name: 'Rahul Mehta',
      title: 'Senior Engineer, GoogleCloud',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 4,
      name: 'Neha Gupta',
      title: 'Product Manager, FintechHub',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Typography variant="h2" className={classes.title}>
          Learn from Industry Experts and Startup Leaders
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Get mentored by professionals who have built and scaled successful tech ventures.
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 2,
          justifyContent: 'space-between'
        }}>
          {mentors.map((mentor) => (
            <Box key={mentor.id} sx={{ width: 'calc(25% - 16px)' }}>
              <Card sx={{ height: '100%' }}>
                <Box sx={{ 
                  pt: '100%', 
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <CardMedia
                    component="img"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    image={mentor.image}
                    alt={`Mentor ${mentor.name}`}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {mentor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {mentor.title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MentorShowcase;
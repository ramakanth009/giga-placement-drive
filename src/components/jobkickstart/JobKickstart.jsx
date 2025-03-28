// src/components/jobkickstart/JobKickstart.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Jobkick from '../../assets/jobkick.png'

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    overflow: 'hidden',
  },
  contentContainer: {
    display: 'flex',
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '450px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid #fff',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  contentBox: {
    padding: '20px 0 20px 40px',
  },
  sectionTitle: {
    fontSize: '2.2rem !important',
    fontWeight: 'bold !important',
    marginBottom: '30px !important',
    color: '#2A2B6A !important',
    lineHeight: '1.3 !important',
  },
  featureList: {
    marginBottom: '30px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  checkIcon: {
    color: '#FFC614 !important',
    marginRight: '15px',
    fontSize: '24px !important',
  },
  featureText: {
    color: '#4A4A4A !important',
    fontSize: '1.1rem !important',
    fontWeight: '500 !important',
  },
  ctaText: {
    fontWeight: 'bold !important',
    fontSize: '1.4rem !important',
    color: '#2A2B6A !important',
    marginTop: '10px !important',
  },
  imageFrame: {
    // border: '1px solid #2A2B6A',
    borderRadius: '4px',
    padding: '10px',
    position: 'relative',
  },
  blueBorder: {
    position: 'absolute',
    right: '-15px',
    top: '-15px',
    bottom: '15px',
    width: '4px',
    backgroundColor: '#2A2B6A',
  },
  horizontalBlueBorder: {
    position: 'absolute',
    right: '-15px',
    top: '-15px',
    left: '30px',
    height: '4px',
    backgroundColor: '#2A2B6A',
  }
});

const JobKickstart = () => {
  const classes = useStyles();

  // Feature items from the image
  const features = [
    'Learn in-demand skills that employers seek',
    'Build portfolio projects that prove your expertise',
    'Connect with 100+ hiring partners',
    'Get hired with packages starting from 3 LPA-15 LPA'
  ];

  return (
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Grid container className={classes.contentContainer}>
          {/* Left side - Image */}
          <Grid item xs={12} md={5}>
            <Box className={classes.imageFrame}>
              <Box className={classes.blueBorder} />
              <Box className={classes.horizontalBlueBorder} />
              <Box className={classes.imageWrapper}>
                <img 
                  src={Jobkick} 
                  alt="Students collaborating on a project" 
                  className={classes.image}
                />
              </Box>
            </Box>
          </Grid>

          {/* Right side - Content */}
          <Grid item xs={6} md={7}>
            <Box className={classes.contentBox}>
              {/* Title */}
              <Typography variant="h3" className={classes.sectionTitle}>
                Why Struggle With Traditional Job Hunting When You Can
              </Typography>

              {/* Feature list */}
              <Box className={classes.featureList}>
                {features.map((feature, index) => (
                  <Box key={index} className={classes.featureItem}>
                    <CheckCircleIcon className={classes.checkIcon} />
                    <Typography className={classes.featureText}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* CTA */}
              <Typography variant="h5" className={classes.ctaText}>
                KickStart Your Job In 30 Days
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default JobKickstart;
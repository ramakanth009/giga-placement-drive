// src/components/contactcomponents/mapsection/MapSection.jsx
import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  mapSection: {
    height: '500px',
    width: '100%',
    marginTop: '50px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '1280px',
    margin: '0 auto',
    "@media (max-width: 1200px)": {
      height: '450px',
      marginTop: '45px',
    },
    "@media (max-width: 960px)": {
      height: '400px',
      marginTop: '40px',
    },
    "@media (max-width: 600px)": {
      height: '350px',
      marginTop: '30px',
      borderRadius: '10px',
    },
    "@media (max-width: 480px)": {
      height: '300px',
      marginTop: '25px',
      borderRadius: '8px',
    },
    "@media (max-width: 375px)": {
      height: '250px',
      marginTop: '20px',
      borderRadius: '6px',
    },
  },
  mapContainer: {
    height: '100%',
    width: '100%',
  },
});

const MapSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mapSection}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.309174296064!2d78.3854539!3d17.4449101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e182b67081%3A0x5a8c3fca53ad932b!2sDwaraka%20Pride%20-The%20Headquarters%20Coworking%20Space%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1743279092017!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="See our location in Madhapur, Hyderabad"
      ></iframe>
    </Box>
  );
};

export default MapSection;
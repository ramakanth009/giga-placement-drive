import React, { useState } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HeroSection from '../../../common/fulltime/herosection/HeroSection';
import dataScienceImage from '../../../../assets/datascience-hero-img.png';
import CentralizedPopupForms from '../../../common/popupforms/CentralizedPopupForms';

const useStyles = makeStyles({
  decorX: {
    position: 'absolute',
    right: '-30px',
    bottom: '100px',
    color: '#FFC614',
    fontSize: '30px',
    fontWeight: 'bold',
    transform: 'rotate(15deg)',
    '@media (max-width: 600px)': {
      fontSize: '20px',
      right: '-10px',
    }
  }
});

const DataScienceHero = () => {
  const classes = useStyles();
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupVariant, setPopupVariant] = useState('datascience');

  // Define decorative elements
  const decorElements = [
    
  ];

  const handleApplyClick = () => {
    setPopupVariant('datascience');
    setPopupOpen(true);
  };

  const handleBrochureClick = () => {
    setPopupVariant('demo');
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <HeroSection
        titleFirstLine="Comprehensive"
        highlightedText="Data Science Program"
        subtitle="Build Your Own Product and Launch Your Tech Startup Within a Year"
        heroImage={dataScienceImage}
        heroImageAlt="Showcasing Data Analysis, Python, Code, and analytics for Data Science Program"
        applyButtonText="Apply Now"
        brochureButtonText="Book A Demo"
        applyButtonTitle="Submit your details to apply for the Data Science Program"
        brochureButtonTitle="Schedule a demo to explore our Data Science curriculum and structure"
        onApplyClick={handleApplyClick}
        onBrochureClick={handleBrochureClick}
        decorElements={decorElements}
      />
      <CentralizedPopupForms
        open={popupOpen}
        onClose={handlePopupClose}
        variant={popupVariant}
      />
    </>
  );
};

export default DataScienceHero;
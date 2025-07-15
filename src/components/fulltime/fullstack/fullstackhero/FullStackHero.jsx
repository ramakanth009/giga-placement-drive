// src/components/fulltime/fullstack/hero/FullStackHero.jsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HeroSection from '../../../common/fulltime/herosection/HeroSection';
import fullStackHeroImage from '../../../../assets/datascience-hero-img.png';
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

const FullStackHero = () => {
  const classes = useStyles();
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupVariant, setPopupVariant] = useState('fullstack');

  const decorElements = [
    // Add decorative elements here if needed
  ];

  const handleApplyClick = () => {
    setPopupVariant('fullstack');
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
        highlightedText="Full Stack Development Program"
        subtitle="Build Your Own Product and Launch Your Tech Startup Within a Year"
        heroImage={fullStackHeroImage}
        heroImageAlt="Showcasing Frontend and Backend Code and analytics and Dashboards"
        applyButtonText="Apply Now"
        brochureButtonText="Book A Demo"
        applyButtonTitle="Submit your details to apply for the Full Stack Development Program"
        brochureButtonTitle="Book a live demo to understand the Full Stack curriculum and offerings"
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
 
export default FullStackHero;
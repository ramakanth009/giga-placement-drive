// src/components/fulltime/fullstack/hero/FullStackHero.jsx
import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HeroSection from '../../../common/fulltime/herosection/HeroSection';
import fullStackHeroImage from '../../../../assets/datascience-hero-img.png';

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

  const decorElements = [
    // Add decorative elements here if needed
  ];

  const handleApplyClick = () => {
    // Logic for apply button click
    console.log("Apply Now button clicked");
  };

  const handleBrochureClick = () => {
    // Logic for Book A Demo button click
    console.log("Book A Demo button clicked");
  };

  return (
    <HeroSection
      titleFirstLine="Comprehensive"
      highlightedText="Full Stack Development Program"
      subtitle="Build Your Own Product and Launch Your Tech Startup Within a Year"
      heroImage={fullStackHeroImage}
      onApplyClick={handleApplyClick}
      onBrochureClick={handleBrochureClick}
      decorElements={decorElements}
    />
  );
};

export default FullStackHero;
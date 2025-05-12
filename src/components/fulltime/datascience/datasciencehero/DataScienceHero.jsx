import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HeroSection from '../../../common/fulltime/herosection/HeroSection';
import dataScienceImage from '../../../../assets/datascience-hero-img.png';

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

  // Define decorative elements
  const decorElements = [
    
  ];

  const handleApplyClick = () => {
    // Logic for apply button click
    console.log("Apply Now button clicked");
  };

  const handleBrochureClick = () => {
    // Logic for download brochure button click
    console.log("Download brochure button clicked");
  };

  return (
    <HeroSection
      titleFirstLine="Comprehensive"
      highlightedText="Data Science Program"
      subtitle="Uncover Patterns, Drive Insights. Shape the future with data."
      heroImage={dataScienceImage}
      onApplyClick={handleApplyClick}
      onBrochureClick={handleBrochureClick}
      decorElements={decorElements}
    />
  );
};

export default DataScienceHero;
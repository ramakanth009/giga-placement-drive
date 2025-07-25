import React from 'react';
import HeroSection from '../../common/herosection/HeroSection';
import fullstackHeroImage from '../../../assets/fullstackhero.png';
import fullstackhero2 from "../../../assets/Virtual_palcement_drive_header-data-science.png";

const Hero = () => {
  // Define features
  const features = [
    "Code with AI\n400+ Job Opportunities",
    "30-Day Expert Training",
    "₹_ _ 9 Limited Offer"
  ];

  return (
    <HeroSection
      domain="Data Science"
      highlightText="Data Science"
      subtitle="India's Premier Virtual Hiring & Learning Experience"
      features={features}
      heroImage={fullstackhero2}
      backgroundImage={fullstackHeroImage}
      displayAsBlock={true}
    />
  );
};

export default Hero;
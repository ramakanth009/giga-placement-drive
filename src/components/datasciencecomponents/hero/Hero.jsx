import React from 'react';
import HeroSection from '../../common/herosection/HeroSection';
import fullstackHeroImage from '../../../assets/fullstackhero.png';
import fullstackhero2 from "../../../assets/Rectangle-8699.png";

const Hero = () => {
  // Define features
  const features = [
    "Code with AI\n400+ Job Opportunities",
    "30-Day Expert Training",
    "₹199 Limited Offer"
  ];

  return (
    <HeroSection
      domain="Data Science"
      highlightText="Data Science"
      subtitle="India's Premier Virtual Hiring & Learning Experience"
      features={features}
      // heroImage={fullstackhero2}
      backgroundImage={fullstackHeroImage}
      displayAsBlock={true}
    />
  );
};

export default Hero;
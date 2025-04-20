import React from 'react';
import HeroSection from '../../common/herosection/HeroSection';
import fullstackHeroImage from '../../../assets/fullstackhero.png';
import fullstackhero from "../../../assets/polite-friendly-brunette-businesswoman-posing-studio.png";

const Hero = () => {
  // Define features
  const features = [
    "Code with AI\n400+ Job Opportunities",
    "30-Day Expert Training",
    "₹199 Limited Offer"
  ];

  return (
    <HeroSection
      domain="Full Stack Development"
      highlightText="Full Stack Development"
      subtitle="India's Premier Virtual Hiring & Learning Experience"
      features={features}
      heroImage={fullstackhero}
      backgroundImage={fullstackHeroImage}
      displayAsBlock={true}
    />
  );
};

export default Hero;
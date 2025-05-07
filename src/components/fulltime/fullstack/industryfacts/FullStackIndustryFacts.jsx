// src/components/fullstackcomponents/industryfacts/FullStackIndustryFacts.jsx
import React from 'react';
import IndustryBackedFacts from '../../../common/fulltime/industryfacts/IndustryBackedFacts';

const FullStackIndustryFacts = () => {
  // Define Full Stack specific facts
  const fullStackFacts = [
    {
      text: "Jobs are expected to grow by 17% by 2033, driven by cloud adoption and digital transformation.",
      source: "LinkedIn Economic Graph, 2024"
    },
    {
      text: "Full Stack Development Mid-level salaries lie between 8–18 LPA, reflecting high demand for versatile developers.",
      source: "Glassdoor India Salary Report, 2024"
    }
  ];

  return (
    <IndustryBackedFacts
      titleBlue="Industry-Backed Facts"
      titleYellow="That Define the Future of Full Stack Development"
      facts={fullStackFacts}
    />
  );
};

export default FullStackIndustryFacts;
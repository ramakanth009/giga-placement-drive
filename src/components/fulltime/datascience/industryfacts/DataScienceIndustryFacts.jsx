// src/components/datasciencecomponents/industryfacts/DataScienceIndustryFacts.jsx
import React from 'react';
import IndustryBackedFacts from '../../../common/industryfacts/IndustryBackedFacts';

const DataScienceIndustryFacts = () => {
  // Define Data Science specific facts
  const dataScienceFacts = [
    {
      text: "Over 140,000 active data science job openings were listed on Foundit.in as of April 2025 — with LinkedIn reporting even higher demand across India which can reach upto 2,26,000 Active job openings.",
      source: "Linkedin, foundit"
    },
    {
      text: "Data science and AI roles are projected to grow by 41.9% through 2031, outpacing most professions.",
      source: "Northeastern University"
    }
  ];

  return (
    <IndustryBackedFacts
      titleBlue="Industry-Backed Facts"
      titleYellow="That Define the Future of Data Science"
      facts={dataScienceFacts}
    />
  );
};

export default DataScienceIndustryFacts;
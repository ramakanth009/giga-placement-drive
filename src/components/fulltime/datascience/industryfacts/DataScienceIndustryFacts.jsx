// src/components/datasciencecomponents/industryfacts/DataScienceIndustryFacts.jsx
import React from 'react';
import IndustryBackedFacts from '../../../common/fulltime/industryfacts/IndustryBackedFacts';

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
    },
    {
      text: "70% of companies use data analytics to drive decisions. Data skills are now core to business strategy across industries.",
      source: "NewVantage Partners, 2024"
    },
    {
      text: "94% of enterprises say data is critical for growth. Data science drives digital transformation and business success.",
      source: "IDC, 2024"
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
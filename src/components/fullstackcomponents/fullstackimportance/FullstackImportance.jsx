import React from 'react';
import ImportanceSection from '../../common/importancesection/ImportanceSection';

const FullStackImportance = () => {
  // Data for fullstack advantages
  const advantages = [
    {
      id: 1,
      title: 'Solve End-to-End Solutions',
      description: 'Create complete web applications from concept to deployment',
    },
    {
      id: 2,
      title: 'Reduce Development Overhead',
      description: 'Minimize communication gaps between different development teams',
    },
    {
      id: 3,
      title: 'Accelerate Product Development',
      description: 'Deliver integrated solutions faster and more efficiently',
    },
    {
      id: 4,
      title: 'Drive Innovation',
      description: 'Build applications with cutting-edge technological capabilities',
    },
  ];

  return (
    <ImportanceSection
      mainTitle="Why Full Stack Development"
      highlightText="Is Important To Learn ?"
      subtitle="In Today's Competitive Tech Market, Full-Stack Developers Are Not Just Programmers – They Are Strategic Problem Solvers Who Bridge Multiple Technological Domains. Companies Are Actively Seeking Versatile Developers Who Can:"
      advantages={advantages}
      colorTheme="fullstack"
      bgGradient="linear-gradient(to bottom, #f0f6ff, #ffffff)"
    />
  );
};

export default FullStackImportance;
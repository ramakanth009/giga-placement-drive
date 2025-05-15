// src/components/fulltime/fullstack/technologykit/FullStackTechnologyKit.jsx
import React from 'react';
import TechnologyKit from '../../../common/fulltime/technologykit/TechnologyKit';

const FullStackTechnologyKit = () => {
  const categories = [
    {
      title: 'Programming Languages', 
      skills: [
        { initials: 'JS', name: 'JavaScript' },
        { initials: 'TS', name: 'TypeScript' },
        { initials: 'PY', name: 'Python' },
        { initials: 'JV', name: 'Java' },
      ]
    },
    {
      title: 'Libraries & Frameworks',
      skills: [
        { initials: 'RE', name: 'React' },
        { initials: 'NG', name: 'Angular' },
        { initials: 'ND', name: 'Node.js' },
        { initials: 'SP', name: 'Spring Boot' },
        { initials: 'EX', name: 'Express' },
      ]
    },
    {
      title: 'Data Visualization',
      skills: [
        { initials: 'D3', name: 'D3.js' },
        { initials: 'CH', name: 'Chart.js' },
        { initials: 'RC', name: 'Recharts' },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { initials: 'MG', name: 'MongoDB' },
        { initials: 'PG', name: 'PostgreSQL' },
        { initials: 'MS', name: 'MySQL' },
        { initials: 'RD', name: 'Redis' },
      ]
    },
    {
      title: 'Cloud Solutions',
      skills: [
        { initials: 'AW', name: 'AWS' },
        { initials: 'AZ', name: 'Azure' },
        { initials: 'GC', name: 'Google Cloud' },
        { initials: 'HK', name: 'Heroku' },
      ]
    },
    {
      title: 'DevOps Tools',
      skills: [
        { initials: 'DK', name: 'Docker' },
        { initials: 'KB', name: 'Kubernetes' },
        { initials: 'JK', name: 'Jenkins' },
        { initials: 'GH', name: 'GitHub Actions' },
      ]
    }
  ];

  return (
    <TechnologyKit 
      programName="Full Stack Program"
      categories={categories}
      title="Your Technology Kit for"
      subtitle="Master modern tools and technologies used in professional full-stack development."
    />
  );
};

export default FullStackTechnologyKit;
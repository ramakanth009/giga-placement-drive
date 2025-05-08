// src/components/fulltime/datascience/technologykit/DataScienceTechnologyKit.jsx
import React from 'react';
import TechnologyKit from '../../../common/fulltime/technologykit/TechnologyKit';

const DataScienceTechnologyKit = () => {
  const categories = [
    {
      title: 'Programming Languages',
      skills: [
        { initials: 'PY', name: 'Python' },
        { initials: 'R', name: 'R' },
        { initials: 'SQ', name: 'SQL' },
      ]
    },
    {
      title: 'Libraries & Frameworks',
      skills: [
        { initials: 'PD', name: 'Pandas' },
        { initials: 'NP', name: 'NumPy' },
        { initials: 'SK', name: 'Scikit-learn' },
        { initials: 'TF', name: 'TensorFlow' },
        { initials: 'PT', name: 'PyTorch' },
      ]
    },
    {
      title: 'Data Visualization',
      skills: [
        { initials: 'TB', name: 'Tableau' },
        { initials: 'MP', name: 'Matplotlib' },
        { initials: 'PB', name: 'Power BI' },
        { initials: 'SB', name: 'Seaborn' },
      ]
    },
    {
      title: 'Big Data Technologies',
      skills: [
        { initials: 'HD', name: 'Hadoop' },
        { initials: 'SP', name: 'Spark' },
        { initials: 'KA', name: 'Kafka' },
      ]
    },
    {
      title: 'Cloud Solutions',
      skills: [
        { initials: 'SM', name: 'AWS SageMaker' },
        { initials: 'GC', name: 'Google Cloud AI' },
      ]
    },
    {
      title: 'Database Technologies',
      skills: [
        { initials: 'MG', name: 'MongoDB' },
        { initials: 'PG', name: 'PostgreSQL' },
        { initials: 'RD', name: 'Redis' },
      ]
    }
  ];

  return (
    <TechnologyKit 
      programName="Data Science Program"
      categories={categories}
    />
  );
};

export default DataScienceTechnologyKit;
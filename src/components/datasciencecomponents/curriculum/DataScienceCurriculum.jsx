// src/components/datasciencecomponents/curriculum/DataScienceCurriculum.jsx
import React from 'react';
import Curriculum from '../../common/curriculum/Curriculum';

const DataScienceCurriculum = () => {
  // Define weeks data
  const weeks = [
    'Week 1: Foundation Building',
    'Week 2: Data Exploration & Storytelling',
    'Week 3: Machine Learning & AI Tools',
    'Week 4: Portfolio Building & Job Preparation'
  ];

  // Define skills for each week
  const skills = [
    // Week 1 skills
    [
      'Master Python Fundamentals For Data Manipulation',
      'Learn SQL For Database Queries And Analysis',
      'Begin Data Cleaning And Preprocessing Techniques',
      'Develop Professional Communication Skills'
    ],
    // Week 2 skills
    [
      'Exploratory Data Analysis & Visualization',
      'Statistical Analysis & Hypothesis Testing',
      'Data Storytelling & Business Intelligence',
      'Dashboard Creation with Tableau & Power BI'
    ],
    // Week 3 skills
    [
      'Machine Learning Algorithms & Applications',
      'Feature Engineering & Model Selection',
      'Neural Networks & Deep Learning Basics',
      'Natural Language Processing Fundamentals'
    ],
    // Week 4 skills
    [
      'End-to-End Data Science Project Implementation',
      'Model Deployment & Monitoring',
      'Portfolio Development & GitHub Organization',
      'Data Science Interview Preparation & Case Studies'
    ]
  ];

  return (
    <Curriculum 
      title={<>Our 30-Day Journey <span>To Job Readiness</span></>}
      weeks={weeks}
      skills={skills}
    />
  );
};

export default DataScienceCurriculum;
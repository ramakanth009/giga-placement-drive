// src/components/fullstackcomponents/curriculum/FullStackCurriculum.jsx
import React from 'react';
import Curriculum from '../../common/curriculum/Curriculum';

const FullStackCurriculum = () => {
  // Define weeks data
  const weeks = [
    'Week 1: Foundation Building',
    'Week 2: Frontend Mastery',
    'Week 3: Backend & Database Technologies',
    'Week 4: Full Stack Integration & Deployment'
  ];

  // Define skills for each week
  const skills = [
    // Week 1 skills
    [
      'Master HTML5, CSS3, And Responsive Design Principles',
      'Learn JavaScript Fundamentals And ES6+ Features',
      'Introduction To Version Control With Git',
      'Develop Professional Communication Skills'
    ],
    // Week 2 skills
    [
      'Advanced CSS Frameworks & UI Libraries',
      'Master React.js & Component Architecture',
      'State Management & API Integration',
      'Responsive Design & Mobile-First Approach'
    ],
    // Week 3 skills
    [
      'Node.js & Express.js Backend Development',
      'RESTful API Design & Implementation',
      'Database Design with MongoDB & SQL',
      'Authentication & Authorization Security'
    ],
    // Week 4 skills
    [
      'Full Stack Project Integration',
      'Deployment & DevOps Fundamentals',
      'Performance Optimization Techniques',
      'Portfolio Building & Technical Interview Prep'
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

export default FullStackCurriculum;
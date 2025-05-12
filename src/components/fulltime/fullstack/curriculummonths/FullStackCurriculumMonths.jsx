// src/components/fulltime/fullstack/curriculummonths/FullStackCurriculumMonths.jsx
import React from 'react';
import CurriculumMonths from '../../../common/fulltime/curriculummonths/CurriculumMonths';

const FullStackCurriculumMonths = () => {
  const months = [
    "Python Basics",
    "Advanced Python",
    "SQL Fundamentals",
    "Mathematics & EDA",
    "Basic ML Algorithms",
    "Advanced ML",
    "Deep Learning & NLP"
  ];

  return (
    <CurriculumMonths
      title="Build Real-World Products with an"
      highlightedText="Industry-Aligned Curriculum"
      subtitle="Master the skills that top employers demand through our comprehensive, career-focused curriculum designed by industry experts and academic leaders."
      months={months}
    />
  );
};

export default FullStackCurriculumMonths;
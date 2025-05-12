// src/components/fulltime/fullstack/skillsmaster/FullStackSkillsMaster.jsx
import React from 'react';
import SkillsMaster from '../../../common/fulltime/skillsmaster/SkillsMaster';
import studentImage from '../../../../assets/student-with-books1.png';

const FullStackSkillsMaster = () => {
  const skills = [
    "Python Programming",
    "SQL & Databases",
    "Deep Learning & NLR",
    "Mathematics",
    "Machine Learning"
  ];

  return (
    <SkillsMaster
      programName="Full Stack"
      image={studentImage}
      skills={skills}
    />
  );
};

export default FullStackSkillsMaster;
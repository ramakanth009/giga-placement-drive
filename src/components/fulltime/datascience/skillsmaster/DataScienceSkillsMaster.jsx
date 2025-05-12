// src/components/fulltime/datascience/skillsmaster/DataScienceSkillsMaster.jsx
import React from 'react';
import SkillsMaster from '../../../common/fulltime/skillsmaster/SkillsMaster';
import studentImage from '../../../../assets/student-with-books2.png';

const DataScienceSkillsMaster = () => {
  const skills = [
    "Python Programming",
    "SQL & Databases",
    "Deep Learning & NLR",
    "Mathematics",
    "Machine Learning"
  ];

  return (
    <SkillsMaster
      programName="Data Science"
      image={studentImage}
      skills={skills}
    />
  );
};

export default DataScienceSkillsMaster;
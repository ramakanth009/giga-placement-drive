// src/components/datasciencecomponents/programfee/DataScienceProgramFee.jsx
import React from 'react';
import ProgramFee from '../../../common/fulltime/programfee/ProgramFee';

const DataScienceProgramFee = () => {
  // Handle enroll button click
  const handleEnrollClick = () => {
    // Implementation for enrollment process
    console.log('Enrolling in Data Science program');
    // This could navigate to a registration page or open a modal
  };

  return (
    <ProgramFee
      programName="Data Science"
      monthlyFee="7,084"
      maxMonths="24 months"
      scholarshipText="Apply for financial assistance based on merit and need"
      supportText="Free seats for physically challenged individuals, subject to eligibility."
      onEnrollClick={handleEnrollClick}
    />
  );
};

export default DataScienceProgramFee;
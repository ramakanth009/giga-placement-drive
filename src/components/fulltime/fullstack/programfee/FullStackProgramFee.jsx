// src/components/fulltime/fullstack/programfee/FullStackProgramFee.jsx
import React from 'react';
import ProgramFeeNew from '../../../common/fulltime/programfee/ProgramFee';

const FullStackProgramFee = () => {
  const handleApplyClick = () => {
    // Implementation for enrollment process
    console.log('Enrolling in Full Stack program');
    // This could navigate to a registration page or open a modal
  };

  return (
    <ProgramFeeNew
      programName="Full Stack Development"
      monthlyFee="7,084"
      totalFee="84,999"
      onApplyClick={handleApplyClick}
    />
  );
};

export default FullStackProgramFee;
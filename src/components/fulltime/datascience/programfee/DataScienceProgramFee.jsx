// src/components/fulltime/datascience/programfee/DataScienceProgramFee.jsx
import React from 'react';
import ProgramFeeNew from '../../../common/fulltime/programfee/ProgramFee';

const DataScienceProgramFee = () => {
  const handleApplyClick = () => {
    // Implementation for enrollment process
    console.log('Enrolling in Data Science program');
    // This could navigate to a registration page or open a modal
  };

  return (
    <ProgramFeeNew
      programName="Data Science"
      monthlyFee="7,084"
      totalFee="84,999"
      onApplyClick={handleApplyClick}
    />
  );
};

export default DataScienceProgramFee;
// src/components/datasciencecomponents/certificationsection/DataScienceCertificationsSection.jsx
import React from 'react';
import CertificationsSection from '../../common/certificationssection/CertificationsSection';
import CertificateDataScience from '../../../assets/certificatedatascience.jpg';

const DataScienceCertificationsSection = () => {
  return (
    <CertificationsSection 
      certificateImage={CertificateDataScience}
      fieldType="Data Science"
    />
  );
};

export default DataScienceCertificationsSection;
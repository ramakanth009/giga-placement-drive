// src/components/datasciencecomponents/certificationsection/DataScienceCertificationsSection.jsx
import React from 'react';
import FulltimeCertificates from '../../common/fulltime/fulltimeCertificates/FulltimeCertificates';
import CertificateDataScience from '../../../assets/certificatedatascience.jpg'; // If the file is named CertificateDataScience.jpg, use: // import CertificateDataScience from '../../../assets/CertificateDataScience.jpg';

const DataScienceCertificationsSection = () => {
  return (
    <FulltimeCertificates 
      certificateImage={CertificateDataScience}
      certificateAltText="Data Science Certificate showcasing comprehensive industry-recognized credentials that validate professional expertise in data analysis, machine learning algorithms, statistical modeling, Python and R programming, artificial intelligence, predictive analytics, data visualization, business intelligence solutions, and advanced analytics techniques, designed to enhance career opportunities in data science roles and demonstrate technical competency to employers in analytics-driven industries"
    />
  );
};

export default DataScienceCertificationsSection;
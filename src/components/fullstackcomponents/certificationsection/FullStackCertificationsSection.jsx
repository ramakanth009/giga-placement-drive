// src/components/fullstackcomponents/certificationsection/FullStackCertificationsSection.jsx
import React from 'react';
import FulltimeCertificates from '../../common/fulltime/fulltimeCertificates/FulltimeCertificates';
import CertificateFullStack from '../../../assets/certificatefullstack.png'; // If the file is named CertificateFullStack.png, use: // import CertificateFullStack from '../../../assets/CertificateFullStack.png';

const FullStackCertificationsSection = () => {
  return (
    <FulltimeCertificates 
      certificateImage={CertificateFullStack}
      certificateAltText="Full Stack Development Certificate showcasing comprehensive industry-recognized credentials that validate professional expertise in frontend technologies like React and Angular, backend development with Node.js and Python, database management, API development, cloud deployment, and modern web application architecture, designed to enhance career opportunities in software engineering and demonstrate technical competency to employers in the tech industry"
    />
  );
};

export default FullStackCertificationsSection;
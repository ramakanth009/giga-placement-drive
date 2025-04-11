// src/components/fullstackcomponents/certificationsection/FullStackCertificationsSection.jsx
import React from 'react';
import CertificationsSection from '../../common/certificationssection/CertificationsSection';
import CertificateFullStack from '../../../assets/certificatefullstack.png';

const FullStackCertificationsSection = () => {
  return (
    <CertificationsSection 
      certificateImage={CertificateFullStack}
      fieldType="Full Stack Development"
    />
  );
};

export default FullStackCertificationsSection;
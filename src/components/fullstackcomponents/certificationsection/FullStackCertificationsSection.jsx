// src/components/fullstackcomponents/certificationsection/FullStackCertificationsSection.jsx
import React from 'react';
import FulltimeCertificates from '../../common/fulltime/fulltimeCertificates/FulltimeCertificates';
import CertificateFullStack from '../../../assets/certificatefullstack.png'; // If the file is named CertificateFullStack.png, use: // import CertificateFullStack from '../../../assets/CertificateFullStack.png';

const FullStackCertificationsSection = () => {
  return (
    <FulltimeCertificates 
      certificateImage={CertificateFullStack}
      certificateAltText="Certificate representing Completion of the full-stack development program from Gigaversity"
    />
  );
};

export default FullStackCertificationsSection;
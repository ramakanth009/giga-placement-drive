// src/components/fullstackcomponents/certificationsection/FullStackCertificationsSection.jsx
import React from 'react';
import FulltimeCertificates from '../../../common/fulltime/fulltimeCertificates/FulltimeCertificates';
import CertificateFullStack from '../../../../assets/certificatedatascience.jpg'; // If the file is named CertificateFullStack.png, use: // import CertificateFullStack from '../../../assets/CertificateFullStack.png';

const DatascienceFulltimeCertifications = () => {
  return (
    <FulltimeCertificates 
      certificateImage={CertificateFullStack}
      certificateAltText="Certificate representing Completion of the data science program from Gigaversity"
    />
  );
};

export default DatascienceFulltimeCertifications;
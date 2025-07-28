// src/components/datasciencecomponents/certificationsection/DataScienceCertificationsSection.jsx
import React from 'react';
import FulltimeCertificates from '../../common/fulltime/fulltimeCertificates/FulltimeCertificates';
import CertificateDataScience from '../../../assets/certificatedatasciencevp.jpg'; // If the file is named CertificateDataScience.jpg, use: // import CertificateDataScience from '../../../assets/CertificateDataScience.jpg';

const DataScienceCertificationsSection = () => {
  return (
    <FulltimeCertificates 
      certificateImage={CertificateDataScience}
      certificateAltText="Certificate representing Completion of theData Science program from Gigaversity"
    />
  );
};

export default DataScienceCertificationsSection;
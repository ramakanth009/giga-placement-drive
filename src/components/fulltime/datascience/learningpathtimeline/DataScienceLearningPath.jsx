import React from 'react';
import LearningPathTimeline from '../../../common/fulltime/learningpath/LearningPathTimeline';
import dataScienceTimelineData from './DataScienceTimelineData';

const DataScienceLearningPath = () => {
  return (
    <LearningPathTimeline 
      title={dataScienceTimelineData.title}
      subtitle={dataScienceTimelineData.subtitle}
      phases={dataScienceTimelineData.phases}
      placementStats={dataScienceTimelineData.placementStats}
      curriculumType="datascience"
      popupVariant="datascience"
      applyButtonTitle="Register your interest in the Data Science Program and get started"
      curriculumButtonTitle="Download the full Data Science curriculum in PDF format"
    />
  );
};

export default DataScienceLearningPath;
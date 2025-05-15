// src/components/fulltime/datascience/learningpathtimeline/DataScienceLearningPath.jsx
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
    />
  );
};

export default DataScienceLearningPath;
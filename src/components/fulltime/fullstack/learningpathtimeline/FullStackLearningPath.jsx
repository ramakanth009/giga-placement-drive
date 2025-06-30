// // src/components/fulltime/fullstack/learningpathtimeline/FullStackLearningPath.jsx
// import React from 'react';
// import LearningPathTimeline from '../../../common/fulltime/learningpath/LearningPathTimeline';
// import fullStackTimelineData from './FullStackTimelineData';

// const FullStackLearningPath = () => {
//   return (
//     <LearningPathTimeline 
//       title={fullStackTimelineData.title}
//       subtitle={fullStackTimelineData.subtitle}
//       phases={fullStackTimelineData.phases}
//       placementStats={fullStackTimelineData.placementStats}
//     />
//   );
// };

// export default FullStackLearningPath;
// src/components/fulltime/fullstack/learningpathtimeline/FullStackLearningPath.jsx
import React from 'react';
import LearningPathTimeline from '../../../common/fulltime/learningpath/LearningPathTimeline';
import fullStackTimelineData from './FullStackTimelineData';

const FullStackLearningPath = () => {
  return (
    <LearningPathTimeline 
      title={fullStackTimelineData.title}
      subtitle={fullStackTimelineData.subtitle}
      phases={fullStackTimelineData.phases}
      placementStats={fullStackTimelineData.placementStats}
      curriculumType="fullstack"
      popupVariant="fullstack"
    />
  );
};

export default FullStackLearningPath;
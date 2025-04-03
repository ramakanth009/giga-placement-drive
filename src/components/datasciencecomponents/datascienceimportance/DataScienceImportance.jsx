import React from 'react';
import ImportanceSection from '../../common/importancesection/ImportanceSection';

const DataScienceImportance = () => {
  // Data for data science advantages
  const advantages = [
    {
      id: 1,
      title: 'Extract Actionable Insights',
      description: 'Transform complex data into meaningful business intelligence',
    },
    {
      id: 2,
      title: 'Drive Data-Based Decisions',
      description: 'Empower organizations to make strategic choices backed by evidence',
    },
    {
      id: 3,
      title: 'Automate Predictive Analysis',
      description: 'Build models that forecast trends and anticipate market changes',
    },
    {
      id: 4,
      title: 'Solve Complex Problems',
      description: 'Apply advanced algorithms to tackle challenging business scenarios',
    },
  ];

  return (
    <ImportanceSection
      mainTitle="Why Data Science"
      highlightText="Is Essential Today ?"
      subtitle="In A World Driven By Big Data, Data Scientists Are The Key Interpreters Who Transform Information Into Strategic Value. Organizations Across Industries Are Seeking Skilled Professionals Who Can:"
      advantages={advantages}
      colorTheme="datascience"
      bgGradient="linear-gradient(to bottom, #f4f1ff, #ffffff)"
    />
  );
};

export default DataScienceImportance;
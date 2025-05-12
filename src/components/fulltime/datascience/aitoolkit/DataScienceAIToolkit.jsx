// src/components/fulltime/datascience/aitoolkit/DataScienceAIToolkit.jsx
import React from 'react';
import AIToolkit from '../../../common/fulltime/aitoolkit/AIToolkit';

const DataScienceAIToolkit = () => {
  // Tool data for Data Science
  const tools = [
    {
      id: 'gemini',
      name: 'Gemini Premium',
      isPaid: true,
      price: '$30/year (Included)',
      iconHtml: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>`,
      iconColor: '#8B5CF6',
      color: '#8B5CF6',
      description: "Google's most advanced AI system with premium features for data analysis, coding, and research.",
      useCases: [
        'Multi-modal data analysis',
        'Advanced code generation',
        'Custom visualization creation',
        'Statistical model explanation'
      ],
      capabilities: [
        { name: 'Code Generation', value: 95 },
        { name: 'Data Analysis', value: 90 },
        { name: 'Visualization', value: 85 },
        { name: 'Explanation', value: 80 },
        { name: 'Research', value: 75 }
      ]
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      isPaid: false,
      iconHtml: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>`,
      iconColor: '#10B981',
      color: '#10B981',
      description: 'Versatile assistant for ideation, coding support, and data interpretation.',
      useCases: [
        'Rapid prototyping',
        'Debug assistance',
        'Data preprocessing scripts',
        'Learning concepts'
      ],
      capabilities: [
        { name: 'Code Generation', value: 85 },
        { name: 'Data Analysis', value: 75 },
        { name: 'Visualization', value: 70 },
        { name: 'Explanation', value: 80 },
        { name: 'Research', value: 65 }
      ]
    },
    {
      id: 'llama',
      name: 'Llama',
      isPaid: false,
      iconHtml: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5V5a2 2 0 0 0 2 2h1.5a2.5 2.5 0 0 1 0 5H15a2 2 0 0 0-2 2v1.5a2.5 2.5 0 0 1-5 0V14a2 2 0 0 0-2-2h-1.5a2.5 2.5 0 0 1 0-5H6a2 2 0 0 0 2-2v-.5A2.5 2.5 0 0 1 9.5 2z"></path>
                </svg>`,
      iconColor: '#D97706',
      color: '#D97706',
      description: 'Open-source machine learning model excellent for specialized ML applications.',
      useCases: [
        'Custom model training',
        'Specialized NLP tasks',
        'Machine learning pipelines',
        'Algorithm optimization'
      ],
      capabilities: [
        { name: 'Code Generation', value: 70 },
        { name: 'Data Analysis', value: 65 },
        { name: 'Visualization', value: 60 },
        { name: 'Explanation', value: 75 },
        { name: 'Research', value: 70 }
      ]
    },
    {
      id: 'perplexity',
      name: 'Perplexity',
      isPaid: false,
      iconHtml: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>`,
      iconColor: '#EF4444',
      color: '#EF4444',
      description: 'Research-focused AI that excels at information synthesis and retrieval.',
      useCases: [
        'Literature reviews',
        'Market analysis',
        'Latest research findings',
        'Data source discovery'
      ],
      capabilities: [
        { name: 'Code Generation', value: 60 },
        { name: 'Data Analysis', value: 70 },
        { name: 'Visualization', value: 65 },
        { name: 'Explanation', value: 75 },
        { name: 'Research', value: 95 }
      ]
    }
  ];
  
  return (
    <AIToolkit
      tools={tools}
      programName="Data Science"
    />
  );
};

export default DataScienceAIToolkit;
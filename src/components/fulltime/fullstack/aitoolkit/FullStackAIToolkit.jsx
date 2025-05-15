// src/components/fulltime/fullstack/aitoolkit/FullStackAIToolkit.jsx
import React from 'react';
import AIToolkit from '../../../common/fulltime/aitoolkit/AIToolkit';

const FullStackAIToolkit = () => {
  // Tool data for Full Stack
  const tools = [
    {
      id: 'github-copilot',
      name: 'GitHub Copilot',
      isPaid: false,
      price: '$10/month (Included)',
      iconHtml: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 22l5-10 5 10"></path>
                  <path d="M8 22l5-10 5 10"></path>
                  <path d="M2 22l5-10 5 10"></path>
                  <path d="M18.6 11a9 9 0 1 0-17.2 0"></path>
                </svg>`,
      iconColor: '#0EA5E9',
      color: '#0EA5E9',
      description: "AI pair programmer that helps write code faster with smart autocompletions and full function suggestions.",
      useCases: [
        'Real-time code completion',
        'Automated function generation',
        'Code refactoring suggestions',
        'Framework-specific assistance'
      ],
      capabilities: [
        { name: 'Code Generation', value: 95 },
        { name: 'Problem Solving', value: 85 },
        { name: 'Documentation', value: 70 },
        { name: 'Testing', value: 80 },
        { name: 'Debugging', value: 75 }
      ]
    },
    {
      id: 'claude',
      name: 'Claude AI',
      isPaid: false,
      iconHtml: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>`,
      iconColor: '#8B5CF6',
      color: '#8B5CF6',
      description: 'Advanced AI assistant for complex code explanation, system design, and architectural guidance.',
      useCases: [
        'System architecture planning',
        'Complex algorithm explanation',
        'Code reviews and suggestions',
        'Technical documentation creation'
      ],
      capabilities: [
        { name: 'Code Generation', value: 80 },
        { name: 'Problem Solving', value: 90 },
        { name: 'Documentation', value: 95 },
        { name: 'Testing', value: 75 },
        { name: 'Debugging', value: 85 }
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
      description: 'Versatile AI assistant for code generation, problem solving, and learning new frameworks.',
      useCases: [
        'Rapid prototyping',
        'API documentation lookup',
        'Learning new frameworks',
        'Troubleshooting errors'
      ],
      capabilities: [
        { name: 'Code Generation', value: 85 },
        { name: 'Problem Solving', value: 85 },
        { name: 'Documentation', value: 80 },
        { name: 'Testing', value: 75 },
        { name: 'Debugging', value: 80 }
      ]
    },
    {
      id: 'tabnine',
      name: 'Tabnine',
      isPaid: false,
      iconHtml: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>`,
      iconColor: '#EC4899',
      color: '#EC4899',
      description: 'Context-aware AI coding assistant that delivers personalized code completions.',
      useCases: [
        'Faster code writing',
        'Language-specific completions',
        'Codebase-aware suggestions',
        'Inline documentation'
      ],
      capabilities: [
        { name: 'Code Generation', value: 90 },
        { name: 'Problem Solving', value: 75 },
        { name: 'Documentation', value: 70 },
        { name: 'Testing', value: 65 },
        { name: 'Debugging', value: 75 }
      ]
    }
  ];

  return (
    <AIToolkit
      tools={tools}
      programName="Full Stack Development"
    />
  );
};

export default FullStackAIToolkit;
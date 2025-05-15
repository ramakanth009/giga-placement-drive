// src/components/datasciencecomponents/projectssection/DataScienceProjectsSection.jsx
import React from 'react';
import ProjectsSection from '../../../common/fulltime/projectssection/ProjectsSection';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SchoolIcon from '@mui/icons-material/School';
import CallIcon from '@mui/icons-material/Call';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MicIcon from '@mui/icons-material/Mic';
import AdjustIcon from '@mui/icons-material/Adjust';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';
// import DescriptionIcon from '@mui/icons-material/Description';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import PublicIcon from '@mui/icons-material/Public';
// import BuildIcon from '@mui/icons-material/Build';
// import ScienceIcon from '@mui/icons-material/Science';
// import WorkIcon from '@mui/icons-material/Work';

// Import sample images for projects
import aiChatbotImage from '../../../../assets/ai-chatbot.png';
import quizMasterImage from '../../../../assets/quiz-master.png';
import callAuditorImage from '../../../../assets/call-auditor.png';
import atsToolsImage from '../../../../assets/ats-tools.png';
import additionalProjectImage from '../../../../assets/additional-project.png';

const DataScienceProjectsSection = () => {
  const subtitle = "Build your portfolio with real-world data science applications. Each project is designed to develop industry-relevant skills and solve practical problems.";
  const title = (
    <>
      Products You’ll Build in the <span>Data Science Program</span>
    </>
  );

  // Project data for Data Science program
  const projects = [
    {
      title: "Multi-Model AI Chatbot",
      image: aiChatbotImage,
      icon: {
        component: <ChatBubbleIcon />,
        bgColor: "#6B4BF3"
      },
      features: [
        { icon: <TextSnippetIcon />, text: "NLP" },
        { icon: <CameraAltIcon />, text: "Computer Vision" },
        { icon: <MicIcon />, text: "Speech Recognition" }
      ],
      description: "Build chatbots that go beyond words! Create intelligent assistants that understand and process multiple types of input simultaneously.",
      skills: ["Multi-modal AI", "User Interaction", "Computer Vision", "Speech Processing"]
    },
    {
      title: "AI Quiz Master",
      image: quizMasterImage,
      icon: {
        component: <SchoolIcon />,
        bgColor: "#6B4BF3"
      },
      features: [
        { icon: <AdjustIcon />, text: "Adaptive Learning" },
        { icon: <PeopleIcon />, text: "Personalization" },
        { icon: <SportsEsportsIcon />, text: "Gamification" }
      ],
      description: "Turn learning into a game! Develop interactive, personalized quiz systems that adapt to user performance and provide instant feedback.",
      skills: ["ML for Education", "Adaptive Algorithms", "UI Design", "Educational Analytics"]
    },
    {
      title: "Advanced Call Auditor",
      image: callAuditorImage,
      icon: {
        component: <CallIcon />,
        bgColor: "#6B4BF3"
      },
      features: [
        { icon: <MicIcon />, text: "Speech Analysis" },
        { icon: <SentimentSatisfiedAltIcon />, text: "Sentiment Analysis" },
        { icon: <AssessmentIcon />, text: "Performance Metrics" }
      ],
      description: "Revolutionize call analysis! Build intelligent systems that evaluate conversations with speaker diarization, sentiment analysis, and performance scoring.",
      skills: ["Audio Processing", "NLP", "Business Analytics", "Customer Service AI"]
    },
  ];

  return <ProjectsSection projects={projects} subtitle={subtitle} title={title} />;
};

export default DataScienceProjectsSection;
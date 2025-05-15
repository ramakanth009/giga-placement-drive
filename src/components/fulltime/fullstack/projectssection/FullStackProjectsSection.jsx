// src/components/fullstackcomponents/projectssection/FullStackProjectsSection.jsx
import React from 'react';
import ProjectsSection from '../../../common/fulltime/projectssection/ProjectsSection';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory'; 
import InsertChartIcon from '@mui/icons-material/InsertChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import UpdateIcon from '@mui/icons-material/Update';
import LockIcon from '@mui/icons-material/Lock';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import socialMediaImage from '../../../../assets/social-media-dashboard.png';
import taskManagementImage from '../../../../assets/task-management.png';
import inventoryManagementImage from '../../../../assets/inventory-management.png';
// import PaymentIcon from '@mui/icons-material/Payment';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import ecommerceImage from '../../../../assets/ecommerce.png';
// import additionalProjectImage from '../../../../assets/additional-project.png';

const FullStackProjectsSection = () => {
  const subtitle = "Build your portfolio with real-world full stack applications. Each project is designed to develop industry-relevant skills and solve practical business problems.";
  
  // Project data for Full Stack program
  const projects = [
    {
      title: "Social Media Dashboard",
      image: socialMediaImage,
      icon: {
        component: <ViewModuleIcon />,
        bgColor: "#6B4BF3"
      },
      features: [
        {
          icon: <InsertChartIcon />,
          text: "Analytics"
        },
        {
          icon: <BarChartIcon />,
          text: "Data Visualization"
        },
        {
          icon: <UpdateIcon />,
          text: "Real-time Updates"
        }
      ],
      description: "Create impactful Social Media Insights! Build a dynamic Social Media Dashboard that helps track key metrics and analyze performance across multiple platforms.",
      skills: ["React/Vue", "Component Design", "State Management", "API Integration"]
    },
    {
      title: "Task Management System",
      image: taskManagementImage,
      icon: {
        component: <AssignmentIcon />,
        bgColor: "#6B4BF3"
      },
      features: [
        {
          icon: <LockIcon />,
          text: "Authentication"
        },
        {
          icon: <ViewModuleIcon />,
          text: "Task Organization"
        },
        {
          icon: <PersonIcon />,
          text: "User Management"
        }
      ],
      description: "Boost Productivity with Seamless Task Management! Develop a system that allows users to categorize tasks, set due dates, and implement secure authentication.",
      skills: ["JWT Authentication", "State Management", "Node.js/Express", "MongoDB"]
    },
    {
      title: "Inventory Management System",
      image: inventoryManagementImage,
      icon: {
        component: <InventoryIcon />,
        bgColor: "#6B4BF3"
      },
      features: [
        {
          icon: <StorageIcon />,
          text: "Database Design"
        },
        {
          icon: <CodeIcon />,
          text: "RESTful APIs"
        },
        {
          icon: <CodeIcon />,
          text: "Backend Development"
        }
      ],
      description: "Streamline Inventory Management! Build a backend system that tracks products, suppliers, and stock levels with Spring Boot and robust database integration.",
      skills: ["Spring Boot", "JPA/Hibernate", "SQL", "RESTful APIs"]
    }
  ];

  return <ProjectsSection projects={projects} subtitle={subtitle} />;
};

export default FullStackProjectsSection;
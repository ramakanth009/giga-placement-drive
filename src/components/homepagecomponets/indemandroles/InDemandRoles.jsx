// src/components/homepagecomponets/indemandroles/InDemandRoles.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CodeIcon from '@mui/icons-material/Code';
import DataIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import BarChartIcon from '@mui/icons-material/BarChart';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import LayersIcon from '@mui/icons-material/Layers';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import DataObjectIcon from '@mui/icons-material/DataObject';
import MemoryIcon from '@mui/icons-material/Memory';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SchoolIcon from '@mui/icons-material/School';

const useStyles = makeStyles({
  section: {
    padding: '50px 50px',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1A1B4A 100%)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    "@media (max-width: 1200px)": {
      padding: '50px 40px',
    },
    "@media (max-width: 960px)": {
      padding: '50px 30px',
    },
    "@media (max-width: 600px)": {
      padding: '40px 20px',
    },
    "@media (max-width: 480px)": {
      padding: '30px 15px',
    },
    "@media (max-width: 375px)": {
      padding: '25px 10px',
    },
  },
  backgroundGlow: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    filter: 'blur(150px)',
    opacity: 0.15,
    zIndex: 0,
    "@media (max-width: 960px)": {
      width: '500px',
      height: '500px',
    },
    "@media (max-width: 600px)": {
      width: '400px',
      height: '400px',
    },
  },
  bottomLeftGlow: {
    background: '#4376eb',
    bottom: '-300px',
    left: '-200px',
    "@media (max-width: 600px)": {
      bottom: '-250px',
      left: '-150px',
    },
  },
  topRightGlow: {
    background: '#7039e5',
    top: '-200px',
    right: '-200px',
    "@media (max-width: 600px)": {
      top: '-150px',
      right: '-150px',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '40px',
    "@media (max-width: 1200px)": {
      marginBottom: '35px',
    },
    "@media (max-width: 960px)": {
      marginBottom: '30px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '25px',
    },
    "@media (max-width: 480px)": {
      marginBottom: '20px',
    },
  },
  mainTitle: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginBottom: '16px !important',
    position: 'relative',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      background: 'linear-gradient(90deg, rgba(255,198,20,0.7) 0%, #FFC614 50%, rgba(255,198,20,0.7) 100%)',
      borderRadius: '2px',
    },
    '& span': {
      color: '#FFC614 !important',
      position: 'relative',
    },
    "@media (max-width: 1200px)": {
      fontSize: '2.3rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.1rem !important',
      '&:after': {
        bottom: '-12px',
      },
    },
    "@media (max-width: 600px)": {
      fontSize: '1.8rem !important',
      '&:after': {
        width: '50px',
        bottom: '-10px',
      },
    },
    "@media (max-width: 480px)": {
      fontSize: '1.6rem !important',
      marginBottom: '12px !important',
      '&:after': {
        width: '40px',
        bottom: '-8px',
        height: '2px',
      },
    },
    "@media (max-width: 375px)": {
      fontSize: '1.4rem !important',
    },
  },
  subtitle: {
    fontSize: '1.5rem !important',
    fontWeight: '500 !important',
    color: 'rgba(255, 255, 255, 0.9) !important',
    marginTop: '20px !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.4rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.3rem !important',
      marginTop: '18px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.1rem !important',
      marginTop: '15px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1rem !important',
      marginTop: '12px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.9rem !important',
    },
  },
  categoriesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
    margin: '10px 0 10px',
    "@media (max-width: 1200px)": {
      gap: '45px',
    },
    "@media (max-width: 960px)": {
      gap: '40px',
    },
    "@media (max-width: 600px)": {
      gap: '35px',
      margin: '8px 0 8px',
    },
    "@media (max-width: 480px)": {
      gap: '30px',
    },
    "@media (max-width: 375px)": {
      gap: '25px',
    },
  },
  categoryHeader: {
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    borderRadius: '16px',
    padding: '18px 25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '25px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    borderLeft: '5px solid #FFC614',
    transition: 'all 0.3s ease',
    "&:before": {
      content: '""',
      position: 'absolute',
      right: '0',
      top: '0',
      width: '40%',
      height: '100%',
      background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 100%)',
    },
    "&:after": {
      content: '""',
      position: 'absolute',
      top: '-100%',
      left: '-100%',
      width: '100%',
      height: '300%',
      background: 'linear-gradient(60deg, rgba(255,255,255,0.1) 5%, rgba(255,255,255,0) 50%)',
      transform: 'rotate(20deg)',
      pointerEvents: 'none',
    },
    "&:hover": {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transform: 'translateY(-3px)',
    },
    "@media (max-width: 1200px)": {
      padding: '16px 22px',
    },
    "@media (max-width: 960px)": {
      padding: '15px 20px',
      marginBottom: '22px',
    },
    "@media (max-width: 600px)": {
      padding: '14px 18px',
      marginBottom: '20px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '12px',
    },
    "@media (max-width: 480px)": {
      padding: '12px 16px',
      marginBottom: '18px',
    },
    "@media (max-width: 375px)": {
      padding: '10px 14px',
    },
  },
  categoryTitleGroup: {
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
  },
  categoryTitle: {
    fontSize: '1.25rem !important',
    fontWeight: 'bold !important',
    color: 'white !important',
    marginLeft: '15px !important',
    zIndex: 1,
    "@media (max-width: 1200px)": {
      fontSize: '1.2rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1.15rem !important',
      marginLeft: '12px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.1rem !important',
      marginLeft: '10px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1rem !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.95rem !important',
      marginLeft: '8px !important',
    },
  },
  categoryIcon: {
    color: '#FFC614',
    fontSize: '26px !important',
    zIndex: 1,
    filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.2))',
    "@media (max-width: 1200px)": {
      fontSize: '25px !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '24px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '22px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '20px !important',
    },
  },
  categoryRightContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    "@media (max-width: 1200px)": {
      gap: '12px',
    },
    "@media (max-width: 960px)": {
      gap: '10px',
    },
    "@media (max-width: 600px)": {
      width: '100%',
      justifyContent: 'space-between',
    },
    "@media (max-width: 480px)": {
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
  },
  statChip: {
    borderRadius: '20px !important',
    fontSize: '0.85rem !important',
    fontWeight: '500 !important',
    padding: '2px 8px !important',
    height: '28px !important',
    zIndex: '1 !important',
    "@media (max-width: 1200px)": {
      fontSize: '0.83rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '0.8rem !important',
      height: '26px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.78rem !important',
      height: '24px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.75rem !important',
      height: '22px !important',
    },
    "@media (max-width: 375px)": {
      fontSize: '0.7rem !important',
      padding: '2px 6px !important',
    },
  },
  demandChip: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    '& .MuiChip-icon': {
      color: '#2A2B6A !important',
    },
  },
  growthChip: {
    backgroundColor: '#4cd964 !important',
    color: '#333 !important',
    '& .MuiChip-icon': {
      color: '#333 !important',
    },
  },
  verifiedChip: {
    backgroundColor: '#00a0fc !important',
    color: 'white !important',
    '@media (max-width: 480px)': {
      display: 'none !important',
    },
  },
  rolesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '15px',
    width: '100%',
    "@media (max-width: 1200px)": {
      gap: '12px',
    },
    "@media (max-width: 1100px)": {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '12px',
    },
    "@media (max-width: 768px)": {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '12px',
    },
    "@media (max-width: 480px)": {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '10px',
    },
  },
  roleCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&:hover': {
      backgroundColor: '#ffffff',
      transform: 'translateY(-8px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
      borderColor: 'rgba(255, 198, 20, 0.3)',
      '&:before': {
        opacity: 1,
      },
      '& $roleIcon': {
        transform: 'scale(1.1)',
        color: '#2A2B6A',
      },
      '& $roleText': {
        color: '#2A2B6A !important',
      },
      '& $detailText': {
        color: '#2A2B6A !important',
      },
      '& $skillChip': {
        backgroundColor: 'rgba(42, 43, 106, 0.1) !important',
        color: '#2A2B6A !important',
      },
      "$detailIcon": {
        color: '#2A2B6A',
      },
    },
    "@media (max-width: 1200px)": {
      padding: '14px',
    },
    "@media (max-width: 960px)": {
      padding: '13px',
    },
    "@media (max-width: 600px)": {
      padding: '12px',
      minHeight: 'auto',
    },
    "@media (max-width: 480px)": {
      padding: '12px 15px',
    },
  },
  roleHeaderContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    "@media (max-width: 480px)": {
      marginBottom: '10px',
    },
  },
  roleIcon: {
    color: 'rgba(255, 198, 20, 0.8)',
    fontSize: '24px !important',
    marginRight: '12px',
    transition: 'all 0.3s ease',
    filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.2))',
    "@media (max-width: 1200px)": {
      fontSize: '23px !important',
      marginRight: '11px',
    },
    "@media (max-width: 960px)": {
      fontSize: '22px !important',
      marginRight: '10px',
    },
    "@media (max-width: 600px)": {
      fontSize: '21px !important',
      marginRight: '10px',
    },
    "@media (max-width: 480px)": {
      fontSize: '20px !important',
      marginRight: '10px',
    },
  },
  roleText: {
    color: '#ffffff',
    fontWeight: '700 !important',
    fontSize: '1.05rem !important',
    transition: 'color 0.3s ease !important',
    "@media (max-width: 1200px)": {
      fontSize: '1.03rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '1rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.98rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.95rem !important',
    },
  },
  roleDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '5px',
    "@media (max-width: 480px)": {
      gap: '10px',
    },
  },
  detailRow: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      color:"#2A2B6A"
    }
  },
  detailIcon: {
    color: 'rgba(255, 198, 20, 0.9)',
    marginRight: '8px',
    fontSize: '18px !important',
    "@media (max-width: 1200px)": {
      fontSize: '17px !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '16px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '16px !important',
      marginRight: '7px',
    },
    "$roleCard:hover &": {
      color: '#2A2B6A',
    },
  },
  detailText: {
    color: 'rgba(255, 255, 255, 0.9) !important',
    fontSize: '0.9rem !important',
    fontWeight: 'bold !important',
    transition: 'color 0.3s ease !important',
    "@media (max-width: 1200px)": {
      fontSize: '0.88rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '0.86rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.85rem !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '0.83rem !important',
    },
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5px',
    marginTop: '8px',
  },
  skillChip: {
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
    color: 'white !important',
    fontSize: '0.7rem !important',
    height: '22px !important',
    margin: '2px !important',
    transition: 'background-color 0.3s ease, color 0.3s ease !important',
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '50px',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 1200px)": {
      marginTop: '45px',
    },
    "@media (max-width: 960px)": {
      marginTop: '40px',
    },
    "@media (max-width: 768px)": {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
      marginTop: '35px',
    },
    "@media (max-width: 600px)": {
      marginTop: '30px',
    },
    "@media (max-width: 480px)": {
      marginTop: '25px',
    },
  },
  button: {
    padding: '12px 24px !important',
    borderRadius: '8px !important',
    fontWeight: 'bold !important',
    fontSize: '1rem !important',
    textTransform: 'none !important',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15) !important',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    "&:before": {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
      zIndex: -1,
    },
    "@media (max-width: 1200px)": {
      padding: '11px 22px !important',
      fontSize: '0.95rem !important',
    },
    "@media (max-width: 960px)": {
      padding: '10px 20px !important',
      fontSize: '0.93rem !important',
    },
    "@media (max-width: 600px)": {
      padding: '10px 18px !important',
      fontSize: '0.9rem !important',
      width: '80%',
      maxWidth: '300px',
    },
    "@media (max-width: 480px)": {
      padding: '9px 16px !important',
      fontSize: '0.88rem !important',
    },
    "@media (max-width: 375px)": {
      padding: '8px 14px !important',
      fontSize: '0.85rem !important',
    },
  },
  checkButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    border: 'none !important',
    '&:hover': {
      backgroundColor: '#FFD647 !important',
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2) !important',
    },
  },
  decorativeDot: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '50%',
    "@media (max-width: 600px)": {
      width: '6px',
      height: '6px',
    },
  },
  hiddenMd: {
    "@media (max-width: 768px)": {
      display: 'none',
    },
  },
  hiddenSm: {
    "@media (max-width: 480px)": {
      display: 'none',
    },
  },
  categoryContainer: {
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  },
  visibleCategory: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const InDemandRoles = () => {
  const classes = useStyles();
  const [visibleCategories, setVisibleCategories] = useState([]);

  // Animation effect for categories
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            if (!isNaN(index) && !visibleCategories.includes(index)) {
              setTimeout(() => {
                setVisibleCategories(prev => [...prev, index]);
              }, index * 300);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    const elements = document.querySelectorAll('[data-category]');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, [visibleCategories]);

  // Categories and their roles with additional metadata
  const categories = [
    {
      id: 'fullstack',
      title: "Full Stack Development Roles",
      icon: <CodeIcon className={classes.categoryIcon} />,
      demandLevel: "High Demand",
      growthRate: "+13% (by 2030)",
      verified: true,
      roles: [
        { 
          id: 'uiux', 
          title: 'UI/UX Developer', 
          icon: <ComputerIcon className={classes.roleIcon} />,
          salary: "₹4-12 LPA",
          experience: "0-2 years",
          skills: ["HTML/CSS", "JavaScript", "Figma", "Adobe XD", "UI Design", "User Research"],
          description: "Design and build user interfaces that provide exceptional user experiences while maintaining consistency with brand guidelines."
        },
        { 
          id: 'frontend', 
          title: 'Frontend Developer', 
          icon: <CodeIcon className={classes.roleIcon} />,
          salary: "₹5-14 LPA",
          experience: "0-3 years",
          skills: ["React.js", "JavaScript", "HTML/CSS", "Redux", "TypeScript", "Responsive Design"],
          description: "Implement responsive web designs and interactions using modern JavaScript frameworks and libraries."
        },
        { 
          id: 'backend', 
          title: 'Backend Engineer', 
          icon: <StorageIcon className={classes.roleIcon} />,
          salary: "₹6-16 LPA",
          experience: "1-3 years",
          skills: ["Node.js", "Express", "MongoDB", "SQL", "REST APIs", "Authentication"],
          description: "Build scalable server-side logic, integrate with databases, and develop APIs that power web applications."
        },
        { 
          id: 'mern', 
          title: 'MERN Stack', 
          icon: <DeveloperModeIcon className={classes.roleIcon} />,
          salary: "₹7-18 LPA",
          experience: "1-3 years",
          skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "RESTful APIs"],
          description: "Specialized full stack developer who uses MongoDB, Express, React, and Node.js to build complete web applications."
        },
        { 
          id: 'fullstack', 
          title: 'Full Stack Developer', 
          icon: <LayersIcon className={classes.roleIcon} />,
          salary: "₹8-20 LPA",
          experience: "2-4 years",
          skills: ["JavaScript", "React.js", "Node.js", "Databases", "DevOps", "System Design"],
          description: "Versatile developer capable of working on both client-side and server-side, handling all aspects of web development."
        }
      ]
    },
    {
      id: 'datascience',
      title: "Data Science Roles",
      icon: <DataIcon className={classes.categoryIcon} />,
      demandLevel: "Very High Demand",
      growthRate: "+36% (by 2030)",
      verified: true,
      roles: [
        { 
          id: 'dataanalyst', 
          title: 'Data Analyst', 
          icon: <BarChartIcon className={classes.roleIcon} />,
          salary: "₹5-12 LPA",
          experience: "0-2 years",
          skills: ["SQL", "Excel", "Python", "Power BI", "Tableau", "Data Visualization"],
          description: "Transform raw data into actionable insights through analysis, visualization, and reporting to support business decisions."
        },
        { 
          id: 'datascientist', 
          title: 'Data Scientist', 
          icon: <DataObjectIcon className={classes.roleIcon} />,
          salary: "₹8-22 LPA",
          experience: "1-4 years",
          skills: ["Python", "R", "Statistics", "Machine Learning", "Data Mining", "SQL"],
          description: "Apply statistical models and machine learning algorithms to analyze complex data sets and extract meaningful patterns."
        },
        { 
          id: 'mleng', 
          title: 'ML Engineer', 
          icon: <MemoryIcon className={classes.roleIcon} />,
          salary: "₹10-25 LPA",
          experience: "2-4 years",
          skills: ["TensorFlow", "PyTorch", "Python", "Deep Learning", "MLOps", "Model Deployment"],
          description: "Design and implement machine learning models at scale, focusing on production deployment and performance optimization."
        },
        { 
          id: 'dataeng', 
          title: 'Data Engineer', 
          icon: <StorageIcon className={classes.roleIcon} />,
          salary: "₹7-20 LPA",
          experience: "1-3 years",
          skills: ["SQL", "Python", "ETL", "Data Warehousing", "Apache Spark", "Cloud Platforms"],
          description: "Build and maintain data pipelines, architectures, and infrastructure to support data science and analytics functions."
        },
        { 
          id: 'aispecialist', 
          title: 'AI Specialist', 
          icon: <BubbleChartIcon className={classes.roleIcon} />,
          salary: "₹12-30 LPA",
          experience: "2-5 years",
          skills: ["NLP", "Computer Vision", "Deep Learning", "Neural Networks", "Python", "Research"],
          description: "Develop cutting-edge artificial intelligence solutions focused on specific domains like NLP, computer vision, or recommendation systems."
        }
      ]
    }
  ];

  // Create decorative dots positions
  const decorativeDots = [
    { top: '15%', left: '7%' },
    { top: '25%', left: '12%' },
    { top: '35%', left: '5%' },
    { top: '75%', left: '9%' },
    { top: '80%', left: '15%' },
    { top: '20%', right: '8%' },
    { top: '30%', right: '15%' },
    { top: '65%', right: '10%' },
    { top: '85%', right: '12%' },
  ];

  return (
    <Box className={classes.section}>
      {/* Background glows */}
      <Box className={`${classes.backgroundGlow} ${classes.bottomLeftGlow}`} />
      <Box className={`${classes.backgroundGlow} ${classes.topRightGlow}`} />
      
      {/* Decorative dots */}
      {decorativeDots.map((dot, index) => (
        <Box 
          key={`dot-${index}`}
          className={`${classes.decorativeDot} ${index % 2 === 0 ? classes.hiddenMd : ''} ${index % 3 === 0 ? classes.hiddenSm : ''}`}
          sx={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            animation: `pulse ${(2 + Math.random() * 2)}s infinite alternate`,
            '@keyframes pulse': {
              '0%': { opacity: 0.3, transform: 'scale(1)' },
              '100%': { opacity: 0.8, transform: 'scale(1.5)' }
            }
          }}
        />
      ))}

      {/* Title Section */}
      <Box className={classes.titleContainer}>
        <Typography variant="h2" className={classes.mainTitle}>
          Explore In-Demand <span>Full Stack</span> and <span>Data Science</span> Jobs 
        </Typography>
        <Typography variant="h4" className={classes.subtitle}>
          New Opportunities Added Every Week
        </Typography>
      </Box>

      {/* Categories and Roles */}
      <Box className={classes.categoriesContainer}>
        {categories.map((category, categoryIndex) => (
          <Box 
            key={categoryIndex} 
            className={`${classes.categoryContainer} ${visibleCategories.includes(categoryIndex) ? classes.visibleCategory : ''}`}
            data-category
            data-index={categoryIndex}
            sx={{ transitionDelay: `${categoryIndex * 0.2}s` }}
          >
            <Box className={classes.categoryHeader}>
              <Box className={classes.categoryTitleGroup}>
                {category.icon}
                <Typography className={classes.categoryTitle} variant='h3'>
                  {category.title}
                </Typography>
              </Box>
              
              <Box className={classes.categoryRightContent}>
                <Chip 
                  icon={<WorkIcon />}
                  label={category.demandLevel}
                  className={`${classes.statChip} ${classes.demandChip}`}
                  size="small"
                />
                <Chip 
                  icon={<TrendingUpIcon />}
                  label={category.growthRate}
                  className={`${classes.statChip} ${classes.growthChip}`}
                  size="small"
                />
                {category.verified && (
                  <Chip 
                    icon={<VerifiedIcon />}
                    label="Verified Sources"
                    className={`${classes.statChip} ${classes.verifiedChip}`}
                    size="small"
                  />
                )}
              </Box>
            </Box>
            
            <Box className={classes.rolesGrid}>
              {category.roles.map((role, roleIndex) => (
                <Box 
                  key={roleIndex} 
                  className={classes.roleCard}
                >
                  {/* Role Title with Icon */}
                  <Box className={classes.roleHeaderContainer}>
                    {role.icon}
                    <Typography className={classes.roleText}>
                      {role.title}
                    </Typography>
                  </Box>
                  
                  {/* Salary Detail */}
                  <Box className={classes.detailRow}>
                    <CurrencyRupeeIcon className={classes.detailIcon} />
                    <Typography className={classes.detailText}>
                      Avg Salary: {role.salary}
                    </Typography>
                  </Box>
                  
                  {/* Experience Detail */}
                  <Box className={classes.detailRow}>
                    <SchoolIcon className={classes.detailIcon} />
                    <Typography className={classes.detailText}>
                      Experience: {role.experience}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Action Buttons */}
      <Box className={classes.actionsContainer}>
        <Button 
          variant="contained" 
          className={`${classes.button} ${classes.checkButton}`}
        >
          View All Career Opportunities
        </Button>
        <Button 
          variant="outlined" 
          className={classes.button}
          sx={{
            borderColor: 'rgba(255, 255, 255, 0.5)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.8)',
              transform: 'translateY(-5px)',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2) !important',
            }
          }}
        >
          Get Personalized Career Guidance
        </Button>
      </Box>
    </Box>
  );
};

export default InDemandRoles;
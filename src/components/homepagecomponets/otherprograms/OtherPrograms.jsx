import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  Card, 
  CardMedia, 
  Chip, 
  Tabs,
  Tab,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LaunchIcon from '@mui/icons-material/Launch';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import WorkIcon from '@mui/icons-material/Work';
import EnhancedEngagementSection from './EnhancedEngagementSection';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const useStyles = makeStyles({
  section: {
    padding: '10px 0', // Reduced from 20px
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #101138 0%, #1e1c44 100%)',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 
        'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      backgroundSize: '30px 30px',
      zIndex: 1,
    },
    "@media (max-width: 1200px)": {
      padding: '50px 0',
      '&:before': {
        backgroundSize: '25px 25px',
      },
    },
    "@media (max-width: 960px)": {
      padding: '60px 0',
      '&:before': {
        backgroundSize: '20px 20px',
      },
    },
    "@media (max-width: 600px)": {
      padding: '40px 0',
      '&:before': {
        backgroundSize: '15px 15px',
      },
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
    padding: '0 40px',
    "@media (max-width: 1200px)": {
      padding: '0 30px',
    },
    "@media (max-width: 960px)": {
      padding: '0 25px',
    },
    "@media (max-width: 600px)": {
      padding: '0 20px',
    },
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 600px)": {
      marginBottom: '30px',
    },
  },
  title: {
    fontSize: '2rem !important', // Reduced from 2.5rem
    fontWeight: 'bold !important',
    color: 'white !important',
    position: 'relative',
    display: 'inline-block',
    "@media (max-width: 600px)": {
      fontSize: '1.5rem !important', // Reduced from 1.8rem
    },
  },
  highlight: {
    color: '#FFC614 !important',
    position: 'relative',
  },
  subtitle: {
    fontSize: '1rem !important', // Reduced from 1.1rem
    color: 'rgba(255, 255, 255, 0.7) !important',
    maxWidth: '900px',
    margin: '5px auto 0 !important', // Reduced from 20px
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
      maxWidth: '90%',
      margin: '8px auto 0 !important', // Reduced from 12px
    },
  },
  tabsContainer: {
    marginBottom: '15px', // Reduced from 20px
    "@media (max-width: 600px)": {
      marginBottom: '20px',
    },
  },
  tabsRoot: {
    minHeight: '50px', // Reduced from 60px
    borderRadius: '25px', // Reduced from 30px
    padding: '4px', // Reduced from 5px
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    width: 'fit-content',
    margin: '0 auto',
    position: 'relative',
    '& .MuiTabs-indicator': {
      display: 'none',
    },
    "@media (max-width: 600px)": {
      minHeight: '40px', // Reduced from 45px
      borderRadius: '20px', // Reduced from 22px
      padding: '3px', // Reduced from 4px
      width: '100%',
      maxWidth: '400px',
    },
  },
  tab: {
    color: 'rgba(255, 255, 255, 0.7) !important',
    padding: '0 25px !important', // Reduced from 30px
    minHeight: '42px !important', // Reduced from 50px
    borderRadius: '21px !important', // Reduced from 25px
    textTransform: 'none !important',
    fontSize: '0.95rem !important', // Reduced from 1rem
    fontWeight: '500 !important',
    transition: 'all 0.3s ease !important',
    '&.Mui-selected': {
      color: '#2A2B6A !important',
      background: '#FFC614',
    },
    '& .MuiTab-wrapper': {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    '& svg': {
      marginRight: '8px', // Reduced from 10px
      fontSize: '1.1rem', // Added to reduce icon size
    },
    "@media (max-width: 600px)": {
      padding: '0 12px !important', // Reduced from 15px
      minHeight: '34px !important', // Reduced from 40px
      fontSize: '0.85rem !important', // Reduced from 0.9rem
      borderRadius: '17px !important', // Reduced from 20px
      flexGrow: 1,
      '& svg': {
        marginRight: '4px', // Reduced from 6px
        fontSize: '1rem', // Reduced from 1.2rem
      },
    },
  },
  cardsContainer: {
    position: 'relative',
    zIndex: 2,
    marginBottom: '10px',
    "@media (max-width: 600px)": {
      marginBottom: '30px',
    },
  },
  swiperContainer: {
    padding: '10px 0 5px 0', // Reduced padding
    '& .swiper': {
      paddingBottom: '10px', // Reduced from 20px
    },
    '& .swiper-slide': {
      height: 'auto',
      display: 'flex',
    },
    '& .swiper-pagination': {
      bottom: '0px !important',
      '& .swiper-pagination-bullet': {
        backgroundColor: 'rgba(255, 255, 255, 0.5) !important',
        opacity: '1 !important',
        '&.swiper-pagination-bullet-active': {
          backgroundColor: '#FFC614 !important',
        },
      },
    },
    '& .swiper-button-next, & .swiper-button-prev': {
      color: '#FFC614 !important',
      backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
      borderRadius: '50% !important',
      width: '44px !important',
      height: '44px !important',
      marginTop: '-22px !important',
      '&:after': {
        fontSize: '18px !important',
        fontWeight: 'bold !important',
      },
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2) !important',
      },
    },
    '& .swiper-button-prev': {
      left: '-20px !important',
    },
    '& .swiper-button-next': {
      right: '-20px !important',
    },
    "@media (max-width: 960px)": {
      '& .swiper-button-next, & .swiper-button-prev': {
        display: 'none !important',
      },
    },
  },
  cardWrapper: {
    width: '100%',
    display: 'flex',
    height: '100%',
  },
  card: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.03) !important',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px !important',
    overflow: 'hidden',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2) !important',
    transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.6s !important',
    padding: '0 !important',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 198, 20, 0.1) !important',
      '& $viewButton': {
        opacity: 1,
        transform: 'translateY(0)',
      },
      '& $cardMedia': {
        transform: 'scale(1.05)',
      },
      '& $hoverOverlay': {
        opacity: 1,
      },
    },
    "@media (max-width: 600px)": {
      borderRadius: '14px !important',
    },
  },
  cardMedia: {
    height: '160px', // Reduced from 200px
    transition: 'transform 0.6s',
    objectFit: 'cover',
    objectPosition: 'center',
    "@media (max-width: 600px)": {
      height: '140px', // Reduced from 170px
    },
  },
  hoverOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '160px', // Reduced from 200px
    background: 'linear-gradient(0deg, rgba(42, 43, 106, 0.1) 0%, rgba(255, 255, 255, 0) 50%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    zIndex: 2,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: '0 0 10px 0', // Reduced padding
    "@media (max-width: 600px)": {
      height: '140px', // Reduced from 170px
      padding: '0 0 10px 0', // Reduced padding
    },
  },
  viewButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    padding: '10px 24px !important',
    borderRadius: '30px !important', 
    fontWeight: '600 !important',
    textTransform: 'none !important',
    fontSize: '0.95rem !important',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.4s ease !important',
    '&:hover': {
      backgroundColor: 'white !important',
    },
    "@media (max-width: 600px)": {
      padding: '8px 18px !important',
      fontSize: '0.85rem !important',
      borderRadius: '25px !important', 
    },
  },
  cardContent: {
    padding: '15px !important', // Reduced from 25px
    color: 'white',
    "@media (max-width: 600px)": {
      padding: '12px !important', // Reduced from 18px
    },
  },
  programTag: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    zIndex: 3,
    backgroundColor: '#FFC614 !important',
    color: '#2A2B6A !important',
    fontWeight: 'bold !important',
    padding: '5px 12px !important',
    borderRadius: '20px !important',
    fontSize: '0.75rem !important',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15) !important',
    "@media (max-width: 600px)": {
      top: '12px',
      left: '12px',
      padding: '4px 9px !important',
      fontSize: '0.68rem !important',
      borderRadius: '18px !important',
    },
  },
  durationTag: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    zIndex: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.9) !important',
    color: '#2A2B6A !important',
    fontWeight: '600 !important',
    padding: '5px 12px !important',
    borderRadius: '20px !important',
    fontSize: '0.75rem !important',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15) !important',
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginRight: '4px',
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 600px)": {
      top: '12px',
      right: '12px',
      padding: '4px 9px !important',
      fontSize: '0.68rem !important',
      borderRadius: '18px !important',
    },
  },
  programTitle: {
    fontSize: '1.2rem !important', // Reduced from 1.5rem
    fontWeight: 'bold !important',
    color: 'white !important',
    marginBottom: '10px !important', // Reduced from 15px
    lineHeight: '1.3 !important',
    "@media (max-width: 600px)": {
      fontSize: '1.1rem !important', // Reduced from 1.3rem
      marginBottom: '8px !important', // Reduced from 12px
    },
  },
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
    margin: '10px 0 15px !important', // Reduced from 15px 0 20px
    "@media (max-width: 600px)": {
      margin: '8px 0 12px !important', // Reduced from 12px 0 16px
    },
  },
  featuresContainer: {
    marginBottom: '15px', // Reduced from 20px
    "@media (max-width: 600px)": {
      marginBottom: '10px', // Reduced from 14px
    },
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px', // Reduced from 12px
    '&:last-child': {
      marginBottom: 0
    },
    "@media (max-width: 600px)": {
      marginBottom: '6px', // Reduced from 9px
    },
  },
  featureIcon: {
    color: '#FFC614',
    marginRight: '10px',
    marginTop: '3px',
    "@media (max-width: 600px)": {
      marginRight: '7px',
      fontSize: '0.85rem !important',
    },
  },
  featureText: {
    fontSize: '0.85rem !important', // Reduced from 0.95rem
    color: 'rgba(255, 255, 255, 0.8) !important',
    "@media (max-width: 600px)": {
      fontSize: '0.8rem !important', // Reduced from 0.85rem
    },
  },
  studentCount: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: 'rgba(255, 255, 255, 0.8) !important',
    fontSize: '0.9rem !important',
    "@media (max-width: 600px)": {
      fontSize: '0.85rem !important',
    },
  },
  enrollButton: {
    backgroundColor: 'rgba(46, 204, 113, 0.15) !important',
    color: '#2ecc71 !important',
    padding: '8px 16px !important',
    borderRadius: '20px !important',
    fontSize: '0.85rem !important',
    fontWeight: '500 !important',
    marginTop: '15px !important',
    transition: 'all 0.3s ease !important',
    border: '1px solid rgba(46, 204, 113, 0.3) !important',
    '&:hover': {
      backgroundColor: 'rgba(46, 204, 113, 0.25) !important',
      borderColor: 'rgba(46, 204, 113, 0.5) !important',
    },
    '& .MuiButton-startIcon': {
      marginRight: '6px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.8rem !important',
      padding: '6px 12px !important',
    },
  },
  enrollIcon: {
    width: '8px !important',
    height: '8px !important',
    backgroundColor: '#2ecc71',
    borderRadius: '50%',
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'inherit',
      animation: '$pulse 1.5s infinite',
    },
  },
  pulseDot: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#2ecc71',
    marginRight: '8px',
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'inherit',
      opacity: 0.7,
      animation: '$pulse 1.5s infinite',
    },
    "@media (max-width: 600px)": {
      width: '7px',
      height: '7px',
      marginRight: '5px',
    },
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
      opacity: 0.7,
    },
    '70%': {
      transform: 'scale(2)',
      opacity: 0,
    },
    '100%': {
      transform: 'scale(2.5)',
      opacity: 0,
    },
  },
  moreButton: {
    // marginTop: '60px !important',
    backgroundColor: 'transparent !important',
    color: 'white !important',
    border: '2px solid rgba(255, 198, 20, 0.5) !important',
    padding: '12px 30px !important',
    borderRadius: '30px !important',
    fontWeight: '600 !important',
    fontSize: '1rem !important',
    transition: 'all 0.3s ease !important',
    display: 'flex !important',
    margin: '0 auto !important',
    '&:hover': {
      backgroundColor: 'rgba(255, 198, 20, 0.1) !important',
      borderColor: '#FFC614 !important',
    },
    "@media (max-width: 600px)": {
      marginTop: '40px !important',
      padding: '9px 22px !important',
      fontSize: '0.9rem !important',
      borderRadius: '25px !important',
    },
  },
  commentDialog: {
    '& .MuiDialog-paper': {
      borderRadius: '15px !important',
      minWidth: '400px',
      "@media (max-width: 600px)": {
        minWidth: '90%',
        margin: '20px',
      },
    },
  },
  commentDialogTitle: {
    color: '#2A2B6A !important',
    fontWeight: 'bold !important',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px !important',
  },
  commentField: {
    marginTop: '15px !important',
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#2A2B6A',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2A2B6A',
      },
    },
  },
  submitCommentButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    '&:hover': {
      backgroundColor: '#1A1B4A !important',
    },
  },
});

const OtherPrograms = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [lovedPrograms, setLovedPrograms] = useState({});
  const [commentDialog, setCommentDialog] = useState({ open: false, programId: null });
  const [comment, setComment] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleLove = (programId) => {
    setLovedPrograms(prev => ({
      ...prev,
      [programId]: !prev[programId]
    }));
  };

  const handleCommentOpen = (programId) => {
    setCommentDialog({ open: true, programId });
  };

  const handleCommentClose = () => {
    setCommentDialog({ open: false, programId: null });
    setComment('');
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      console.log('Comment submitted for program:', commentDialog.programId, 'Comment:', comment);
      handleCommentClose();
    }
  };

  const handleViewProgram = (programId) => {
    // Navigate to specific program pages
    switch(programId) {
      case 3:
        navigate('/fulltime/fullstack');
        break;
      case 4:
        navigate('/fulltime/datascience');
        break;
      default:
        console.log('Program launching soon');
    }
  };

  const programs = [
    {
      id: 1,
      title: 'Full Stack Development - Full Time',
      duration: '12 Months',
      features: [
        'Immersive Campus-Based Learning Experience',
        'Live Product Development & Real Client Projects',
        'Industry Mentorship & 1:1 Career Guidance',
        'Job Placement Support & Interview Preparation'
      ],
      students: 1847,
      tag: 'Full Time',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      level: 'Comprehensive',
      category: 'development'
    },
    {
      id: 2,
      title: 'Data Science & AI - Full Time',
      duration: '12 Months',
      features: [
        'Advanced ML & Deep Learning Curriculum',
        'Real-World Data Projects & Research Experience',
        'AI/ML Industry Expert Mentorship',
        'Career Transition Support & Network Access'
      ],
      students: 1523,
      tag: 'Full Time',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      level: 'Advanced',
      category: 'datascience'
    },
    {
      id: 3,
      title: 'Master Internship In Full Stack',
      duration: '3 Months',
      features: [
        'Build Real Products with Industry Standards',
        'Ecommerce & Marketplace Development',
        'API Integration & Backend Architecture',
        'Performance Optimization Techniques'
      ],
      students: 2854,
      tag: 'Internship',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      level: 'Intermediate',
      category: 'development'
    },
    {
      id: 4,
      title: 'Master Internship In Data Science',
      duration: '3 Months',
      features: [
        'Build Production-Ready ML Models',
        'Advanced Data Visualization & Analysis',
        'AI Chatbot & Recommendation Systems',
        'Predictive Analytics Implementation'
      ],
      students: 2960,
      tag: 'Internship',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      level: 'Advanced',
      category: 'datascience'
    },
    {
      id: 5,
      title: 'Virtual Placement Drive in Full Stack',
      duration: '6 Months',
      features: [
        'Get Job-Specific Training in Full Stack Domains',
        'Apply to 15+ Verified Openings Every Week',
        'Build Communication & Technical Skills Together',
        'Create Weekly Projects to Strengthen Your Portfolio'
      ],
      students: 1245,
      tag: 'Placement Drive',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      level: 'Intermediate',
      category: 'development'
    },
    {
      id: 6,
      title: 'Virtual Placement Drive in Data Science',
      duration: '6 Months',
      features: [
        'Get Job-Specific Training in Data Science Domains',
        'Apply to 15+ Verified Openings Every Week',
        'Master AI Tools Aligned with Real Job Roles',
        'Boost Communication & Analytical Skillsets'
      ],
      students: 1198,
      tag: 'Placement Drive',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      level: 'Intermediate',
      category: 'datascience'
    }
  ];

  return (
    <Box className={classes.section}>
      
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            Explore Our <span className={classes.highlight}>Programs</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Immersive learning experiences designed to transform beginners into industry-ready professionals
          </Typography>
        </Box>

        <Box className={classes.tabsContainer}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            classes={{ root: classes.tabsRoot }}
            centered
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab 
              label="All Programs" 
              className={classes.tab}
              icon={<SchoolIcon />}
            />
            <Tab 
              label="Full Time" 
              className={classes.tab}
              icon={<WorkIcon />}
            />
            <Tab 
              label="Master Internships" 
              className={classes.tab}
              icon={<CodeIcon />}
            />
            <Tab 
              label="Virtual Placement" 
              className={classes.tab}
              icon={<DataUsageIcon />}
            />
          </Tabs>
        </Box>

        <Box className={classes.cardsContainer}>
          <Box className={classes.swiperContainer}>
            <Swiper
              slidesPerView={2}
              slidesPerGroup={2}
              spaceBetween={30}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Navigation, Pagination, Autoplay]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1.5,
                  slidesPerGroup: 1,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 30,
                },
              }}
            >
              {programs
                .filter(program => {
                  if (tabValue === 0) return true;
                  if (tabValue === 1) return program.tag === 'Full Time';
                  if (tabValue === 2) return program.tag === 'Internship';
                  if (tabValue === 3) return program.tag === 'Placement Drive';
                  return true;
                })
                .map((program) => (
                  <SwiperSlide key={program.id}>
                    <Box className={classes.cardWrapper}>
                      <Card className={classes.card} sx={{ height: '100%' }}>
                        <Chip label={program.tag} className={classes.programTag} />
                        <Chip 
                          icon={<AccessTimeIcon />} 
                          label={program.duration}
                          className={classes.durationTag} 
                        />
                        
                        <Box sx={{ position: 'relative' }}>
                          <CardMedia
                            component="img"
                            className={classes.cardMedia}
                            image={program.image}
                            alt={program.title}
                          />
                          
                          <Box className={classes.hoverOverlay}>
                            <Button 
                              variant="contained" 
                              className={classes.viewButton}
                              endIcon={<LaunchIcon />}
                              onClick={() => handleViewProgram(program.id)}
                            >
                              {program.id >= 3 ? 'View Details' : 'Launching soon'}
                            </Button>
                          </Box>
                        </Box>
                        
                        <Box className={classes.cardContent}>
                          <Typography className={classes.programTitle}>
                            {program.title}
                          </Typography>
                          
                          <Divider className={classes.divider} />
                          
                          <Box className={classes.featuresContainer}>
                            {program.features.map((feature, index) => (
                              <Box key={index} className={classes.featureItem}>
                                <Box 
                                  component="span" 
                                  sx={{ 
                                    width: '6px', 
                                    height: '6px', 
                                    borderRadius: '50%', 
                                    backgroundColor: '#FFC614',
                                    display: 'inline-block',
                                    marginRight: '12px',
                                  }} 
                                />
                                <Typography className={classes.featureText}>
                                  {feature}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                          
                          <EnhancedEngagementSection 
                            onLoveClick={() => handleLove(program.id)}
                            onCommentClick={() => handleCommentOpen(program.id)}
                          />
                          
                          <Box className={classes.engagementContainer}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <Button
                                variant="contained"
                                className={classes.enrollButton}
                                startIcon={<Box className={classes.enrollIcon} />}
                                onClick={() => handleViewProgram(program.id)}
                              >
                                Enrolling Now
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      </Card>
                    </Box>
                  </SwiperSlide>
                ))}
            </Swiper>
          </Box>
        </Box>
        
        {/* <Button variant="outlined" className={classes.moreButton}>
          View All Programs
        </Button> */}
      </Container>

      <Dialog 
        open={commentDialog.open} 
        onClose={handleCommentClose}
        className={classes.commentDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle className={classes.commentDialogTitle}>
          Share Your Thoughts
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: '#666', marginBottom: '10px' }}>
            What excites you most about this program? Your feedback helps us improve!
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            label="Your comment"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="e.g. I love the hands-on approach and real-world projects..."
            className={classes.commentField}
          />
        </DialogContent>
        <DialogActions sx={{ padding: '16px 24px' }}>
          <Button onClick={handleCommentClose} sx={{ color: '#666' }}>
            Cancel
          </Button>
          <Button 
            onClick={handleCommentSubmit}
            className={classes.submitCommentButton}
            variant="contained"
            startIcon={<SendIcon />}
            disabled={!comment.trim()}
          >
            Share
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OtherPrograms;
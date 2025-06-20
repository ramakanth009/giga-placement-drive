import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import WorkIcon from '@mui/icons-material/Work';
import ProgramCard from './ProgramCard';
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
    padding: '10px 0',
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
    "@media (max-width: 960px)": {
      marginBottom: '15px',
    },
    "@media (max-width: 600px)": {
      marginBottom: '10px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#ffffff !important',
    marginBottom: '8px !important',
    textAlign: 'center',
    '& span': {
      color: '#FFC614 !important',
    },
    "@media (max-width: 1200px)": {
      fontSize: '2.3rem !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.6rem !important',
      marginBottom: '6px !important',
    },
  },
  subtitle: {
    fontSize: '1rem !important',
    color: 'rgba(255, 255, 255, 0.8) !important',
    textAlign: 'center',
    // maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6 !important',
    "@media (max-width: 960px)": {
      fontSize: '0.9rem !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.8rem !important',
    },
  },
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '15px',
    position: 'relative',
    zIndex: 2,
    "@media (max-width: 600px)": {
      marginBottom: '10px',
    },
  },
  tabs: {
    borderRadius: '25px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '4px',
    minHeight: 'auto !important',
    '& .MuiTabs-indicator': {
      display: 'none',
    },
    '& .MuiTab-root': {
      minHeight: 'auto !important',
      padding: '8px 16px !important',
      borderRadius: '20px !important',
      color: 'rgba(255, 255, 255, 0.7) !important',
      fontSize: '0.8rem !important',
      fontWeight: '500 !important',
      textTransform: 'none !important',
      transition: 'all 0.3s !important',
      minWidth: 'auto !important',
      marginRight: '4px !important',
      "&:last-child": {
        marginRight: '0 !important',
      },
      '&.Mui-selected': {
        backgroundColor: '#FFC614 !important',
        color: '#2A2B6A !important',
        fontWeight: '600 !important',
      },
      '@media (max-width: 600px)': {
        fontSize: '0.7rem !important',
        padding: '6px 12px !important',
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
    padding: '10px 0 5px 0',
    '& .swiper': {
      paddingBottom: '10px',
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
  },
  commentDialog: {
    '& .MuiDialog-paper': {
      borderRadius: '15px !important',
      backgroundColor: '#ffffff !important',
    },
  },
  commentDialogTitle: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    fontSize: '1.2rem !important',
    fontWeight: '600 !important',
    padding: '16px 24px !important',
    marginBottom: '10px !important',
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
  ];

  const categories = [
    { id: 0, label: 'All Programs', icon: <SchoolIcon sx={{ fontSize: '0.9rem !important' }} /> },
    { id: 1, label: 'Development', icon: <CodeIcon sx={{ fontSize: '0.9rem !important' }} /> },
    { id: 2, label: 'Data Science', icon: <DataUsageIcon sx={{ fontSize: '0.9rem !important' }} /> },
    { id: 3, label: 'Placement', icon: <WorkIcon sx={{ fontSize: '0.9rem !important' }} /> },
  ];

  const filteredPrograms = programs.filter(program => {
    if (tabValue === 0) return true;
    if (tabValue === 1) return program.category === 'development';
    if (tabValue === 2) return program.category === 'datascience';
    if (tabValue === 3) return program.tag === 'Placement Drive';
    return true;
  });

  return (
    <Box className={classes.section}>
      <Container maxWidth="xl" className={classes.container}>
        <Box className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            Explore Our <span>Programs</span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Immersive learning experiences designed to transform beginners into industry-ready professionals
          </Typography>
        </Box>

        <Box className={classes.tabsContainer}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            className={classes.tabs}
            variant="scrollable"
            scrollButtons="auto"
          >
            {categories.map((category) => (
              <Tab 
                key={category.id}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {category.icon}
                    {category.label}
                  </Box>
                }
              />
            ))}
          </Tabs>
        </Box>

        <Box className={classes.cardsContainer}>
          <Box className={classes.swiperContainer}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {filteredPrograms.map((program) => (
                <SwiperSlide key={program.id}>
                  <ProgramCard
                    program={program}
                    onLoveClick={handleLove}
                    onCommentClick={handleCommentOpen}
                    onViewProgram={handleViewProgram}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
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
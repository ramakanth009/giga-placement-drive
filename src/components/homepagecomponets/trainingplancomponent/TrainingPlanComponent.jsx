import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Tabs, Tab, Button, Grid, Paper, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Chart from 'chart.js/auto';
import { useNavigate } from 'react-router-dom';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// SVG imports for company logos
import { ReactComponent as AccentureLogo } from '../../../assets/hiringpartners/Accenture.svg';
import { ReactComponent as SynopsysLogo } from '../../../assets/hiringpartners/Synopsys_Logo.svg';
import { ReactComponent as HappyFoxLogo } from '../../../assets/hiringpartners/happyfox.svg';
import { ReactComponent as ZohoLogo } from '../../../assets/hiringpartners/zoho.svg';
import { ReactComponent as PaytmLogo } from '../../../assets/hiringpartners/paytm.svg';
import { ReactComponent as GoldmanSachsLogo } from '../../../assets/hiringpartners/goldman-sachs.svg';
import { ReactComponent as MedplusLogo } from '../../../assets/hiringpartners/Medplus_logo.svg';
import { ReactComponent as InfrrtLogo } from '../../../assets/hiringpartners/Infrrt.svg';
import { ReactComponent as CaterpillarLogo } from '../../../assets/hiringpartners/caterpillar-preview.svg';
import { ReactComponent as AdidasLogo } from '../../../assets/hiringpartners/Adidas-logo.svg';

const useStyles = makeStyles({
  section: {
    padding: '60px 24px',
    backgroundColor: '#f9fafc',
    position: 'relative',
    overflow: 'hidden',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    textAlign: 'center',
    marginBottom: '40px !important',
    '& span': {
      color: '#FFC614 !important',
    },
    "@media (max-width: 960px)": {
      fontSize: '2.2rem !important',
      marginBottom: '30px !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.8rem !important',
      marginBottom: '25px !important',
    },
  },
  tabsContainer: {
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'center',
    "& .MuiTabs-flexContainer": {
      justifyContent: 'center',
    },
    "@media (max-width: 600px)": {
      marginBottom: '30px',
    },
  },
  tabRoot: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '30px',
    padding: '5px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    "& .MuiTabs-indicator": {
      display: 'none',
    },
  },
  tab: {
    minWidth: '150px !important',
    minHeight: '45px !important',
    borderRadius: '30px !important',
    margin: '0 5px !important',
    color: '#555 !important',
    fontWeight: '600 !important',
    fontSize: '1rem !important',
    textTransform: 'none !important',
    transition: 'all 0.3s ease !important',
    opacity: '1 !important',
    "&.Mui-selected": {
      backgroundColor: '#2A2B6A !important',
      color: 'white !important',
      boxShadow: '0 5px 15px rgba(42, 43, 106, 0.3) !important',
    },
    "@media (max-width: 600px)": {
      minWidth: '120px !important',
      fontSize: '0.9rem !important',
      padding: '0 10px !important',
    },
    "@media (max-width: 480px)": {
      minWidth: '100px !important',
      fontSize: '0.75rem !important',
      padding: '6px 8px !important',
      '& .MuiTab-wrapper': {
        fontSize: '0.75rem !important',
      },
    },
  },
  mobileTabLabel: {
    "@media (max-width: 480px)": {
      fontSize: '0.75rem !important',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100px',
    },
  },
  weekCardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '25px',
    marginBottom: '40px',
    padding: '0 10px',
    "@media (max-width: 960px)": {
      gap: '20px',
    },
    "@media (max-width: 600px)": {
      gap: '15px',
    },
    "@media (max-width: 480px)": {
      display: 'none', // Hide cards on mobile
    },
  },
  mobileCardSwiper: {
    display: 'none',
    width: '100%',
    marginBottom: '30px',
    position: 'relative',
    "@media (max-width: 480px)": {
      display: 'block',
    },
  },
  swiperSlide: {
    display: 'flex',
    justifyContent: 'center',
  },
  weekCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '24px 20px',
    height: '180px',
    width: '230px',
    position: 'relative',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
    },
    "@media (max-width: 960px)": {
      padding: '20px 16px',
      width: '210px',
      height: '170px',
    },
    "@media (max-width: 600px)": {
      padding: '18px 14px',
      width: '180px',
      height: '165px',
    },
    "@media (max-width: 480px)": {
      width: '85%',
      maxWidth: '280px',
      height: 'auto',
      minHeight: '160px',
      margin: '0 auto',
    },
  },
  activeCard: {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
  },
  inactiveCard: {
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      inset: '0',
      borderRadius: '12px',
      animation: '$pulse 2s infinite',
      opacity: 0.6,
      pointerEvents: 'none',
    },
  },
  '@keyframes pulse': {
    '0%': {
      boxShadow: '0 0 0 0 rgba(67, 118, 235, 0.4)',
    },
    '70%': {
      boxShadow: '0 0 0 6px rgba(67, 118, 235, 0)',
    },
    '100%': {
      boxShadow: '0 0 0 0 rgba(67, 118, 235, 0)',
    },
  },
  iconContainer: {
    width: '45px',
    height: '45px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px',
    "@media (max-width: 600px)": {
      width: '40px',
      height: '40px',
      marginBottom: '12px',
    },
    "@media (max-width: 480px)": {
      width: '38px',
      height: '38px',
      marginBottom: '10px',
    },
  },
  weekLabel: {
    textTransform: 'uppercase',
    fontSize: '12px !important',
    marginBottom: '6px !important',
    color: '#555 !important',
    "@media (max-width: 600px)": {
      fontSize: '11px !important',
      marginBottom: '4px !important',
    },
  },
  roleName: {
    fontSize: '16px !important',
    fontWeight: 'bold !important',
    marginBottom: '8px !important',
    lineHeight: '1.3 !important',
    "@media (max-width: 600px)": {
      fontSize: '15px !important',
      marginBottom: '6px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '14px !important',
    },
  },
  description: {
    fontSize: '13px !important',
    color: '#555 !important',
    lineHeight: '1.4 !important',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    "@media (max-width: 600px)": {
      fontSize: '12px !important',
      WebkitLineClamp: 2,
    },
    "@media (max-width: 480px)": {
      fontSize: '12px !important',
      WebkitLineClamp: 3,
    },
  },
  dataVisualizationSection: {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  contentGrid: {
    display: 'flex',
    gap: '30px',
    marginBottom: '40px',
    justifyContent: 'center',
    "@media (max-width: 960px)": {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '25px',
    },
  },
  chartTitle: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    textAlign: 'center',
    "@media (max-width: 600px)": {
      fontSize: '1.2rem !important',
      marginBottom: '15px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.1rem !important',
      marginBottom: '12px !important',
    },
  },
  visualizationBox: {
    flex: '1',
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    "@media (max-width: 960px)": {
      width: '100%',
      maxWidth: '500px',
    },
    "@media (max-width: 480px)": {
      padding: '15px',
      borderRadius: '12px',
    },
  },
  companyInfoBox: {
    flex: '1',
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    "@media (max-width: 960px)": {
      width: '100%',
      maxWidth: '500px',
    },
    "@media (max-width: 480px)": {
      padding: '15px',
      borderRadius: '12px',
    },
  },
  chartContainer: {
    flex: 1,
    position: 'relative',
    height: '300px',
    marginBottom: '20px',
    "@media (max-width: 600px)": {
      height: '250px',
      marginBottom: '15px',
    },
    "@media (max-width: 480px)": {
      height: '220px',
    },
  },
  companyInfoTitle: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    textAlign: 'center',
    "@media (max-width: 600px)": {
      fontSize: '1.2rem !important',
      marginBottom: '15px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.1rem !important',
      marginBottom: '12px !important',
    },
  },
  companyInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '10px',
    height: '100%',
    justifyContent: 'center',
    "@media (max-width: 480px)": {
      gap: '12px',
      padding: '5px',
    },
  },
  companyItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#f0f0f0',
      transform: 'translateY(-3px)',
    },
    "@media (max-width: 480px)": {
      padding: '8px',
      gap: '10px',
      marginBottom: '8px',
    },
  },
  companyText: {
    fontSize: '14px !important',
    color: '#555 !important',
    "@media (max-width: 480px)": {
      fontSize: '13px !important',
    },
  },
  partnersTitle: {
    fontSize: '1.4rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    textAlign: 'center',
    "@media (max-width: 600px)": {
      fontSize: '1.2rem !important',
      marginBottom: '15px !important',
    },
    "@media (max-width: 480px)": {
      fontSize: '1.1rem !important',
      marginBottom: '12px !important',
    },
  },
  partnersContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '15px',
    marginBottom: '15px',
    "@media (max-width: 600px)": {
      gap: '15px',
    },
    "@media (max-width: 480px)": {
      gap: '10px',
    },
  },
  partnerCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    transition: 'all 0.3s ease',
    width: '110px',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
    },
    "@media (max-width: 480px)": {
      width: '90px',
    },
  },
  partnerLogo: {
    width: '93px',
    height: '60px',
    objectFit: 'contain',
    opacity: 0.85,
    transition: 'all 0.3s ease',
    '&:hover': {
      opacity: 1,
    },
    "@media (max-width: 480px)": {
      width: '75px',
      height: '50px',
    },
  },
  partnersSection: {
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    padding: '20px',
    marginBottom: '30px',
    "@media (max-width: 480px)": {
      padding: '15px',
      borderRadius: '12px',
      marginBottom: '25px',
    },
  },
  viewButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    padding: '10px 24px !important',
    borderRadius: '8px !important',
    fontWeight: 'bold !important',
    fontSize: '1rem !important',
    marginTop: '20px !important',
    transition: 'all 0.3s ease !important',
    display: 'block !important',
    margin: '20px auto 0 !important',
    '&:hover': {
      backgroundColor: '#1A1B4A !important',
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 12px rgba(42, 43, 106, 0.2) !important',
    },
    "@media (max-width: 600px)": {
      fontSize: '0.9rem !important',
      padding: '8px 20px !important',
    },
    "@media (max-width: 480px)": {
      width: '80% !important',
      fontSize: '0.85rem !important',
    },
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
    flexWrap: 'wrap',
    "@media (max-width: 600px)": {
      gap: '15px',
    },
    "@media (max-width: 480px)": {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
    },
  },
  swiperPagination: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '15px',
    "@media (max-width: 480px)": {
      marginTop: '10px',
    },
  },
  paginationDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'rgba(42, 43, 106, 0.3)',
    transition: 'all 0.3s ease',
  },
  activeDot: {
    backgroundColor: '#2A2B6A',
    width: '24px',
    borderRadius: '4px',
  },
  indicatorText: {
    textAlign: 'center',
    fontSize: '0.85rem !important',
    color: '#666 !important',
    marginTop: '10px !important',
    display: 'none', // Hidden by default
    "@media (max-width: 480px)": {
      display: 'block', // Show only on mobile
    },
  },
  clickMeOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(42, 43, 106, 0.7)',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
    zIndex: 10,
  },
  clickMeText: {
    color: 'white !important',
    fontWeight: 'bold !important',
    fontSize: '1.2rem !important',
    marginTop: '8px !important',
    "@media (max-width: 480px)": {
      fontSize: '1rem !important',
    },
  },
  clickMeIcon: {
    color: 'white !important',
    fontSize: '2rem !important',
    animation: '$bounce 2s infinite',
    "@media (max-width: 480px)": {
      fontSize: '1.8rem !important',
    },
  },
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateY(0)',
    },
    '40%': {
      transform: 'translateY(-12px)',
    },
    '60%': {
      transform: 'translateY(-5px)',
    },
  },
  // Add mobile navigation arrow buttons
  mobileNavArrow: {
    display: 'none !important',
    "@media (max-width: 480px)": {
      display: 'flex !important',
      position: 'absolute !important',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
      backgroundColor: 'rgba(42, 43, 106, 0.7) !important',
      color: 'white !important',
      width: '32px !important',
      height: '32px !important',
      minWidth: 'unset !important',
      borderRadius: '50% !important',
      '& svg': {
        fontSize: '0.9rem',
      },
    },
  },
  prevArrow: {
    left: '5px !important',
  },
  nextArrow: {
    right: '5px !important',
  },
});

const TrainingPlanComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [activeRole, setActiveRole] = useState(0);
  const [hoveredRole, setHoveredRole] = useState(null);
  const [activeMobileSlide, setActiveMobileSlide] = useState(0);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Track data for different tracks
  const tracks = [
    {
      id: 'fullstack',
      name: 'Full Stack',
      weeks: [
        {
          week: 'Week 1',
          role: 'Frontend Developer',
          description: 'Learn HTML, CSS, JavaScript, and UI/UX principles while gaining communication skills.',
          color: '#8a5cf7',
          colorLight: 'rgba(138, 92, 247, 0.1)',
          chartData: {
            labels: ['Healthcare', 'IT & Services', 'Cybersecurity', 'Finance', 'Quick Commerce', 'Technology', 'Manufacturing', 'EdTech', 'Energy'],
            datasets: [{
              label: 'Demand by Industry (in %)',
              data: [3, 6, 2, 4, 10, 10, 3, 4, 3],
              backgroundColor: [
                'rgba(138, 92, 247, 0.7)',
                'rgba(67, 118, 235, 0.7)',
                'rgba(240, 124, 62, 0.7)',
                'rgba(232, 81, 141, 0.7)',
                'rgba(42, 43, 106, 0.7)',
                'rgba(156, 39, 176, 0.7)',
                'rgba(255, 152, 0, 0.7)',
                'rgba(76, 175, 80, 0.7)',
                'rgba(33, 150, 243, 0.7)'
              ],
              borderColor: [
                'rgba(138, 92, 247, 1)',
                'rgba(67, 118, 235, 1)',
                'rgba(240, 124, 62, 1)',
                'rgba(232, 81, 141, 1)',
                'rgba(42, 43, 106, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(33, 150, 243, 1)'
              ],
            }]
          },
          companies: {
            topLocations: ['Bangalore', 'Hyderabad', 'Mumbai','Chennai','Gurgaon'],
            avgSalary: '5-12 LPA',
            openings: '12,500+',
          }
        },
        {
          week: 'Week 2',
          role: 'Backend Developer',
          description: 'Understand API development, databases, and server-side logic with hands-on experience.',
          color: '#4376eb',
          colorLight: 'rgba(67, 118, 235, 0.1)',
          chartData: {
            labels: ['Healthcare', 'IT & Services', 'Cybersecurity', 'Finance', 'Quick Commerce', 'Technology', 'Manufacturing', 'EdTech', 'Energy'],
            datasets: [{
              label: 'Demand by Industry (in %)',
              data: [7, 8, 6, 7, 8, 10, 7, 4, 6],
              backgroundColor: [
                'rgba(138, 92, 247, 0.7)',
                'rgba(67, 118, 235, 0.7)',
                'rgba(240, 124, 62, 0.7)',
                'rgba(232, 81, 141, 0.7)',
                'rgba(42, 43, 106, 0.7)',
                'rgba(156, 39, 176, 0.7)',
                'rgba(255, 152, 0, 0.7)',
                'rgba(76, 175, 80, 0.7)',
                'rgba(33, 150, 243, 0.7)'
              ],
              borderColor: [
                'rgba(138, 92, 247, 1)',
                'rgba(67, 118, 235, 1)',
                'rgba(240, 124, 62, 1)',
                'rgba(232, 81, 141, 1)',
                'rgba(42, 43, 106, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(33, 150, 243, 1)'
              ],
            }]
          },
          companies: {
            topLocations: ['Pune', 'Chennai', 'Delhi', 'Bangalore', 'Hyderabad'],
            avgSalary: '6-14 LPA',
            openings: '9,800+',
          }
        },
        {
          week: 'Week 3',
          role: 'Database Engineer',
          description: 'Master SQL, MongoDB, cloud technologies, and CI/CD workflows with analytical skills.',
          color: '#f07c3e',
          colorLight: 'rgba(240, 124, 62, 0.1)',
          chartData: {
            labels: ['Healthcare', 'IT & Services', 'Cybersecurity', 'Finance', 'Quick Commerce', 'Technology', 'Manufacturing', 'EdTech', 'Energy'],
            datasets: [{
              label: 'Demand by Industry (in %)',
              data: [5, 5, 3, 4, 6, 6, 5, 2, 4],
              backgroundColor: [
                'rgba(138, 92, 247, 0.7)',
                'rgba(67, 118, 235, 0.7)',
                'rgba(240, 124, 62, 0.7)',
                'rgba(232, 81, 141, 0.7)',
                'rgba(42, 43, 106, 0.7)',
                'rgba(156, 39, 176, 0.7)',
                'rgba(255, 152, 0, 0.7)',
                'rgba(76, 175, 80, 0.7)',
                'rgba(33, 150, 243, 0.7)'
              ],
              borderColor: [
                'rgba(138, 92, 247, 1)',
                'rgba(67, 118, 235, 1)',
                'rgba(240, 124, 62, 1)',
                'rgba(232, 81, 141, 1)',
                'rgba(42, 43, 106, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(33, 150, 243, 1)'
              ],
            }]
          },
          companies: {
            topLocations: ['Bangalore', 'Mumbai', 'Hyderabad','Pune','Gurgaon'],
            avgSalary: '8-15 LPA',
            openings: '6,200+',
          }
        },
        {
          week: 'Week 4',
          role: 'Full Stack Developer',
          description: 'Build end-to-end web apps with RESTful & GraphQL APIs, frontend frameworks, and databases.',
          color: '#e8518d',
          colorLight: 'rgba(232, 81, 141, 0.1)',
          chartData: {
            labels: ['Healthcare', 'IT & Services', 'Cybersecurity', 'Finance', 'Quick Commerce', 'Technology', 'Manufacturing', 'EdTech', 'Energy'],
            datasets: [{
              label: 'Demand by Industry (in %)',
              data: [4, 7, 3, 5, 10, 11, 4, 4, 4],
              backgroundColor: [
                'rgba(138, 92, 247, 0.7)',
                'rgba(67, 118, 235, 0.7)',
                'rgba(240, 124, 62, 0.7)',
                'rgba(232, 81, 141, 0.7)',
                'rgba(42, 43, 106, 0.7)',
                'rgba(156, 39, 176, 0.7)',
                'rgba(255, 152, 0, 0.7)',
                'rgba(76, 175, 80, 0.7)',
                'rgba(33, 150, 243, 0.7)'
              ],
              borderColor: [
                'rgba(138, 92, 247, 1)',
                'rgba(67, 118, 235, 1)',
                'rgba(240, 124, 62, 1)',
                'rgba(232, 81, 141, 1)',
                'rgba(42, 43, 106, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(33, 150, 243, 1)'
              ],
            }]
          },
          companies: {
            topLocations: ['Hyderabad', 'Delhi', 'Chennai','Bangalore','Mumbai'],
            avgSalary: '7-13 LPA',
            openings: '7,500+',
          }
        },
      ],
    },
    // Data Science track
    {
      id: 'datascience',
      name: 'Data Science',
      weeks: [
        {
          week: 'Week 1',
          role: 'Data Analyst',
          description: 'Learn data cleaning, visualization, and analysis with Excel, SQL and Python.',
          color: '#8a5cf7',
          colorLight: 'rgba(138, 92, 247, 0.1)',
          chartData: {
            labels: ['Healthcare', 'IT & Services', 'Cybersecurity', 'Finance', 'Quick Commerce', 'Technology', 'Manufacturing', 'EdTech', 'Energy'],
            datasets: [{
              label: 'Demand by Industry (in %)',
              data: [6, 5, 2, 6, 7, 8, 5, 4, 4],
              backgroundColor: [
                'rgba(138, 92, 247, 0.7)',
                'rgba(67, 118, 235, 0.7)',
                'rgba(240, 124, 62, 0.7)',
                'rgba(232, 81, 141, 0.7)',
                'rgba(42, 43, 106, 0.7)',
                'rgba(156, 39, 176, 0.7)',
                'rgba(255, 152, 0, 0.7)',
                'rgba(76, 175, 80, 0.7)',
                'rgba(33, 150, 243, 0.7)'
              ],
              borderColor: [
                'rgba(138, 92, 247, 1)',
                'rgba(67, 118, 235, 1)',
                'rgba(240, 124, 62, 1)',
                'rgba(232, 81, 141, 1)',
                'rgba(42, 43, 106, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(33, 150, 243, 1)'
              ],
            }]
          },
          companies: {
            topLocations: ['Bangalore', 'Mumbai', 'Pune','Chennai','Hyderabad'],
            avgSalary: '5-10 LPA',
            openings: '15,000+',
          }
        },
        {
          week: 'Week 2',
          role: 'BI Analyst',
          description: 'Create dashboards with Power BI, Tableau, and SQL for data-driven decision-making.',
          color: '#4376eb',
          colorLight: 'rgba(67, 118, 235, 0.1)',
          chartData: {
            labels: ['Healthcare', 'IT & Services', 'Cybersecurity', 'Finance', 'Quick Commerce', 'Technology', 'Manufacturing', 'EdTech', 'Energy'],
            datasets: [{
              label: 'Demand by Industry (in %)',
              data: [3, 4, 2, 5, 5, 6, 3, 3, 3],
              backgroundColor: [
                'rgba(138, 92, 247, 0.7)',
                'rgba(67, 118, 235, 0.7)',
                'rgba(240, 124, 62, 0.7)',
                'rgba(232, 81, 141, 0.7)',
                'rgba(42, 43, 106, 0.7)',
                'rgba(156, 39, 176, 0.7)',
                'rgba(255, 152, 0, 0.7)',
                'rgba(76, 175, 80, 0.7)',
                'rgba(33, 150, 243, 0.7)'
              ],
              borderColor: [
                'rgba(138, 92, 247, 1)',
                'rgba(67, 118, 235, 1)',
                'rgba(240, 124, 62, 1)',
                'rgba(232, 81, 141, 1)',
                'rgba(42, 43, 106, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(33, 150, 243, 1)'
              ],
            }]
          },
          companies: {
            topLocations: ['Bangalore', 'Hyderabad', 'Delhi','Chennai','Pune'],
            avgSalary: '6-12 LPA',
            openings: '8,600+',
          }
        },
        {
          week: 'Week 3',
          role: 'Data Engineer',
          description: 'Build ETL pipelines, manage databases, and implement cloud storage solutions.',
          color: '#f07c3e',
          colorLight: 'rgba(240, 124, 62, 0.1)',
          chartData: {
            labels: ['Healthcare', 'IT & Services', 'Cybersecurity', 'Finance', 'Quick Commerce', 'Technology', 'Manufacturing', 'EdTech', 'Energy'],
            datasets: [{
              label: 'Demand by Industry (in %)',
              data: [5, 8, 6, 4, 8, 9, 6, 4, 6],
              backgroundColor: [
                'rgba(138, 92, 247, 0.7)',
                'rgba(67, 118, 235, 0.7)',
                'rgba(240, 124, 62, 0.7)',
                'rgba(232, 81, 141, 0.7)',
                'rgba(42, 43, 106, 0.7)',
                'rgba(156, 39, 176, 0.7)',
                'rgba(255, 152, 0, 0.7)',
                'rgba(76, 175, 80, 0.7)',
                'rgba(33, 150, 243, 0.7)'
              ],
              borderColor: [
                'rgba(138, 92, 247, 1)',
                'rgba(67, 118, 235, 1)',
                'rgba(240, 124, 62, 1)',
                'rgba(232, 81, 141, 1)',
                'rgba(42, 43, 106, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(33, 150, 243, 1)'
              ],
            }]
          },
          companies: {
            topLocations: ['Bangalore', 'Pune', 'Hyderabad','Gurgaon','Chennai'],
            avgSalary: '8-18 LPA',
            openings: '5,800+',
          }
        },
        {
          week: 'Week 4',
          role: 'Data Scientist',
          description: 'Develop skills in statistics, feature engineering, and machine learning models.',
          color: '#e8518d',
          colorLight: 'rgba(232, 81, 141, 0.1)',
          chartData: {
            labels: ['Healthcare', 'IT & Services', 'Cybersecurity', 'Finance', 'Quick Commerce', 'Technology', 'Manufacturing', 'EdTech', 'Energy'],
            datasets: [{
              label: 'Demand by Industry (in %)',
              data: [4, 7, 4, 5, 6, 8, 5, 3, 4],
              backgroundColor: [
                'rgba(138, 92, 247, 0.7)',
                'rgba(67, 118, 235, 0.7)',
                'rgba(240, 124, 62, 0.7)',
                'rgba(232, 81, 141, 0.7)',
                'rgba(42, 43, 106, 0.7)',
                'rgba(156, 39, 176, 0.7)',
                'rgba(255, 152, 0, 0.7)',
                'rgba(76, 175, 80, 0.7)',
                'rgba(33, 150, 243, 0.7)'
              ],
              borderColor: [
                'rgba(138, 92, 247, 1)',
                'rgba(67, 118, 235, 1)',
                'rgba(240, 124, 62, 1)',
                'rgba(232, 81, 141, 1)',
                'rgba(42, 43, 106, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(33, 150, 243, 1)'
              ],
            }]
          },
          companies: {
            topLocations: ['Bangalore', 'Mumbai', 'Hyderabad',"Chennai","Pune"],
            avgSalary: '10-25 LPA',
            openings: '4,500+',
          }
        },
      ],
    },
  ];

  // Hiring partners
  const partnersForTabs = [
    [
      { Component: AccentureLogo, alt: 'Accenture' },
      { Component: SynopsysLogo, alt: 'Synopsys' },
      { Component: HappyFoxLogo, alt: 'HappyFox' },
      { Component: ZohoLogo, alt: 'Zoho' },
      { Component: PaytmLogo, alt: 'Paytm' },
    ],
    [
      { Component: GoldmanSachsLogo, alt: 'Goldman Sachs' },
      { Component: MedplusLogo, alt: 'MedPlus' },
      { Component: InfrrtLogo, alt: 'Infrrt' },
      { Component: CaterpillarLogo, alt: 'Caterpillar' },
      { Component: AdidasLogo, alt: 'Adidas' },
    ]
  ];

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setActiveRole(0);
    setHoveredRole(null);
    setActiveMobileSlide(0);
  };

  // Handle role card click
  const handleRoleClick = (index) => {
    setActiveRole(index);
    setHoveredRole(null);
  };

  // Handle mobile slide change
  const handleSlideChange = (index) => {
    setActiveMobileSlide(index);
    setActiveRole(index);
  };

  // Handle prev arrow click
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  // Handle next arrow click
  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  // Handle mouse events for cards
  const handleRoleMouseEnter = (index) => {
    if (index !== activeRole) {
      setHoveredRole(index);
    }
  };

  const handleRoleMouseLeave = () => {
    setHoveredRole(null);
  };

  // Initialize chart
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const currentTrack = tracks[activeTab];
      const currentRole = currentTrack.weeks[activeRole];
      
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: currentRole.chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              backgroundColor: 'rgba(42, 43, 106, 0.8)',
              titleFont: {
                size: 14,
                weight: 'bold',
              },
              bodyFont: {
                size: 13,
              },
              padding: 10,
              cornerRadius: 6,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)',
              },
              ticks: {
                callback: function(value) {
                  return value + '%';
                },
                font: {
                  size: window.innerWidth < 480 ? 10 : 11,
                },
                color: '#666',
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  size: window.innerWidth < 480 ? 9 : 11,
                },
                color: '#666',
                maxRotation: window.innerWidth < 480 ? 45 : 0,
                minRotation: window.innerWidth < 480 ? 45 : 0,
              },
            },
          },
          animation: {
            duration: 1000,
            easing: 'easeInOutQuad'
          }
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [activeTab, activeRole]);

  // Initialize mobile swiper with autoplay and navigation
  useEffect(() => {
    if (window.innerWidth <= 480) {
      swiperRef.current = new Swiper('.role-swiper', {
        modules: [Navigation, Autoplay],
        slidesPerView: 1.2,
        spaceBetween: 15,
        centeredSlides: true,
        loop: true,
        initialSlide: activeRole,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        },
        on: {
          slideChange: (swiper) => {
            const realIndex = swiper.realIndex;
            handleSlideChange(realIndex);
          },
        },
      });
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, [activeTab]);

  // Navigate to respective page
  const handleViewDetails = () => {
    const routes = {
      0: '/fullstack',
      1: '/datascience',
    };
    
    navigate(routes[activeTab] || '/');
  };

  return (
    <Box className={classes.section}>
      <Typography variant="h2" className={classes.sectionTitle}>
        Hands-On Job Training for <span>High-Demand Tech Roles</span>
      </Typography>

      {/* Tab navigation */}
      <Box className={classes.tabsContainer}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          className={classes.tabRoot}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tracks.map((track) => (
            <Tab
              key={track.id}
              label={
                <Box className={classes.mobileTabLabel}>
                  {track.name}
                </Box>
              }
              className={classes.tab}
            />
          ))}
        </Tabs>
      </Box>

      {/* Desktop/Tablet Weekly curriculum cards */}
      <Box className={classes.weekCardContainer}>
        {tracks[activeTab].weeks.map((weekData, index) => (
          <Box 
            className={`${classes.weekCard} ${
              index === activeRole 
                ? classes.activeCard 
                : classes.inactiveCard
            }`}
            key={index}
            onClick={() => handleRoleClick(index)}
            onMouseEnter={() => handleRoleMouseEnter(index)}
            onMouseLeave={handleRoleMouseLeave}
            sx={{
              border: index === activeRole ? `2px solid ${weekData.color}` : '2px solid transparent',
              backgroundColor: index === activeRole ? `${weekData.colorLight}` : '#fff',
            }}
          >
            {/* Click Me Overlay */}
            <Box 
              className={classes.clickMeOverlay}
              sx={{ 
                opacity: hoveredRole === index ? 0.9 : 0,
              }}
            >
              <TouchAppIcon className={classes.clickMeIcon} />
              <Typography className={classes.clickMeText}>
                Click to explore
              </Typography>
            </Box>
            
            <Box 
              className={classes.iconContainer} 
              sx={{ backgroundColor: `${weekData.color}20` }}
            >
              <CalendarMonthIcon sx={{ color: weekData.color }} />
            </Box>
            <Typography className={classes.weekLabel}>
              {weekData.week}
            </Typography>
            <Typography className={classes.roleName} sx={{ color: weekData.color }}>
              {weekData.role}
            </Typography>
            <Typography className={classes.description}>
              {weekData.description}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Mobile Swiper */}
      <Box className={classes.mobileCardSwiper}>
        {/* Navigation Arrows */}
        <IconButton 
          className={`${classes.mobileNavArrow} ${classes.prevArrow}`}
          ref={prevRef}
          onClick={handlePrevClick}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        
        <IconButton 
          className={`${classes.mobileNavArrow} ${classes.nextArrow}`}
          ref={nextRef}
          onClick={handleNextClick}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        
        <div className="role-swiper">
          <div className="swiper-wrapper">
            {tracks[activeTab].weeks.map((weekData, index) => (
              <div className="swiper-slide" key={index}>
                <Box 
                  className={`${classes.weekCard} ${
                    index === activeRole ? classes.activeCard : ''
                  }`}
                  sx={{
                    border: index === activeRole ? `2px solid ${weekData.color}` : '2px solid transparent',
                    backgroundColor: index === activeRole ? `${weekData.colorLight}` : '#fff',
                  }}
                  onClick={() => handleRoleClick(index)}
                >
                  <Box 
                    className={classes.iconContainer} 
                    sx={{ backgroundColor: `${weekData.color}20` }}
                  >
                    <CalendarMonthIcon sx={{ color: weekData.color }} />
                  </Box>
                  <Typography className={classes.weekLabel}>
                    {weekData.week}
                  </Typography>
                  <Typography className={classes.roleName} sx={{ color: weekData.color }}>
                    {weekData.role}
                  </Typography>
                  <Typography className={classes.description}>
                    {weekData.description}
                  </Typography>
                </Box>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination dots for mobile */}
        <Box className={classes.swiperPagination}>
          {tracks[activeTab].weeks.map((_, index) => (
            <Box
              key={index}
              className={`${classes.paginationDot} ${
                index === activeMobileSlide ? classes.activeDot : ''
              }`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </Box>
      </Box>

      {/* Data visualization and company info */}
      <Box className={classes.contentGrid}>
        {/* Left Section - Chart */}
        <Box className={classes.visualizationBox}>
          <Typography className={classes.chartTitle}>
            {tracks[activeTab].weeks[activeRole].role} Demand in 2025
          </Typography>
          <Box className={classes.chartContainer}>
            <canvas ref={chartRef} />
          </Box>
        </Box>

        {/* Right Section - Company Info */}
        <Box className={classes.companyInfoBox}>
          <Typography className={classes.companyInfoTitle}>
            Career Opportunities
          </Typography>
          <Box className={classes.companyInfo}>
            <Box className={classes.companyItem}>
              <LocationOnIcon sx={{ color: '#2A2B6A', fontSize: '20px' }} />
              <Typography className={classes.companyText}>
                Top Locations: {tracks[activeTab].weeks[activeRole].companies.topLocations.join(', ')}
              </Typography>
            </Box>
            <Box className={classes.companyItem}>
              <TrendingUpIcon sx={{ color: '#2A2B6A', fontSize: '20px' }} />
              <Typography className={classes.companyText}>
                Average Salary: {tracks[activeTab].weeks[activeRole].companies.avgSalary}
              </Typography>
            </Box>
            <Box className={classes.companyItem}>
              <BusinessIcon sx={{ color: '#2A2B6A', fontSize: '20px' }} />
              <Typography className={classes.companyText}>
                Current Openings: {tracks[activeTab].weeks[activeRole].companies.openings}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Hiring Partners Section */}
      <Box className={classes.partnersSection}>
        <Typography className={classes.partnersTitle}>
          Hiring Partners for {tracks[activeTab].name}
        </Typography>
        <Box className={classes.partnersContainer}>
          {partnersForTabs[activeTab].map(({ Component, alt }, index) => (
            <Box key={index} className={classes.partnerCard}>
              <Component className={classes.partnerLogo} alt={alt} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Action Buttons */}
      <Box className={classes.actionsContainer}>
        <Button 
          variant="contained" 
          className={classes.viewButton}
          onClick={handleViewDetails}
        >
          View Full Curriculum
        </Button>
      </Box>
    </Box>
  );
};

export default TrainingPlanComponent;
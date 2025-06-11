// // // src/components/landing/WhoIsItFor.jsx
// // import React, { useEffect, useRef } from 'react';
// // import { Box, Typography, Container } from '@mui/material';
// // import { CheckCircle, Person, Work, TrendingUp, Code } from '@mui/icons-material';
// // import makeStylesWithTheme from '../../styles/makeStylesAdapter';

// // const useStyles = makeStylesWithTheme((theme) => ({
// //   audienceSection: {
// //     background: '#fff',
// //     padding: '4rem 1.5rem',
// //     position: 'relative',
// //     overflow: 'hidden',
// //     // Add SVG grid background as ::before
// //     '&::before': {
// //       content: '""',
// //       position: 'absolute',
// //       top: 0,
// //       left: 0,
// //       right: 0,
// //       bottom: 0,
// //       zIndex: 0,
// //       background: `url("data:image/svg+xml,%3Csvg width='800' height='600' viewBox='0 0 800 600' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L100 80L200 40L300 120L400 60L500 140L600 100L700 180L800 120' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 200L100 120L200 180L300 100L400 160L500 80L600 140L700 60L800 100' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 400L100 320L200 380L300 300L400 360L500 280L600 340L700 260L800 300' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 600L100 520L200 580L300 500L400 560L500 480L600 540L700 460L800 500' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M0 0L0 200L0 400L0 600' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M100 80L100 120L100 320L100 520' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M200 40L200 180L200 380L200 580' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M300 120L300 100L300 300L300 500' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M400 60L400 160L400 360L400 560' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M500 140L500 80L500 280L500 480' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M600 100L600 140L600 340L600 540' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M700 180L700 60L700 260L700 460' stroke='%23F3F3F3' stroke-width='1'/%3E%3Cpath d='M800 120L800 100L800 300L800 500' stroke='%23F3F3F3' stroke-width='1'/%3E%3C/svg%3E") repeat`,
// //       backgroundSize: 'cover',
// //       pointerEvents: 'none',
// //       opacity: 1,
// //     },
// //     zIndex: 1,
// //     '@media (max-width: 1200px)': {
// //       padding: '3.5rem 1.2rem',
// //     },
// //     '@media (max-width: 960px)': {
// //       padding: '3rem 1rem',
// //     },
// //     '@media (max-width: 768px)': {
// //       padding: '2.5rem 0.8rem',
// //     },
// //     '@media (max-width: 600px)': {
// //       padding: '2rem 0.8rem',
// //     },
// //     '@media (max-width: 480px)': {
// //       padding: '1.8rem 0.5rem',
// //     },
// //     '@media (max-width: 375px)': {
// //       padding: '1.5rem 0.3rem',
// //     },
// //   },
// //   sectionTitle: {
// //     fontSize: '2.2rem !important',
// //     fontWeight: '800 !important',
// //     color: '#2A2B6A !important',
// //     textAlign: 'center',
// //     marginBottom: '2.5rem !important',
// //     background: '#fff',
// //     borderRadius: '18px',
// //     display: 'inline-block',
// //     padding: '16px 32px',
// //     position: 'relative',
// //     zIndex: 2,
// //     boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
// //     border: '1px solid #f0f0f0',
// //     '& span': {
// //       color: '#FFC614 !important',
// //     },
// //     '@media (max-width: 1200px)': {
// //       fontSize: '2rem !important',
// //       padding: '14px 28px',
// //       marginBottom: '2rem !important',
// //     },
// //     '@media (max-width: 960px)': {
// //       fontSize: '1.8rem !important',
// //       marginBottom: '1.8rem !important',
// //       padding: '12px 24px',
// //       borderRadius: '15px',
// //     },
// //     '@media (max-width: 768px)': {
// //       fontSize: '1.6rem !important',
// //       padding: '10px 20px',
// //       borderRadius: '12px',
// //       marginBottom: '1.5rem !important',
// //     },
// //     '@media (max-width: 600px)': {
// //       fontSize: '1.4rem !important',
// //       padding: '8px 16px',
// //       marginBottom: '1.2rem !important',
// //     },
// //     '@media (max-width: 480px)': {
// //       fontSize: '1.3rem !important',
// //       padding: '6px 12px',
// //       marginBottom: '1rem !important',
// //     },
// //     '@media (max-width: 375px)': {
// //       fontSize: '1.2rem !important',
// //       padding: '6px 10px',
// //       borderRadius: '8px',
// //       marginBottom: '0.8rem !important',
// //     },
// //   },

// //   // WHEEL DESIGN (Desktop/Tablet)
// //   wheelContainer: {
// //     position: 'relative',
// //     width: '100%',
// //     height: 'auto',
// //     margin: '0 auto',
// //     zIndex: 2,
// //     paddingTop: '1.5rem',
// //     paddingBottom: '1.5rem',
// //     display: 'block',
// //     '@media (max-width: 1200px)': {
// //       paddingTop: '1.2rem',
// //       paddingBottom: '1.2rem',
// //     },
// //     '@media (max-width: 960px)': {
// //       paddingTop: '1rem',
// //       paddingBottom: '1rem',
// //     },
// //     '@media (max-width: 768px)': {
// //       display: 'none', // Hide wheel on mobile
// //     },
// //   },
// //   wheel: {
// //     position: 'relative',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     gap: '1.8rem',
// //     flexWrap: 'nowrap',
// //     '&::before': {
// //       content: '""',
// //       position: 'absolute',
// //       left: '10%',
// //       right: '10%',
// //       top: '50%',
// //       height: '3px',
// //       background: '#FFC614',
// //       zIndex: 1,
// //       transform: 'translateY(-50%)',
// //     },
// //     '@media (max-width: 1200px)': {
// //       gap: '1.5rem',
// //     },
// //     '@media (max-width: 960px)': {
// //       gap: '1.2rem',
// //       '&::before': {
// //         left: '5%',
// //         right: '5%',
// //       },
// //     },
// //   },
// //   wheelItem: {
// //     position: 'relative',
// //     width: 160,
// //     height: 160,
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     background: '#fff',
// //     borderRadius: '50%',
// //     boxShadow: '0 4px 18px 0 rgba(42,43,106,0.10)',
// //     border: '3px solid #FFC614',
// //     transition: 'transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s',
// //     cursor: 'pointer',
// //     padding: '14px',
// //     zIndex: 2,
// //     '&:hover': {
// //       transform: 'scale(1.08)',
// //       boxShadow: '0 8px 32px 0 #ffc61455, 0 0 0 4px #fff',
// //       borderColor: '#2A2B6A',
// //     },
// //     '@media (max-width: 1200px)': {
// //       width: 140,
// //       height: 140,
// //       padding: '12px',
// //     },
// //     '@media (max-width: 960px)': {
// //       width: 120,
// //       height: 120,
// //       padding: '10px',
// //     },
// //   },
// //   wheelText: {
// //     fontSize: '0.9rem',
// //     color: '#2A2B6A',
// //     fontWeight: 600,
// //     textAlign: 'center',
// //     lineHeight: 1.3,
// //     zIndex: 3,
// //     wordBreak: 'break-word',
// //     maxWidth: '100%',
// //     '@media (max-width: 1200px)': {
// //       fontSize: '0.85rem',
// //     },
// //     '@media (max-width: 960px)': {
// //       fontSize: '0.8rem',
// //     },
// //   },
// //   wheelCenter: {
// //     position: 'relative',
// //     width: 140,
// //     height: 140,
// //     background: 'radial-gradient(circle at 60% 40%, #FFC614 80%, #FFD95C 100%)',
// //     borderRadius: '50%',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     zIndex: 4,
// //     boxShadow: '0 8px 32px 0 rgba(42,43,106,0.13)',
// //     border: '4px solid #fff',
// //     transform: 'none',
// //     left: 'auto',
// //     top: 'auto',
// //     '@media (max-width: 1200px)': {
// //       width: 120,
// //       height: 120,
// //     },
// //     '@media (max-width: 960px)': {
// //       width: 110,
// //       height: 110,
// //     },
// //   },
// //   wheelCenterText: {
// //     color: '#2A2B6A',
// //     fontWeight: 700,
// //     fontSize: '1.1rem',
// //     textAlign: 'center',
// //     '@media (max-width: 1200px)': {
// //       fontSize: '1rem',
// //     },
// //     '@media (max-width: 960px)': {
// //       fontSize: '0.9rem',
// //     },
// //   },

// //   // POINTS DESIGN (Mobile)
// //   pointsContainer: {
// //     display: 'none',
// //     '@media (max-width: 768px)': {
// //       display: 'block',
// //       width: '100%',
// //       maxWidth: '600px',
// //       margin: '0 auto',
// //       padding: '0 1rem',
// //     },
// //     '@media (max-width: 600px)': {
// //       padding: '0 0.5rem',
// //     },
// //     '@media (max-width: 480px)': {
// //       padding: '0 0.3rem',
// //     },
// //     '@media (max-width: 375px)': {
// //       padding: '0 0.1rem',
// //     },
// //   },
// //   pointsList: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '1.2rem',
// //     '@media (max-width: 600px)': {
// //       gap: '1rem',
// //     },
// //     '@media (max-width: 480px)': {
// //       gap: '0.8rem',
// //     },
// //     '@media (max-width: 375px)': {
// //       gap: '0.6rem',
// //     },
// //   },
// //   pointItem: {
// //     display: 'flex',
// //     alignItems: 'flex-start',
// //     gap: '1rem',
// //     padding: '1.2rem',
// //     background: '#fff',
// //     borderRadius: '16px',
// //     boxShadow: '0 4px 20px rgba(42, 43, 106, 0.08)',
// //     border: '2px solid #f0f2ff',
// //     transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
// //     cursor: 'pointer',
// //     position: 'relative',
// //     overflow: 'hidden',
// //     '&::before': {
// //       content: '""',
// //       position: 'absolute',
// //       top: 0,
// //       left: 0,
// //       right: 0,
// //       height: '3px',
// //       background: 'linear-gradient(90deg, #FFC614, #2A2B6A)',
// //       transform: 'translateX(-100%)',
// //       transition: 'transform 0.3s ease',
// //     },
// //     '&:hover': {
// //       transform: 'translateY(-4px)',
// //       boxShadow: '0 8px 30px rgba(42, 43, 106, 0.15)',
// //       border: '2px solid #FFC614',
// //       '&::before': {
// //         transform: 'translateX(0)',
// //       },
// //       '& $pointIcon': {
// //         transform: 'scale(1.1) rotate(5deg)',
// //         background: 'linear-gradient(135deg, #FFC614, #2A2B6A)',
// //       },
// //     },
// //     '&.active': {
// //       border: '2px solid #FFC614',
// //       boxShadow: '0 8px 30px rgba(255, 198, 20, 0.3)',
// //       '&::before': {
// //         transform: 'translateX(0)',
// //       },
// //       '& $pointIcon': {
// //         background: 'linear-gradient(135deg, #FFC614, #2A2B6A)',
// //         transform: 'scale(1.05)',
// //       },
// //     },
// //     '@media (max-width: 600px)': {
// //       padding: '1rem',
// //       gap: '0.8rem',
// //       borderRadius: '12px',
// //     },
// //     '@media (max-width: 480px)': {
// //       padding: '0.8rem',
// //       gap: '0.6rem',
// //       borderRadius: '10px',
// //     },
// //     '@media (max-width: 375px)': {
// //       padding: '0.6rem',
// //       gap: '0.5rem',
// //       borderRadius: '8px',
// //     },
// //   },
// //   pointIcon: {
// //     width: '48px',
// //     height: '48px',
// //     borderRadius: '12px',
// //     background: 'linear-gradient(135deg, #2A2B6A, #4a4d9e)',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     color: '#fff',
// //     fontSize: '1.5rem',
// //     flexShrink: 0,
// //     transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
// //     '@media (max-width: 600px)': {
// //       width: '40px',
// //       height: '40px',
// //       fontSize: '1.3rem',
// //       borderRadius: '10px',
// //     },
// //     '@media (max-width: 480px)': {
// //       width: '36px',
// //       height: '36px',
// //       fontSize: '1.1rem',
// //       borderRadius: '8px',
// //     },
// //     '@media (max-width: 375px)': {
// //       width: '32px',
// //       height: '32px',
// //       fontSize: '1rem',
// //       borderRadius: '6px',
// //     },
// //   },
// //   pointContent: {
// //     flex: 1,
// //     display: 'flex',
// //     flexDirection: 'column',
// //   },
// //   pointTitle: {
// //     fontSize: '1.1rem !important',
// //     fontWeight: '700 !important',
// //     color: '#2A2B6A !important',
// //     marginBottom: '0.3rem !important',
// //     lineHeight: '1.3 !important',
// //     '@media (max-width: 600px)': {
// //       fontSize: '1rem !important',
// //       marginBottom: '0.2rem !important',
// //     },
// //     '@media (max-width: 480px)': {
// //       fontSize: '0.9rem !important',
// //     },
// //     '@media (max-width: 375px)': {
// //       fontSize: '0.85rem !important',
// //     },
// //   },
// //   pointDescription: {
// //     fontSize: '0.85rem !important',
// //     color: '#666 !important',
// //     lineHeight: '1.4 !important',
// //     margin: '0 !important',
// //     '@media (max-width: 600px)': {
// //       fontSize: '0.8rem !important',
// //     },
// //     '@media (max-width: 480px)': {
// //       fontSize: '0.75rem !important',
// //     },
// //     '@media (max-width: 375px)': {
// //       fontSize: '0.7rem !important',
// //     },
// //   },
// //   mobileBrandContainer: {
// //     display: 'none',
// //     '@media (max-width: 768px)': {
// //       display: 'flex',
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //       marginTop: '2rem',
// //       marginBottom: '1rem',
// //     },
// //     '@media (max-width: 600px)': {
// //       marginTop: '1.5rem',
// //       marginBottom: '0.8rem',
// //       zIndex: 0,
// //     },
// //     '@media (max-width: 480px)': {
// //       marginTop: '1.2rem',
// //       marginBottom: '0.6rem',
// //       zIndex: 0,
// //     },
// //     '@media (max-width: 375px)': {
// //       marginTop: '1rem',
// //       marginBottom: '0.5rem',
// //       zIndex: 0,
// //     },
// //   },
// //   mobileBrand: {
// //     background: 'linear-gradient(135deg, #FFC614, #FFD95C)',
// //     borderRadius: '50px',
// //     padding: '12px 24px',
// //     boxShadow: '0 8px 25px rgba(255, 198, 20, 0.3)',
// //     '@media (max-width: 600px)': {
// //       padding: '10px 20px',
// //       borderRadius: '40px',
// //     },
// //     '@media (max-width: 480px)': {
// //       padding: '8px 16px',
// //       borderRadius: '30px',
// //     },
// //     '@media (max-width: 375px)': {
// //       padding: '6px 12px',
// //       borderRadius: '25px',
// //     },
// //   },
// //   mobileBrandText: {
// //     color: '#2A2B6A',
// //     fontWeight: '700 !important',
// //     fontSize: '1rem !important',
// //     textAlign: 'center',
// //     '@media (max-width: 600px)': {
// //       fontSize: '0.9rem !important',
// //     },
// //     '@media (max-width: 480px)': {
// //       fontSize: '0.8rem !important',
// //     },
// //     '@media (max-width: 375px)': {
// //       fontSize: '0.75rem !important',
// //     },
// //   },
// // }));

// // const WhoIsItFor = () => {
// //   const classes = useStyles();
// //   const wheelRef = useRef();
// //   const [activeIdx, setActiveIdx] = React.useState(0);

// //   const targetAudience = [
// //     {
// //       text: "Students and freshers entering the job market",
// //       title: "Students & Freshers",
// //       description: "Perfect for new graduates and career starters",
// //       icon: <Person />
// //     },
// //     {
// //       text: "Working professionals upgrading roles or switching careers",
// //       title: "Career Switchers",
// //       description: "Ideal for professionals changing career paths",
// //       icon: <Work />
// //     },
// //     {
// //       text: "Individuals with career gaps needing impactful resumes",
// //       title: "Career Gap Recovery",
// //       description: "Get back into the workforce with confidence",
// //       icon: <TrendingUp />
// //     },
// //     {
// //       text: "Tech enthusiasts wanting to showcase Gen AI & project skills",
// //       title: "Tech Enthusiasts",
// //       description: "Showcase your AI and technical project skills",
// //       icon: <Code />
// //     }
// //   ];

// //   // Cycle highlight effect
// //   React.useEffect(() => {
// //     const interval = setInterval(() => {
// //       setActiveIdx((prev) => (prev + 1) % targetAudience.length);
// //     }, 2500);
// //     return () => clearInterval(interval);
// //   }, [targetAudience.length]);

// //   return (
// //     <Box className={classes.audienceSection}>
// //       <Container maxWidth="lg">
// //         <Box display="flex" justifyContent="center" alignItems="center" width="100%" mb={4}>
// //           <Typography variant="h2" className={classes.sectionTitle}>
// //             Who is it <span>for?</span>
// //           </Typography>
// //         </Box>
        
// //         {/* WHEEL DESIGN FOR DESKTOP/TABLET */}
// //         <Box className={classes.wheelContainer}>
// //           <Box className={classes.wheel} ref={wheelRef}>
// //             {targetAudience.slice(0, 2).map((audience, idx) => (
// //               <Box
// //                 key={idx}
// //                 className={classes.wheelItem}
// //                 style={activeIdx === idx ? {
// //                   transform: 'scale(1.08)',
// //                   boxShadow: '0 8px 32px 0 #ffc61455, 0 0 0 4px #fff',
// //                   borderColor: '#2A2B6A'
// //                 } : {}}
// //               >
// //                 <Typography className={classes.wheelText}>{audience.text}</Typography>
// //               </Box>
// //             ))}
// //             <Box className={classes.wheelCenter}>
// //               <Typography className={classes.wheelCenterText}>
// //                 Giga<br />Resume
// //               </Typography>
// //             </Box>
// //             {targetAudience.slice(2, 4).map((audience, idx) => (
// //               <Box
// //                 key={idx + 2}
// //                 className={classes.wheelItem}
// //                 style={activeIdx === idx + 2 ? {
// //                   transform: 'scale(1.08)',
// //                   boxShadow: '0 8px 32px 0 #ffc61455, 0 0 0 4px #fff',
// //                   borderColor: '#2A2B6A'
// //                 } : {}}
// //               >
// //                 <Typography className={classes.wheelText}>{audience.text}</Typography>
// //               </Box>
// //             ))}
// //           </Box>
// //         </Box>

// //         {/* POINTS DESIGN FOR MOBILE */}
// //         <Box className={classes.pointsContainer}>
// //           <Box className={classes.pointsList}>
// //             {targetAudience.map((audience, idx) => (
// //               <Box
// //                 key={idx}
// //                 className={`${classes.pointItem} ${activeIdx === idx ? 'active' : ''}`}
// //               >
// //                 <Box className={classes.pointIcon}>
// //                   {audience.icon}
// //                 </Box>
// //                 <Box className={classes.pointContent}>
// //                   <Typography className={classes.pointTitle}>
// //                     {audience.title}
// //                   </Typography>
// //                   <Typography className={classes.pointDescription}>
// //                     {audience.description}
// //                   </Typography>
// //                 </Box>
// //               </Box>
// //             ))}
// //           </Box>
          
// //           <Box className={classes.mobileBrandContainer}>
// //             <Box className={classes.mobileBrand}>
// //               <Typography className={classes.mobileBrandText}>
// //                 Giga Resume Builder
// //               </Typography>
// //             </Box>
// //           </Box>
// //         </Box>
// //       </Container>
// //     </Box>
// //   );
// // };

// // export default WhoIsItFor;
// import React from 'react';
// import { makeStyles } from '@mui/styles';
// import { Container, Typography, Box, Paper } from '@mui/material';

// const useStyles = makeStyles({
//   section: {
//     padding: '80px 0',
//     position: 'relative',
//     background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
//     borderTop: '1px solid rgba(0, 0, 0, 0.05)',
//     borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
//     boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.03)',
//     overflow: 'hidden',
//   },
//   title: {
//     fontWeight: 700,
//     marginBottom: '48px',
//     position: 'relative',
//     textAlign: 'center',
//     fontSize: '2.5rem',
//       },
//   subtitle: {
//     textAlign: 'center',
//     marginBottom: '20px !important',
//     // maxWidth: '800px',
//     // margin: '0 auto 60px',
//     fontSize: '1.25rem',
//     lineHeight: 1.6,
//     color: '#546e7a',
//   },
//   featuresContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     gap: '24px',
//   },
//   featureBox: {
//     flex: '1 1 260px',
//     maxWidth: 'calc(25% - 18px)',
//     margin: '0',
//     '@media (max-width: 1200px)': {
//       maxWidth: 'calc(50% - 12px)',
//     },
//     '@media (max-width: 600px)': {
//       maxWidth: '100%',
//     },
//   },
//   featureItem: {
//     padding: '24px',
//     height: '100%',
//     transition: 'all 0.3s ease',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//     '&:hover': {
//       transform: 'translateY(-5px)',
//     },
//   },
//   iconContainer: {
//     width: '110px',
//     height: '110px',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: '24px',
//     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
//     position: 'relative',
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       top: '5px',
//       left: '5px',
//       right: '5px',
//       bottom: '5px',
//       borderRadius: '50%',
//       background: 'rgba(255, 255, 255, 0.2)',
//     },
//   },
//   icon1: {
//     background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
//   },
//   icon2: {
//     background: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)',
//   },
//   icon3: {
//     background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
//   },
//   icon4: {
//     background: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
//   },
//   iconImg: {
//     width: '50px',
//     height: '50px',
//     filter: 'brightness(0) invert(1)', // Makes icon white
//   },
//   featureTitle: {
//     fontWeight: 600,
//     marginBottom: '16px',
//     fontSize: '1.5rem',
//     color: '#263238',
//   },
//   featureText: {
//     color: '#546e7a',
//     lineHeight: 1.6,
//   },
//   paper: {
//     borderRadius: '16px',
//     background: 'rgba(255, 255, 255, 0.9)',
//     backdropFilter: 'blur(8px)',
//     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
//     height: '100%',
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
//       transform: 'translateY(-5px)',
//     },
//   },
//   decorationCircle: {
//     position: 'absolute',
//     borderRadius: '50%',
//     opacity: 0.1,
//     zIndex: 0,
//   },
//   circle1: {
//     width: '300px',
//     height: '300px',
//     background: '#3a7bd5',
//     top: '-100px',
//     left: '-100px',
//   },
//   circle2: {
//     width: '200px',
//     height: '200px',
//     background: '#43cea2',
//     bottom: '50px',
//     right: '100px',
//   },
//   circle3: {
//     width: '150px',
//     height: '150px',
//     background: '#ff5e62',
//     top: '200px',
//     right: '50px',
//   },
// });

// const WhoIsItFor = () => {
//   const classes = useStyles();

//   const features = [
//     {
//       icon: "👩‍💼",
//       title: "Job Seekers",
//       description: "Perfect for professionals looking to stand out in competitive job markets with a resume that highlights their unique skills and experiences.",
//       iconClass: classes.icon1
//     },
//     {
//       icon: "🎓",
//       title: "Recent Graduates",
//       description: "Ideal for graduates entering the workforce who need to showcase their academic achievements and relevant experiences effectively.",
//       iconClass: classes.icon2
//     },
//     {
//       icon: "👨‍💻",
//       title: "Career Changers",
//       description: "Tailored for professionals transitioning to new industries who need to emphasize transferable skills and relevant qualifications.",
//       iconClass: classes.icon3
//     },
//     {
//       icon: "💼",
//       title: "Executives",
//       description: "Designed for senior professionals who need to highlight leadership abilities, strategic vision, and significant career accomplishments.",
//       iconClass: classes.icon4
//     },
//   ];

//   return (
//     <section className={classes.section}>
//       {/* Decorative elements */}
//       <div className={`${classes.decorationCircle} ${classes.circle1}`}></div>
//       <div className={`${classes.decorationCircle} ${classes.circle2}`}></div>
//       <div className={`${classes.decorationCircle} ${classes.circle3}`}></div>
      
//       <Container maxWidth="lg">
//         <Typography variant="h2" className={classes.title}>
//           Who Is It For?
//         </Typography>
//         <Typography variant="body1" className={classes.subtitle}>
//           Our resume builder is designed to help professionals at all career stages create impactful resumes that showcase their unique value proposition.
//         </Typography>
        
//         <Box className={classes.featuresContainer}>
//           {features.map((feature, index) => (
//             <Box className={classes.featureBox} key={index}>
//               <Paper className={classes.paper} elevation={0}>
//                 <Box className={classes.featureItem}>
//                   <div className={`${classes.iconContainer} ${feature.iconClass}`}>
//                     <Typography variant="h4" style={{ fontSize: '32px' }}>
//                       {feature.icon}
//                     </Typography>
//                   </div>
//                   <Typography variant="h5" className={classes.featureTitle}>
//                     {feature.title}
//                   </Typography>
//                   <Typography variant="body2" className={classes.featureText}>
//                     {feature.description}
//                   </Typography>
//                 </Box>
//               </Paper>
//             </Box>
//           ))}
//         </Box>
//       </Container>
//     </section>
//   );
// };

// export default WhoIsItFor;
import React from 'react';
import { Briefcase, GraduationCap, Monitor, Building2 } from 'lucide-react';

const useStyles = () => ({
  section: {
    padding: '20px 0',
    position: 'relative',
    // background: '#0f0f3a',
    // background: '#1a1a4a',
    // background: '#252560',
    // background: '#303076',
    // background: '#3b3b8c  ',
    // background: '#4646a2',
    // background: '#5151b8',
    // background: '#5c5cce',
    // background: '#6767e4',
    // background: '#7272fa  ',
    background: '#f5f5f5',
    // background: '#7272fa  ',
    // background: '#7272fa  ',
    // background: '#7272fa  ',
    // background: '#7272fa  ',
    // background: '#7272fa  ',
    overflow: 'hidden',
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
    backgroundSize: '30px 30px',
    pointerEvents: 'none',
    zIndex: 1,
  },
  contentContainer: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  title: {
    fontWeight: 800,
    fontSize: '3.5rem',
    color: 'white',
    textAlign: 'left',
    marginBottom: '32px',
    position: 'relative',
    display: 'inline-block',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  subtitle: {
    color: '#94a3b8',
    marginBottom: '30px',
    fontSize: '1.2rem',
    maxWidth: '700px',
    lineHeight: 1.7,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  featuresContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    marginTop: '40px',
  },
  featureBox: {
    flex: '1 1 260px',
    maxWidth: 'calc(25% - 30px)',
  },
  featureItem: {
    position: 'relative',
    padding: '20px 0',
    transition: 'transform 0.3s ease',
  },
  iconWrapper: {
    display: 'inline-flex',
    marginBottom: '25px',
    position: 'relative',
  },
  iconBox: {
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    fontSize: '36px',
    position: 'relative',
    zIndex: 2,
  },
  iconShadow: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    borderRadius: '16px',
    top: '10px',
    left: '10px',
    opacity: 0.4,
    zIndex: 1,
  },
  icon1: {
    background: '#06b6d4',
    boxShadow: '0 10px 15px rgba(6, 182, 212, 0.3)',
  },
  iconShadow1: {
    background: '#06b6d4',
  },
  icon2: {
    background: '#f97316',
    boxShadow: '0 10px 15px rgba(249, 115, 22, 0.3)',
  },
  iconShadow2: {
    background: '#f97316',
  },
  icon3: {
    background: '#8b5cf6',
    boxShadow: '0 10px 15px rgba(139, 92, 246, 0.3)',
  },
  iconShadow3: {
    background: '#8b5cf6',
  },
  icon4: {
    background: '#ec4899',
    boxShadow: '0 10px 15px rgba(236, 72, 153, 0.3)',
  },
  iconShadow4: {
    background: '#ec4899',
  },
  iconStyle: {
    width: '36px',
    height: '36px',
    color: 'white',
  },
  featureTitle: {
    fontWeight: 700,
    fontSize: '1.75rem',
    color: 'white',
    marginBottom: '16px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  featureDescription: {
    color: '#94a3b8',
    lineHeight: 1.7,
    fontSize: '1rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  decorativeCircle: {
    position: 'absolute',
    borderRadius: '50%',
    zIndex: 0,
  },
  circle1: {
    width: '400px',
    height: '400px',
    background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, rgba(59, 130, 246, 0.1) 100%)',
    top: '-200px',
    right: '-200px',
  },
  circle2: {
    width: '600px',
    height: '600px',
    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(124, 58, 237, 0.1) 100%)',
    bottom: '-300px',
    left: '-300px',
  },
});

const WhoIsItFor = () => {
  const classes = useStyles();

  const features = [
    {
      icon: <Briefcase style={classes.iconStyle} />,
      title: "Job Seekers",
      description: "Perfect for professionals looking to stand out in competitive job markets with a resume that highlights their unique skills and experiences.",
      iconClass: classes.icon1,
      shadowClass: classes.iconShadow1
    },
    {
      icon: <GraduationCap style={classes.iconStyle} />,
      title: "Recent Graduates",
      description: "Ideal for graduates entering the workforce who need to showcase their academic achievements and relevant experiences effectively.",
      iconClass: classes.icon2,
      shadowClass: classes.iconShadow2
    },
    {
      icon: <Monitor style={classes.iconStyle} />,
      title: "Career Changers",
      description: "Tailored for professionals transitioning to new industries who need to emphasize transferable skills and relevant qualifications.",
      iconClass: classes.icon3,
      shadowClass: classes.iconShadow3
    },
    {
      icon: <Building2 style={classes.iconStyle} />,
      title: "Executives",
      description: "Designed for senior professionals who need to highlight leadership abilities, strategic vision, and significant career accomplishments.",
      iconClass: classes.icon4,
      shadowClass: classes.iconShadow4
    },
  ];

  return (
    <section style={classes.section}>
      <div style={classes.backgroundPattern}></div>
      <div style={{...classes.decorativeCircle, ...classes.circle1}}></div>
      <div style={{...classes.decorativeCircle, ...classes.circle2}}></div>
      
      <div style={classes.contentContainer}>
        <h2 style={classes.title}>
          Who Is It For?
        </h2>
        <p style={classes.subtitle}>
          Our resume builder is designed to help professionals at all career stages create impactful resumes that showcase their unique value proposition.
        </p>
        
        <div style={classes.featuresContainer}>
          {features.map((feature, index) => (
            <div style={classes.featureBox} key={index}>
              <div 
                style={{
                  ...classes.featureItem,
                  transform: 'translateY(0px)',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0px)'}
              >
                <div style={classes.iconWrapper}>
                  <div style={{...classes.iconBox, ...feature.iconClass}}>
                    {feature.icon}
                  </div>
                  <div style={{...classes.iconShadow, ...feature.shadowClass}}></div>
                </div>
                <h5 style={classes.featureTitle}>
                  {feature.title}
                </h5>
                <p style={classes.featureDescription}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
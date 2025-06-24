// // // // // import React from 'react';
// // // // // import { Box, Typography, Container } from '@mui/material';
// // // // // import { makeStyles } from '@mui/styles';

// // // // // const useStyles = makeStyles({
// // // // //   section: {
// // // // //     padding: '40px 0',
// // // // //     position: 'relative',
// // // // //     overflow: 'hidden',
// // // // //     background: 'linear-gradient(180deg, #101138 0%, #1e1c44 100%)',
// // // // //     '&:before': {
// // // // //       content: '""',
// // // // //       position: 'absolute',
// // // // //       top: 0,
// // // // //       left: 0,
// // // // //       right: 0,
// // // // //       bottom: 0,
// // // // //       backgroundImage: 
// // // // //         'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
// // // // //       backgroundSize: '30px 30px',
// // // // //       zIndex: 1,
// // // // //     },
// // // // //     '@media (max-width: 1200px)': {
// // // // //       padding: '35px 0',
// // // // //       '&:before': {
// // // // //         backgroundSize: '25px 25px',
// // // // //       },
// // // // //     },
// // // // //     '@media (max-width: 960px)': {
// // // // //       padding: '30px 0',
// // // // //       '&:before': {
// // // // //         backgroundSize: '22px 22px',
// // // // //       },
// // // // //     },
// // // // //     '@media (max-width: 600px)': {
// // // // //       padding: '25px 0',
// // // // //       '&:before': {
// // // // //         backgroundSize: '20px 20px',
// // // // //       },
// // // // //     },
// // // // //     '@media (max-width: 480px)': {
// // // // //       padding: '20px 0',
// // // // //       '&:before': {
// // // // //         backgroundSize: '18px 18px',
// // // // //       },
// // // // //     },
// // // // //     '@media (max-width: 375px)': {
// // // // //       padding: '18px 0',
// // // // //       '&:before': {
// // // // //         backgroundSize: '15px 15px',
// // // // //       },
// // // // //     },
// // // // //   },
// // // // //   glowEffect: {
// // // // //     position: 'absolute',
// // // // //     width: '500px',
// // // // //     height: '500px',
// // // // //     borderRadius: '50%',
// // // // //     zIndex: 1,
// // // // //     opacity: 0.3,
// // // // //     filter: 'blur(150px)',
// // // // //     background: '#8a5cf7',
// // // // //     top: '-200px',
// // // // //     right: '-100px',
// // // // //     '@media (max-width: 1200px)': {
// // // // //       width: '400px',
// // // // //       height: '400px',
// // // // //       top: '-150px',
// // // // //       right: '-75px',
// // // // //     },
// // // // //     '@media (max-width: 960px)': {
// // // // //       width: '350px',
// // // // //       height: '350px',
// // // // //       top: '-125px',
// // // // //       right: '-50px',
// // // // //     },
// // // // //     '@media (max-width: 600px)': {
// // // // //       width: '300px',
// // // // //       height: '300px',
// // // // //       top: '-100px',
// // // // //       right: '-25px',
// // // // //     },
// // // // //     '@media (max-width: 480px)': {
// // // // //       width: '250px',
// // // // //       height: '250px',
// // // // //       top: '-75px',
// // // // //       right: '0px',
// // // // //     },
// // // // //     '@media (max-width: 375px)': {
// // // // //       width: '200px',
// // // // //       height: '200px',
// // // // //       top: '-50px',
// // // // //       right: '25px',
// // // // //     },
// // // // //   },
// // // // //   container: {
// // // // //     position: 'relative',
// // // // //     zIndex: 2,
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   title: {
// // // // //     fontSize: '2rem !important',
// // // // //     fontWeight: '700 !important',
// // // // //     marginBottom: '8px !important',
// // // // //     color: 'white !important',
// // // // //     '@media (max-width: 1200px)': {
// // // // //       fontSize: '1.8rem !important',
// // // // //     },
// // // // //     '@media (max-width: 960px)': {
// // // // //       fontSize: '1.6rem !important',
// // // // //     },
// // // // //     '@media (max-width: 600px)': {
// // // // //       fontSize: '1.4rem !important',
// // // // //     },
// // // // //     '@media (max-width: 480px)': {
// // // // //       fontSize: '1.3rem !important',
// // // // //     },
// // // // //     '@media (max-width: 375px)': {
// // // // //       fontSize: '1.2rem !important',
// // // // //     },
// // // // //   },
// // // // //   subtitle: {
// // // // //     fontSize: '1rem !important',
// // // // //     color: 'rgba(255, 255, 255, 0.7) !important',
// // // // //     marginBottom: '30px !important',
// // // // //     maxWidth: '600px',
// // // // //     margin: '0 auto 30px auto !important',
// // // // //     '@media (max-width: 1200px)': {
// // // // //       fontSize: '0.95rem !important',
// // // // //       maxWidth: '550px',
// // // // //     },
// // // // //     '@media (max-width: 960px)': {
// // // // //       fontSize: '0.9rem !important',
// // // // //       maxWidth: '500px',
// // // // //       marginBottom: '25px !important',
// // // // //     },
// // // // //     '@media (max-width: 600px)': {
// // // // //       fontSize: '0.85rem !important',
// // // // //       maxWidth: '90%',
// // // // //       marginBottom: '20px !important',
// // // // //     },
// // // // //     '@media (max-width: 480px)': {
// // // // //       fontSize: '0.8rem !important',
// // // // //       marginBottom: '18px !important',
// // // // //     },
// // // // //     '@media (max-width: 375px)': {
// // // // //       fontSize: '0.75rem !important',
// // // // //       marginBottom: '15px !important',
// // // // //     },
// // // // //   },
// // // // //   fundingButton: {
// // // // //     backgroundColor: '#E91E63 !important',
// // // // //     color: 'white !important',
// // // // //     padding: '6px 15px !important',
// // // // //     borderRadius: '50px !important',
// // // // //     fontSize: '0.9rem !important',
// // // // //     fontWeight: 'bold !important',
// // // // //     display: 'inline-block !important',
// // // // //     marginBottom: '20px !important',
// // // // //     '@media (max-width: 1200px)': {
// // // // //       padding: '5px 13px !important',
// // // // //       fontSize: '0.85rem !important',
// // // // //     },
// // // // //     '@media (max-width: 960px)': {
// // // // //       padding: '5px 12px !important',
// // // // //       fontSize: '0.8rem !important',
// // // // //       marginBottom: '18px !important',
// // // // //     },
// // // // //     '@media (max-width: 600px)': {
// // // // //       padding: '4px 10px !important',
// // // // //       fontSize: '0.75rem !important',
// // // // //       marginBottom: '15px !important',
// // // // //     },
// // // // //     '@media (max-width: 480px)': {
// // // // //       padding: '4px 9px !important',
// // // // //       fontSize: '0.7rem !important',
// // // // //     },
// // // // //     '@media (max-width: 375px)': {
// // // // //       padding: '3px 8px !important',
// // // // //       fontSize: '0.65rem !important',
// // // // //     },
// // // // //   },
// // // // //   stepsContainer: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'center',
// // // // //     gap: '2%',
// // // // //     position: 'relative',
// // // // //     marginTop: '20px',
// // // // //     '@media (max-width: 1200px)': {
// // // // //       gap: '1.5%',
// // // // //       marginTop: '18px',
// // // // //     },
// // // // //     '@media (max-width: 1000px)': {
// // // // //       flexDirection: 'column',
// // // // //       alignItems: 'center',
// // // // //       gap: '50px',
// // // // //     },
// // // // //     '@media (max-width: 960px)': {
// // // // //       gap: '40px',
// // // // //       marginTop: '15px',
// // // // //     },
// // // // //     '@media (max-width: 600px)': {
// // // // //       gap: '30px',
// // // // //       marginTop: '12px',
// // // // //     },
// // // // //     '@media (max-width: 480px)': {
// // // // //       gap: '25px',
// // // // //       marginTop: '10px',
// // // // //     },
// // // // //     '@media (max-width: 375px)': {
// // // // //       gap: '20px',
// // // // //       marginTop: '8px',
// // // // //     },
// // // // //   },
// // // // //   step: {
// // // // //     display: 'flex',
// // // // //     flexDirection: 'column',
// // // // //     alignItems: 'center',
// // // // //     width: '14%',
// // // // //     position: 'relative',
// // // // //     zIndex: 2,
// // // // //     '@media (max-width: 1200px)': {
// // // // //       width: '15%',
// // // // //     },
// // // // //     '@media (max-width: 1000px)': {
// // // // //       width: '80%',
// // // // //       maxWidth: '300px',
// // // // //     },
// // // // //     '@media (max-width: 600px)': {
// // // // //       width: '90%',
// // // // //       maxWidth: '280px',
// // // // //     },
// // // // //     '@media (max-width: 480px)': {
// // // // //       width: '95%',
// // // // //       maxWidth: '260px',
// // // // //     },
// // // // //     '@media (max-width: 375px)': {
// // // // //       width: '100%',
// // // // //       maxWidth: '240px',
// // // // //     },
// // // // //   },
// // // // //   stepNumberContainer: {
// // // // //     width: '60px',
// // // // //     height: '60px',
// // // // //     borderRadius: '50%',
// // // // //     backgroundColor: '#4263EB',
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'center',
// // // // //     marginBottom: '15px',
// // // // //     position: 'relative',
// // // // //     zIndex: 2,
// // // // //     transition: 'all 0.3s ease',
// // // // //     boxShadow: '0 4px 15px rgba(66, 99, 235, 0.3)',
// // // // //     overflow: 'hidden',
// // // // //     '&:hover': {
// // // // //       transform: 'scale(1.1)',
// // // // //       boxShadow: '0 6px 20px rgba(66, 99, 235, 0.4)',
// // // // //     },
// // // // //     '&::after': {
// // // // //       content: '""',
// // // // //       position: 'absolute',
// // // // //       width: '30px',
// // // // //       height: '100%',
// // // // //       background: 'rgba(255, 255, 255, 0.3)',
// // // // //       transform: 'skewX(-30deg) translateX(-150px)',
// // // // //       animation: '$shine 3s infinite',
// // // // //     },
// // // // //     '@media (max-width: 1200px)': {
// // // // //       width: '55px',
// // // // //       height: '55px',
// // // // //     },
// // // // //     '@media (max-width: 960px)': {
// // // // //       width: '50px',
// // // // //       height: '50px',
// // // // //     },
// // // // //     '@media (max-width: 600px)': {
// // // // //       width: '45px',
// // // // //       height: '45px',
// // // // //       marginBottom: '12px',
// // // // //     },
// // // // //     '@media (max-width: 480px)': {
// // // // //       width: '40px',
// // // // //       height: '40px',
// // // // //       marginBottom: '10px',
// // // // //     },
// // // // //     '@media (max-width: 375px)': {
// // // // //       width: '35px',
// // // // //       height: '35px',
// // // // //       marginBottom: '8px',
// // // // //     },
// // // // //   },
// // // // //   stepNumber: {
// // // // //     color: 'white',
// // // // //     fontWeight: 'bold !important',
// // // // //     fontSize: '1.8rem !important',
// // // // //     animation: '$pulse 2s infinite',
// // // // //     '@media (max-width: 1200px)': {
// // // // //       fontSize: '1.6rem !important',
// // // // //     },
// // // // //     '@media (max-width: 960px)': {
// // // // //       fontSize: '1.5rem !important',
// // // // //     },
// // // // //     '@media (max-width: 600px)': {
// // // // //       fontSize: '1.3rem !important',
// // // // //     },
// // // // //     '@media (max-width: 480px)': {
// // // // //       fontSize: '1.1rem !important',
// // // // //     },
// // // // //     '@media (max-width: 375px)': {
// // // // //       fontSize: '1rem !important',
// // // // //     },
// // // // //   },
// // // // //   stepTitle: {
// // // // //     fontSize: '1rem !important',
// // // // //     minWidth: '400px !important',
// // // // //     fontWeight: '600 !important',
// // // // //     marginBottom: '8px !important',
// // // // //     color: 'white !important',
// // // // //     '@media (max-width: 1200px)': {
// // // // //       fontSize: '0.95rem !important',
// // // // //       minWidth: '350px !important',
// // // // //     },
// // // // //     '@media (max-width: 1000px)': {
// // // // //       minWidth: 'unset !important',
// // // // //       maxWidth: '300px',
// // // // //     },
// // // // //     '@media (max-width: 960px)': {
// // // // //       fontSize: '0.9rem !important',
// // // // //       maxWidth: '280px',
// // // // //     },
// // // // //     '@media (max-width: 600px)': {
// // // // //       fontSize: '0.85rem !important',
// // // // //       maxWidth: '260px',
// // // // //       marginBottom: '6px !important',
// // // // //     },
// // // // //     '@media (max-width: 480px)': {
// // // // //       fontSize: '0.8rem !important',
// // // // //       maxWidth: '240px',
// // // // //       marginBottom: '5px !important',
// // // // //     },
// // // // //     '@media (max-width: 375px)': {
// // // // //       fontSize: '0.75rem !important',
// // // // //       maxWidth: '220px',
// // // // //       marginBottom: '4px !important',
// // // // //     },
// // // // //   },
// // // // //   stepDescription: {
// // // // //     fontSize: '0.85rem !important',
// // // // //     color: 'rgba(255, 255, 255, 0.7) !important',
// // // // //     lineHeight: '1.4 !important',
// // // // //     '@media (max-width: 1200px)': {
// // // // //       fontSize: '0.8rem !important',
// // // // //     },
// // // // //     '@media (max-width: 960px)': {
// // // // //       fontSize: '0.75rem !important',
// // // // //       lineHeight: '1.3 !important',
// // // // //     },
// // // // //     '@media (max-width: 600px)': {
// // // // //       fontSize: '0.7rem !important',
// // // // //       lineHeight: '1.2 !important',
// // // // //     },
// // // // //     '@media (max-width: 480px)': {
// // // // //       fontSize: '0.65rem !important',
// // // // //     },
// // // // //     '@media (max-width: 375px)': {
// // // // //       fontSize: '0.6rem !important',
// // // // //     },
// // // // //   },
// // // // //   progressLine: {
// // // // //     position: 'absolute',
// // // // //     height: '2px',
// // // // //     backgroundColor: 'rgba(255, 255, 255, 0.2)',
// // // // //     top: '30px',
// // // // //     left: '10%',
// // // // //     right: '10%',
// // // // //     zIndex: 1,
// // // // //     '@media (max-width: 1200px)': {
// // // // //       top: '27px',
// // // // //     },
// // // // //     '@media (max-width: 1000px)': {
// // // // //       display: 'none',
// // // // //     },
// // // // //   },
// // // // //   '@keyframes shine': {
// // // // //     '0%': {
// // // // //       transform: 'skewX(-30deg) translateX(-150px)',
// // // // //     },
// // // // //     '100%': {
// // // // //       transform: 'skewX(-30deg) translateX(350px)',
// // // // //     },
// // // // //   },
// // // // //   '@keyframes pulse': {
// // // // //     '0%': {
// // // // //       transform: 'scale(1)',
// // // // //     },
// // // // //     '50%': {
// // // // //       transform: 'scale(1.1)',
// // // // //     },
// // // // //     '100%': {
// // // // //       transform: 'scale(1)',
// // // // //     },
// // // // //   },
// // // // // });

// // // // // const StartupFundProcess = () => {
// // // // //   const classes = useStyles();

// // // // //   const steps = [
// // // // //     {
// // // // //       number: 1,
// // // // //       title: "Ideation",
// // // // //       description: "Think of a real-world tech problem worth solving. Conceptualize, validate, and evaluate product-market fit."
// // // // //     },
// // // // //     {
// // // // //       number: 2,
// // // // //       title: "Prototyping",
// // // // //       description: "Design and build your MVP using Gigaversity's labs, tools, and mentor guidance."
// // // // //     },
// // // // //     {
// // // // //       number: 3,
// // // // //       title: "Mentorship",
// // // // //       description: "Get 1:1 sessions with startup founders, tech leaders, and VCs to refine your product."
// // // // //     },
// // // // //     {
// // // // //       number: 4,
// // // // //       title: "Pitch Day",
// // // // //       description: "Present your startup to our in-house incubation panel for feedback and funding."
// // // // //     },
// // // // //     {
// // // // //       number: 5,
// // // // //       title: "Get Funded",
// // // // //       description: "Receive up to ₹1 Lakh to build, scale, and launch your product from our campus."
// // // // //     },
// // // // //     {
// // // // //       number: 6,
// // // // //       title: "Scale your Tech Product",
// // // // //       description: "Grow your MVP into a market-ready product with expert guidance, UX improvements, and go-to-market strategies."
// // // // //     }
// // // // //   ];

// // // // //   return (
// // // // //     <Box className={classes.section}>
// // // // //       <Box className={classes.glowEffect} />
// // // // //       <Container maxWidth="lg" className={classes.container}>
// // // // //         <Typography variant="h2" className={classes.title}>
// // // // //           Get Access to the <span style={{ color: '#FFC614' }}>₹1 Lakh Startup </span>Fund
// // // // //         </Typography>
// // // // //         <Typography variant="body1" className={classes.subtitle}>
// // // // //           Turn your tech idea into reality — right from campus.
// // // // //         </Typography>
        
// // // // //         <Box className={classes.fundingButton}>
// // // // //           ₹1 LAKH FUNDING
// // // // //         </Box>
        
// // // // //         <Box className={classes.stepsContainer}>
// // // // //           <Box className={classes.progressLine}></Box>
          
// // // // //           {steps.map((step) => (
// // // // //             <Box key={step.number} className={classes.step}>
// // // // //               <Box className={classes.stepNumberContainer}>
// // // // //                 <Typography className={classes.stepNumber}>{step.number}</Typography>
// // // // //               </Box>
// // // // //               <Typography className={classes.stepTitle}>{step.title}</Typography>
// // // // //               <Typography className={classes.stepDescription}>{step.description}</Typography>
// // // // //             </Box>
// // // // //           ))}
// // // // //         </Box>
// // // // //       </Container>
// // // // //     </Box>
// // // // //   );
// // // // // };

// // // // // export default StartupFundProcess;
// // // // import React from 'react';
// // // // import { Box, Typography, Container } from '@mui/material';
// // // // import { makeStyles } from '@mui/styles';

// // // // const useStyles = makeStyles({
// // // //   section: {
// // // //     padding: '80px 0',
// // // //     position: 'relative',
// // // //     overflow: 'hidden',
// // // //     background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 50%, #3b82f6 100%)',
// // // //     '@media (max-width: 1200px)': {
// // // //       padding: '70px 0',
// // // //     },
// // // //     '@media (max-width: 960px)': {
// // // //       padding: '60px 0',
// // // //     },
// // // //     '@media (max-width: 600px)': {
// // // //       padding: '50px 0',
// // // //     },
// // // //     '@media (max-width: 480px)': {
// // // //       padding: '40px 0',
// // // //     },
// // // //     '@media (max-width: 375px)': {
// // // //       padding: '35px 0',
// // // //     },
// // // //   },
// // // //   decorativeElements: {
// // // //     position: 'absolute',
// // // //     top: 0,
// // // //     left: 0,
// // // //     right: 0,
// // // //     bottom: 0,
// // // //     zIndex: 1,
// // // //     '&::before': {
// // // //       content: '""',
// // // //       position: 'absolute',
// // // //       width: '300px',
// // // //       height: '300px',
// // // //       borderRadius: '50%',
// // // //       background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
// // // //       top: '10%',
// // // //       left: '10%',
// // // //       animation: '$float 6s ease-in-out infinite',
// // // //     },
// // // //     '&::after': {
// // // //       content: '""',
// // // //       position: 'absolute',
// // // //       width: '200px',
// // // //       height: '200px',
// // // //       borderRadius: '50%',
// // // //       background: 'radial-gradient(circle, rgba(255, 198, 20, 0.1) 0%, transparent 70%)',
// // // //       bottom: '20%',
// // // //       right: '15%',
// // // //       animation: '$float 8s ease-in-out infinite reverse',
// // // //     },
// // // //   },
// // // //   container: {
// // // //     position: 'relative',
// // // //     zIndex: 2,
// // // //     textAlign: 'center',
// // // //   },
// // // //   title: {
// // // //     fontSize: '2.5rem !important',
// // // //     fontWeight: '800 !important',
// // // //     marginBottom: '16px !important',
// // // //     color: '#1e293b !important',
// // // //     textShadow: '0 2px 4px rgba(0,0,0,0.1)',
// // // //     '@media (max-width: 1200px)': {
// // // //       fontSize: '2.2rem !important',
// // // //     },
// // // //     '@media (max-width: 960px)': {
// // // //       fontSize: '2rem !important',
// // // //     },
// // // //     '@media (max-width: 600px)': {
// // // //       fontSize: '1.8rem !important',
// // // //     },
// // // //     '@media (max-width: 480px)': {
// // // //       fontSize: '1.6rem !important',
// // // //     },
// // // //     '@media (max-width: 375px)': {
// // // //       fontSize: '1.4rem !important',
// // // //     },
// // // //   },
// // // //   highlightText: {
// // // //     background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
// // // //     WebkitBackgroundClip: 'text',
// // // //     WebkitTextFillColor: 'transparent',
// // // //     backgroundClip: 'text',
// // // //     fontWeight: '900 !important',
// // // //   },
// // // //   subtitle: {
// // // //     fontSize: '1.2rem !important',
// // // //     color: '#475569 !important',
// // // //     marginBottom: '40px !important',
// // // //     maxWidth: '600px',
// // // //     margin: '0 auto 40px auto !important',
// // // //     lineHeight: '1.6 !important',
// // // //     '@media (max-width: 1200px)': {
// // // //       fontSize: '1.1rem !important',
// // // //       maxWidth: '550px',
// // // //     },
// // // //     '@media (max-width: 960px)': {
// // // //       fontSize: '1rem !important',
// // // //       maxWidth: '500px',
// // // //       marginBottom: '35px !important',
// // // //     },
// // // //     '@media (max-width: 600px)': {
// // // //       fontSize: '0.95rem !important',
// // // //       maxWidth: '90%',
// // // //       marginBottom: '30px !important',
// // // //     },
// // // //     '@media (max-width: 480px)': {
// // // //       fontSize: '0.9rem !important',
// // // //       marginBottom: '25px !important',
// // // //     },
// // // //     '@media (max-width: 375px)': {
// // // //       fontSize: '0.85rem !important',
// // // //       marginBottom: '20px !important',
// // // //     },
// // // //   },
// // // //   fundingBadge: {
// // // //     background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
// // // //     color: 'white !important',
// // // //     padding: '12px 24px !important',
// // // //     borderRadius: '50px !important',
// // // //     fontSize: '1rem !important',
// // // //     fontWeight: '700 !important',
// // // //     display: 'inline-block !important',
// // // //     marginBottom: '50px !important',
// // // //     boxShadow: '0 8px 25px rgba(236, 72, 153, 0.3)',
// // // //     border: '2px solid rgba(255, 255, 255, 0.2)',
// // // //     textTransform: 'uppercase',
// // // //     letterSpacing: '1px',
// // // //     transition: 'all 0.3s ease',
// // // //     '&:hover': {
// // // //       transform: 'translateY(-2px)',
// // // //       boxShadow: '0 12px 35px rgba(236, 72, 153, 0.4)',
// // // //     },
// // // //     '@media (max-width: 1200px)': {
// // // //       padding: '10px 20px !important',
// // // //       fontSize: '0.95rem !important',
// // // //     },
// // // //     '@media (max-width: 960px)': {
// // // //       padding: '9px 18px !important',
// // // //       fontSize: '0.9rem !important',
// // // //       marginBottom: '40px !important',
// // // //     },
// // // //     '@media (max-width: 600px)': {
// // // //       padding: '8px 16px !important',
// // // //       fontSize: '0.85rem !important',
// // // //       marginBottom: '35px !important',
// // // //     },
// // // //     '@media (max-width: 480px)': {
// // // //       padding: '7px 14px !important',
// // // //       fontSize: '0.8rem !important',
// // // //       marginBottom: '30px !important',
// // // //     },
// // // //     '@media (max-width: 375px)': {
// // // //       padding: '6px 12px !important',
// // // //       fontSize: '0.75rem !important',
// // // //       marginBottom: '25px !important',
// // // //     },
// // // //   },
// // // //   stepsContainer: {
// // // //     display: 'flex',
// // // //     justifyContent: 'center',
// // // //     gap: '3%',
// // // //     position: 'relative',
// // // //     marginTop: '40px',
// // // //     '@media (max-width: 1200px)': {
// // // //       gap: '2%',
// // // //       marginTop: '35px',
// // // //     },
// // // //     '@media (max-width: 1000px)': {
// // // //       flexDirection: 'column',
// // // //       alignItems: 'center',
// // // //       gap: '60px',
// // // //       marginTop: '30px',
// // // //     },
// // // //     '@media (max-width: 960px)': {
// // // //       gap: '50px',
// // // //     },
// // // //     '@media (max-width: 600px)': {
// // // //       gap: '40px',
// // // //     },
// // // //     '@media (max-width: 480px)': {
// // // //       gap: '35px',
// // // //     },
// // // //     '@media (max-width: 375px)': {
// // // //       gap: '30px',
// // // //     },
// // // //   },
// // // //   step: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     alignItems: 'center',
// // // //     width: '15%',
// // // //     position: 'relative',
// // // //     zIndex: 3,
// // // //     '@media (max-width: 1200px)': {
// // // //       width: '16%',
// // // //     },
// // // //     '@media (max-width: 1000px)': {
// // // //       width: '80%',
// // // //       maxWidth: '350px',
// // // //     },
// // // //     '@media (max-width: 600px)': {
// // // //       width: '90%',
// // // //       maxWidth: '320px',
// // // //     },
// // // //     '@media (max-width: 480px)': {
// // // //       width: '95%',
// // // //       maxWidth: '300px',
// // // //     },
// // // //     '@media (max-width: 375px)': {
// // // //       width: '100%',
// // // //       maxWidth: '280px',
// // // //     },
// // // //   },
// // // //   stepNumberContainer: {
// // // //     width: '80px',
// // // //     height: '80px',
// // // //     borderRadius: '50%',
// // // //     background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     marginBottom: '20px',
// // // //     position: 'relative',
// // // //     zIndex: 3,
// // // //     transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
// // // //     boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3), 0 0 0 0 rgba(59, 130, 246, 0.4)',
// // // //     border: '3px solid rgba(255, 255, 255, 0.2)',
// // // //     overflow: 'hidden',
// // // //     '&:hover': {
// // // //       transform: 'scale(1.15) rotate(5deg)',
// // // //       boxShadow: '0 15px 40px rgba(59, 130, 246, 0.4), 0 0 0 20px rgba(59, 130, 246, 0.1)',
// // // //     },
// // // //     '&::before': {
// // // //       content: '""',
// // // //       position: 'absolute',
// // // //       top: '-50%',
// // // //       left: '-50%',
// // // //       width: '200%',
// // // //       height: '200%',
// // // //       background: 'conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
// // // //       animation: '$rotate 4s linear infinite',
// // // //     },
// // // //     '&::after': {
// // // //       content: '""',
// // // //       position: 'absolute',
// // // //       inset: '3px',
// // // //       borderRadius: '50%',
// // // //       background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
// // // //       zIndex: -1,
// // // //     },
// // // //     '@media (max-width: 1200px)': {
// // // //       width: '75px',
// // // //       height: '75px',
// // // //     },
// // // //     '@media (max-width: 960px)': {
// // // //       width: '70px',
// // // //       height: '70px',
// // // //     },
// // // //     '@media (max-width: 600px)': {
// // // //       width: '65px',
// // // //       height: '65px',
// // // //       marginBottom: '16px',
// // // //     },
// // // //     '@media (max-width: 480px)': {
// // // //       width: '60px',
// // // //       height: '60px',
// // // //       marginBottom: '14px',
// // // //     },
// // // //     '@media (max-width: 375px)': {
// // // //       width: '55px',
// // // //       height: '55px',
// // // //       marginBottom: '12px',
// // // //     },
// // // //   },
// // // //   stepNumber: {
// // // //     color: 'white',
// // // //     fontWeight: '900 !important',
// // // //     fontSize: '2.2rem !important',
// // // //     textShadow: '0 2px 4px rgba(0,0,0,0.3)',
// // // //     position: 'relative',
// // // //     zIndex: 2,
// // // //     '@media (max-width: 1200px)': {
// // // //       fontSize: '2rem !important',
// // // //     },
// // // //     '@media (max-width: 960px)': {
// // // //       fontSize: '1.8rem !important',
// // // //     },
// // // //     '@media (max-width: 600px)': {
// // // //       fontSize: '1.6rem !important',
// // // //     },
// // // //     '@media (max-width: 480px)': {
// // // //       fontSize: '1.4rem !important',
// // // //     },
// // // //     '@media (max-width: 375px)': {
// // // //       fontSize: '1.3rem !important',
// // // //     },
// // // //   },
// // // //   stepTitle: {
// // // //     fontSize: '1.2rem !important',
// // // //     fontWeight: '700 !important',
// // // //     marginBottom: '12px !important',
// // // //     color: '#1e293b !important',
// // // //     textAlign: 'center',
// // // //     '@media (max-width: 1200px)': {
// // // //       fontSize: '1.1rem !important',
// // // //     },
// // // //     '@media (max-width: 960px)': {
// // // //       fontSize: '1rem !important',
// // // //       marginBottom: '10px !important',
// // // //     },
// // // //     '@media (max-width: 600px)': {
// // // //       fontSize: '0.95rem !important',
// // // //       marginBottom: '8px !important',
// // // //     },
// // // //     '@media (max-width: 480px)': {
// // // //       fontSize: '0.9rem !important',
// // // //       marginBottom: '6px !important',
// // // //     },
// // // //     '@media (max-width: 375px)': {
// // // //       fontSize: '0.85rem !important',
// // // //       marginBottom: '5px !important',
// // // //     },
// // // //   },
// // // //   stepDescription: {
// // // //     fontSize: '0.9rem !important',
// // // //     color: '#64748b !important',
// // // //     lineHeight: '1.5 !important',
// // // //     textAlign: 'center',
// // // //     '@media (max-width: 1200px)': {
// // // //       fontSize: '0.85rem !important',
// // // //     },
// // // //     '@media (max-width: 960px)': {
// // // //       fontSize: '0.8rem !important',
// // // //       lineHeight: '1.4 !important',
// // // //     },
// // // //     '@media (max-width: 600px)': {
// // // //       fontSize: '0.75rem !important',
// // // //       lineHeight: '1.3 !important',
// // // //     },
// // // //     '@media (max-width: 480px)': {
// // // //       fontSize: '0.7rem !important',
// // // //     },
// // // //     '@media (max-width: 375px)': {
// // // //       fontSize: '0.65rem !important',
// // // //     },
// // // //   },
// // // //   progressLine: {
// // // //     position: 'absolute',
// // // //     height: '3px',
// // // //     background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
// // // //     top: '40px',
// // // //     left: '12%',
// // // //     right: '12%',
// // // //     zIndex: 1,
// // // //     borderRadius: '2px',
// // // //     '&::before': {
// // // //       content: '""',
// // // //       position: 'absolute',
// // // //       top: '-2px',
// // // //       left: 0,
// // // //       right: 0,
// // // //       height: '7px',
// // // //       background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(236, 72, 153, 0.2) 100%)',
// // // //       borderRadius: '4px',
// // // //       filter: 'blur(2px)',
// // // //     },
// // // //     '@media (max-width: 1200px)': {
// // // //       top: '37px',
// // // //     },
// // // //     '@media (max-width: 1000px)': {
// // // //       display: 'none',
// // // //     },
// // // //   },
// // // //   '@keyframes float': {
// // // //     '0%, 100%': {
// // // //       transform: 'translateY(0px) rotate(0deg)',
// // // //     },
// // // //     '50%': {
// // // //       transform: 'translateY(-20px) rotate(10deg)',
// // // //     },
// // // //   },
// // // //   '@keyframes rotate': {
// // // //     '0%': {
// // // //       transform: 'rotate(0deg)',
// // // //     },
// // // //     '100%': {
// // // //       transform: 'rotate(360deg)',
// // // //     },
// // // //   },
// // // // });

// // // // const StartupFundProcess = () => {
// // // //   const classes = useStyles();

// // // //   const steps = [
// // // //     {
// // // //       number: 1,
// // // //       title: "Ideation",
// // // //       description: "Think of a real-world tech problem worth solving. Conceptualize, validate, and evaluate product-market fit."
// // // //     },
// // // //     {
// // // //       number: 2,
// // // //       title: "Prototyping",
// // // //       description: "Design and build your MVP using Gigaversity's labs, tools, and mentor guidance."
// // // //     },
// // // //     {
// // // //       number: 3,
// // // //       title: "Mentorship",
// // // //       description: "Get 1:1 sessions with startup founders, tech leaders, and VCs to refine your product."
// // // //     },
// // // //     {
// // // //       number: 4,
// // // //       title: "Pitch Day",
// // // //       description: "Present your startup to our in-house incubation panel for feedback and funding."
// // // //     },
// // // //     {
// // // //       number: 5,
// // // //       title: "Get Funded",
// // // //       description: "Receive up to ₹1 Lakh to build, scale, and launch your product from our campus."
// // // //     },
// // // //     {
// // // //       number: 6,
// // // //       title: "Scale your Tech Product",
// // // //       description: "Grow your MVP into a market-ready product with expert guidance, UX improvements, and go-to-market strategies."
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <Box className={classes.section}>
// // // //       <Box className={classes.decorativeElements} />
// // // //       <Container maxWidth="lg" className={classes.container}>
// // // //         <Typography variant="h2" className={classes.title}>
// // // //           Get Access to the <span className={classes.highlightText}>₹1 Lakh Startup</span> Fund
// // // //         </Typography>
// // // //         <Typography variant="body1" className={classes.subtitle}>
// // // //           Turn your tech idea into reality — right from campus.
// // // //         </Typography>
        
// // // //         <Box className={classes.fundingBadge}>
// // // //           ₹1 LAKH FUNDING
// // // //         </Box>
        
// // // //         <Box className={classes.stepsContainer}>
// // // //           <Box className={classes.progressLine}></Box>
          
// // // //           {steps.map((step) => (
// // // //             <Box key={step.number} className={classes.step}>
// // // //               <Box className={classes.stepNumberContainer}>
// // // //                 <Typography className={classes.stepNumber}>{step.number}</Typography>
// // // //               </Box>
// // // //               <Typography className={classes.stepTitle}>{step.title}</Typography>
// // // //               <Typography className={classes.stepDescription}>{step.description}</Typography>
// // // //             </Box>
// // // //           ))}
// // // //         </Box>
// // // //       </Container>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default StartupFundProcess;
// // // import React from 'react';
// // // import { Box, Typography, Container } from '@mui/material';
// // // import { makeStyles } from '@mui/styles';

// // // const useStyles = makeStyles({
// // //   section: {
// // //     padding: '80px 0',
// // //     position: 'relative',
// // //     overflow: 'hidden',
// // //     background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
// // //     '@media (max-width: 1200px)': {
// // //       padding: '70px 0',
// // //     },
// // //     '@media (max-width: 960px)': {
// // //       padding: '60px 0',
// // //     },
// // //     '@media (max-width: 600px)': {
// // //       padding: '50px 0',
// // //     },
// // //     '@media (max-width: 480px)': {
// // //       padding: '40px 0',
// // //     },
// // //     '@media (max-width: 375px)': {
// // //       padding: '35px 0',
// // //     },
// // //   },
// // //   decorativeElements: {
// // //     position: 'absolute',
// // //     top: 0,
// // //     left: 0,
// // //     right: 0,
// // //     bottom: 0,
// // //     zIndex: 1,
// // //     '&::before': {
// // //       content: '""',
// // //       position: 'absolute',
// // //       width: '400px',
// // //       height: '400px',
// // //       borderRadius: '50%',
// // //       background: 'radial-gradient(circle, rgba(42, 43, 106, 0.05) 0%, transparent 70%)',
// // //       top: '5%',
// // //       left: '5%',
// // //       animation: '$float 8s ease-in-out infinite',
// // //     },
// // //     '&::after': {
// // //       content: '""',
// // //       position: 'absolute',
// // //       width: '300px',
// // //       height: '300px',
// // //       borderRadius: '50%',
// // //       background: 'radial-gradient(circle, rgba(255, 198, 20, 0.08) 0%, transparent 70%)',
// // //       bottom: '10%',
// // //       right: '10%',
// // //       animation: '$float 10s ease-in-out infinite reverse',
// // //     },
// // //   },
// // //   container: {
// // //     position: 'relative',
// // //     zIndex: 2,
// // //     textAlign: 'center',
// // //   },
// // //   title: {
// // //     fontSize: '2.8rem !important',
// // //     fontWeight: '800 !important',
// // //     marginBottom: '16px !important',
// // //     color: '#2A2B6A !important',
// // //     textShadow: '0 4px 8px rgba(42, 43, 106, 0.15)',
// // //     letterSpacing: '-0.02em',
// // //     '@media (max-width: 1200px)': {
// // //       fontSize: '2.5rem !important',
// // //     },
// // //     '@media (max-width: 960px)': {
// // //       fontSize: '2.2rem !important',
// // //     },
// // //     '@media (max-width: 600px)': {
// // //       fontSize: '2rem !important',
// // //     },
// // //     '@media (max-width: 480px)': {
// // //       fontSize: '1.8rem !important',
// // //     },
// // //     '@media (max-width: 375px)': {
// // //       fontSize: '1.6rem !important',
// // //     },
// // //   },
// // //   highlightText: {
// // //     color: '#FFC614 !important',
// // //     fontWeight: '900 !important',
// // //     textShadow: '0 4px 8px rgba(255, 198, 20, 0.25)',
// // //   },
// // //   subtitle: {
// // //     fontSize: '1.2rem !important',
// // //     color: '#64748b !important',
// // //     marginBottom: '40px !important',
// // //     maxWidth: '600px',
// // //     margin: '0 auto 40px auto !important',
// // //     lineHeight: '1.6 !important',
// // //     textShadow: '0 2px 4px rgba(100, 116, 139, 0.1)',
// // //     '@media (max-width: 1200px)': {
// // //       fontSize: '1.1rem !important',
// // //       maxWidth: '550px',
// // //     },
// // //     '@media (max-width: 960px)': {
// // //       fontSize: '1rem !important',
// // //       maxWidth: '500px',
// // //       marginBottom: '35px !important',
// // //     },
// // //     '@media (max-width: 600px)': {
// // //       fontSize: '0.95rem !important',
// // //       maxWidth: '90%',
// // //       marginBottom: '30px !important',
// // //     },
// // //     '@media (max-width: 480px)': {
// // //       fontSize: '0.9rem !important',
// // //       marginBottom: '25px !important',
// // //     },
// // //     '@media (max-width: 375px)': {
// // //       fontSize: '0.85rem !important',
// // //       marginBottom: '20px !important',
// // //     },
// // //   },
// // //   fundingBadge: {
// // //     background: 'linear-gradient(135deg, #2A2B6A 0%, #1e1f4f 100%)',
// // //     color: 'white !important',
// // //     padding: '14px 28px !important',
// // //     borderRadius: '50px !important',
// // //     fontSize: '1.1rem !important',
// // //     fontWeight: '700 !important',
// // //     display: 'inline-block !important',
// // //     marginBottom: '50px !important',
// // //     boxShadow: '0 8px 25px rgba(42, 43, 106, 0.3), 0 4px 12px rgba(42, 43, 106, 0.2)',
// // //     border: '2px solid rgba(255, 198, 20, 0.3)',
// // //     textTransform: 'uppercase',
// // //     letterSpacing: '1.2px',
// // //     textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
// // //     transition: 'all 0.3s ease',
// // //     position: 'relative',
// // //     overflow: 'hidden',
// // //     '&:hover': {
// // //       transform: 'translateY(-3px)',
// // //       boxShadow: '0 12px 35px rgba(42, 43, 106, 0.4), 0 6px 18px rgba(42, 43, 106, 0.3)',
// // //       border: '2px solid rgba(255, 198, 20, 0.5)',
// // //     },
// // //     '&::before': {
// // //       content: '""',
// // //       position: 'absolute',
// // //       top: 0,
// // //       left: '-100%',
// // //       width: '100%',
// // //       height: '100%',
// // //       background: 'linear-gradient(90deg, transparent, rgba(255, 198, 20, 0.2), transparent)',
// // //       animation: '$shimmer 3s infinite',
// // //     },
// // //     '@media (max-width: 1200px)': {
// // //       padding: '12px 24px !important',
// // //       fontSize: '1rem !important',
// // //     },
// // //     '@media (max-width: 960px)': {
// // //       padding: '10px 20px !important',
// // //       fontSize: '0.95rem !important',
// // //       marginBottom: '40px !important',
// // //     },
// // //     '@media (max-width: 600px)': {
// // //       padding: '9px 18px !important',
// // //       fontSize: '0.9rem !important',
// // //       marginBottom: '35px !important',
// // //     },
// // //     '@media (max-width: 480px)': {
// // //       padding: '8px 16px !important',
// // //       fontSize: '0.85rem !important',
// // //       marginBottom: '30px !important',
// // //     },
// // //     '@media (max-width: 375px)': {
// // //       padding: '7px 14px !important',
// // //       fontSize: '0.8rem !important',
// // //       marginBottom: '25px !important',
// // //     },
// // //   },
// // //   stepsContainer: {
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     gap: '3%',
// // //     position: 'relative',
// // //     marginTop: '40px',
// // //     '@media (max-width: 1200px)': {
// // //       gap: '2%',
// // //       marginTop: '35px',
// // //     },
// // //     '@media (max-width: 1000px)': {
// // //       flexDirection: 'column',
// // //       alignItems: 'center',
// // //       gap: '60px',
// // //       marginTop: '30px',
// // //     },
// // //     '@media (max-width: 960px)': {
// // //       gap: '50px',
// // //     },
// // //     '@media (max-width: 600px)': {
// // //       gap: '40px',
// // //     },
// // //     '@media (max-width: 480px)': {
// // //       gap: '35px',
// // //     },
// // //     '@media (max-width: 375px)': {
// // //       gap: '30px',
// // //     },
// // //   },
// // //   step: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     alignItems: 'center',
// // //     width: '15%',
// // //     position: 'relative',
// // //     zIndex: 3,
// // //     '@media (max-width: 1200px)': {
// // //       width: '16%',
// // //     },
// // //     '@media (max-width: 1000px)': {
// // //       width: '80%',
// // //       maxWidth: '350px',
// // //     },
// // //     '@media (max-width: 600px)': {
// // //       width: '90%',
// // //       maxWidth: '320px',
// // //     },
// // //     '@media (max-width: 480px)': {
// // //       width: '95%',
// // //       maxWidth: '300px',
// // //     },
// // //     '@media (max-width: 375px)': {
// // //       width: '100%',
// // //       maxWidth: '280px',
// // //     },
// // //   },
// // //   stepNumberContainer: {
// // //     width: '90px',
// // //     height: '90px',
// // //     borderRadius: '50%',
// // //     background: 'linear-gradient(135deg, #2A2B6A 0%, #3b4dbf 100%)',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     marginBottom: '24px',
// // //     position: 'relative',
// // //     zIndex: 3,
// // //     transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
// // //     boxShadow: '0 12px 30px rgba(42, 43, 106, 0.3), 0 6px 15px rgba(42, 43, 106, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
// // //     border: '3px solid rgba(255, 198, 20, 0.2)',
// // //     overflow: 'hidden',
// // //     '&:hover': {
// // //       transform: 'scale(1.1) translateY(-5px)',
// // //       boxShadow: '0 20px 40px rgba(42, 43, 106, 0.4), 0 10px 25px rgba(42, 43, 106, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
// // //       border: '3px solid rgba(255, 198, 20, 0.4)',
// // //     },
// // //     '&::before': {
// // //       content: '""',
// // //       position: 'absolute',
// // //       top: '-2px',
// // //       left: '-2px',
// // //       right: '-2px',
// // //       bottom: '-2px',
// // //       borderRadius: '50%',
// // //       background: 'linear-gradient(45deg, rgba(255, 198, 20, 0.3), transparent, rgba(255, 198, 20, 0.3))',
// // //       animation: '$rotate 3s linear infinite',
// // //       zIndex: -1,
// // //     },
// // //     '&::after': {
// // //       content: '""',
// // //       position: 'absolute',
// // //       inset: '6px',
// // //       borderRadius: '50%',
// // //       background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
// // //       zIndex: 1,
// // //     },
// // //     '@media (max-width: 1200px)': {
// // //       width: '85px',
// // //       height: '85px',
// // //       marginBottom: '20px',
// // //     },
// // //     '@media (max-width: 960px)': {
// // //       width: '80px',
// // //       height: '80px',
// // //       marginBottom: '18px',
// // //     },
// // //     '@media (max-width: 600px)': {
// // //       width: '75px',
// // //       height: '75px',
// // //       marginBottom: '16px',
// // //     },
// // //     '@media (max-width: 480px)': {
// // //       width: '70px',
// // //       height: '70px',
// // //       marginBottom: '14px',
// // //     },
// // //     '@media (max-width: 375px)': {
// // //       width: '65px',
// // //       height: '65px',
// // //       marginBottom: '12px',
// // //     },
// // //   },
// // //   stepNumber: {
// // //     color: 'white',
// // //     fontWeight: '900 !important',
// // //     fontSize: '2.4rem !important',
// // //     textShadow: '0 3px 6px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.2)',
// // //     position: 'relative',
// // //     zIndex: 2,
// // //     '@media (max-width: 1200px)': {
// // //       fontSize: '2.2rem !important',
// // //     },
// // //     '@media (max-width: 960px)': {
// // //       fontSize: '2rem !important',
// // //     },
// // //     '@media (max-width: 600px)': {
// // //       fontSize: '1.8rem !important',
// // //     },
// // //     '@media (max-width: 480px)': {
// // //       fontSize: '1.6rem !important',
// // //     },
// // //     '@media (max-width: 375px)': {
// // //       fontSize: '1.5rem !important',
// // //     },
// // //   },
// // //   stepTitle: {
// // //     fontSize: '1.3rem !important',
// // //     fontWeight: '700 !important',
// // //     marginBottom: '12px !important',
// // //     color: '#2A2B6A !important',
// // //     textAlign: 'center',
// // //     textShadow: '0 2px 4px rgba(42, 43, 106, 0.1)',
// // //     '@media (max-width: 1200px)': {
// // //       fontSize: '1.2rem !important',
// // //     },
// // //     '@media (max-width: 960px)': {
// // //       fontSize: '1.1rem !important',
// // //       marginBottom: '10px !important',
// // //     },
// // //     '@media (max-width: 600px)': {
// // //       fontSize: '1rem !important',
// // //       marginBottom: '8px !important',
// // //     },
// // //     '@media (max-width: 480px)': {
// // //       fontSize: '0.95rem !important',
// // //       marginBottom: '6px !important',
// // //     },
// // //     '@media (max-width: 375px)': {
// // //       fontSize: '0.9rem !important',
// // //       marginBottom: '5px !important',
// // //     },
// // //   },
// // //   stepDescription: {
// // //     fontSize: '0.95rem !important',
// // //     color: '#64748b !important',
// // //     lineHeight: '1.5 !important',
// // //     textAlign: 'center',
// // //     textShadow: '0 1px 2px rgba(100, 116, 139, 0.08)',
// // //     background: 'rgba(255, 255, 255, 0.7)',
// // //     padding: '16px',
// // //     borderRadius: '12px',
// // //     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.03)',
// // //     border: '1px solid rgba(42, 43, 106, 0.1)',
// // //     backdropFilter: 'blur(10px)',
// // //     '@media (max-width: 1200px)': {
// // //       fontSize: '0.9rem !important',
// // //       padding: '14px',
// // //     },
// // //     '@media (max-width: 960px)': {
// // //       fontSize: '0.85rem !important',
// // //       lineHeight: '1.4 !important',
// // //       padding: '12px',
// // //     },
// // //     '@media (max-width: 600px)': {
// // //       fontSize: '0.8rem !important',
// // //       lineHeight: '1.3 !important',
// // //       padding: '10px',
// // //     },
// // //     '@media (max-width: 480px)': {
// // //       fontSize: '0.75rem !important',
// // //       padding: '9px',
// // //     },
// // //     '@media (max-width: 375px)': {
// // //       fontSize: '0.7rem !important',
// // //       padding: '8px',
// // //     },
// // //   },
// // //   progressLine: {
// // //     position: 'absolute',
// // //     height: '4px',
// // //     background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 50%, #2A2B6A 100%)',
// // //     top: '45px',
// // //     left: '12%',
// // //     right: '12%',
// // //     zIndex: 1,
// // //     borderRadius: '2px',
// // //     boxShadow: '0 2px 8px rgba(42, 43, 106, 0.2)',
// // //     '&::before': {
// // //       content: '""',
// // //       position: 'absolute',
// // //       top: '-1px',
// // //       left: 0,
// // //       right: 0,
// // //       height: '6px',
// // //       background: 'linear-gradient(90deg, rgba(42, 43, 106, 0.1) 0%, rgba(255, 198, 20, 0.2) 50%, rgba(42, 43, 106, 0.1) 100%)',
// // //       borderRadius: '3px',
// // //       filter: 'blur(2px)',
// // //     },
// // //     '@media (max-width: 1200px)': {
// // //       top: '42px',
// // //     },
// // //     '@media (max-width: 1000px)': {
// // //       display: 'none',
// // //     },
// // //   },
// // //   '@keyframes float': {
// // //     '0%, 100%': {
// // //       transform: 'translateY(0px) rotate(0deg)',
// // //     },
// // //     '50%': {
// // //       transform: 'translateY(-30px) rotate(5deg)',
// // //     },
// // //   },
// // //   '@keyframes rotate': {
// // //     '0%': {
// // //       transform: 'rotate(0deg)',
// // //     },
// // //     '100%': {
// // //       transform: 'rotate(360deg)',
// // //     },
// // //   },
// // //   '@keyframes shimmer': {
// // //     '0%': {
// // //       left: '-100%',
// // //     },
// // //     '100%': {
// // //       left: '100%',
// // //     },
// // //   },
// // // });

// // // const StartupFundProcess = () => {
// // //   const classes = useStyles();

// // //   const steps = [
// // //     {
// // //       number: 1,
// // //       title: "Ideation",
// // //       description: "Think of a real-world tech problem worth solving. Conceptualize, validate, and evaluate product-market fit."
// // //     },
// // //     {
// // //       number: 2,
// // //       title: "Prototyping",
// // //       description: "Design and build your MVP using Gigaversity's labs, tools, and mentor guidance."
// // //     },
// // //     {
// // //       number: 3,
// // //       title: "Mentorship",
// // //       description: "Get 1:1 sessions with startup founders, tech leaders, and VCs to refine your product."
// // //     },
// // //     {
// // //       number: 4,
// // //       title: "Pitch Day",
// // //       description: "Present your startup to our in-house incubation panel for feedback and funding."
// // //     },
// // //     {
// // //       number: 5,
// // //       title: "Get Funded",
// // //       description: "Receive up to ₹1 Lakh to build, scale, and launch your product from our campus."
// // //     },
// // //     {
// // //       number: 6,
// // //       title: "Scale your Tech Product",
// // //       description: "Grow your MVP into a market-ready product with expert guidance, UX improvements, and go-to-market strategies."
// // //     }
// // //   ];

// // //   return (
// // //     <Box className={classes.section}>
// // //       <Box className={classes.decorativeElements} />
// // //       <Container maxWidth="lg" className={classes.container}>
// // //         <Typography variant="h2" className={classes.title}>
// // //           Get Access to the <span className={classes.highlightText}>₹1 Lakh Startup</span> Fund
// // //         </Typography>
// // //         <Typography variant="body1" className={classes.subtitle}>
// // //           Turn your tech idea into reality — right from campus.
// // //         </Typography>
        
// // //         <Box className={classes.fundingBadge}>
// // //           ₹1 LAKH FUNDING
// // //         </Box>
        
// // //         <Box className={classes.stepsContainer}>
// // //           <Box className={classes.progressLine}></Box>
          
// // //           {steps.map((step) => (
// // //             <Box key={step.number} className={classes.step}>
// // //               <Box className={classes.stepNumberContainer}>
// // //                 <Typography className={classes.stepNumber}>{step.number}</Typography>
// // //               </Box>
// // //               <Typography className={classes.stepTitle}>{step.title}</Typography>
// // //               <Typography className={classes.stepDescription}>{step.description}</Typography>
// // //             </Box>
// // //           ))}
// // //         </Box>
// // //       </Container>
// // //     </Box>
// // //   );
// // // };

// // // export default StartupFundProcess;
// // import React from 'react';
// // import { Box, Typography, Container } from '@mui/material';
// // import { makeStyles } from '@mui/styles';

// // const useStyles = makeStyles({
// //   section: {
// //     padding: '80px 0',
// //     position: 'relative',
// //     overflow: 'hidden',
// //     background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
// //     '@media (max-width: 1200px)': {
// //       padding: '70px 0',
// //     },
// //     '@media (max-width: 960px)': {
// //       padding: '60px 0',
// //     },
// //     '@media (max-width: 600px)': {
// //       padding: '50px 0',
// //     },
// //   },
// //   pathwayBackground: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     zIndex: 1,
// //     background: `
// //       radial-gradient(circle at 20% 30%, rgba(42, 43, 106, 0.03) 0%, transparent 50%),
// //       radial-gradient(circle at 80% 70%, rgba(255, 198, 20, 0.04) 0%, transparent 50%)
// //     `,
// //   },
// //   container: {
// //     position: 'relative',
// //     zIndex: 2,
// //     textAlign: 'center',
// //   },
// //   title: {
// //     fontSize: '2.8rem !important',
// //     fontWeight: '800 !important',
// //     marginBottom: '16px !important',
// //     color: '#2A2B6A !important',
// //     textShadow: '0 4px 12px rgba(42, 43, 106, 0.2)',
// //     '@media (max-width: 1200px)': {
// //       fontSize: '2.5rem !important',
// //     },
// //     '@media (max-width: 960px)': {
// //       fontSize: '2.2rem !important',
// //     },
// //     '@media (max-width: 600px)': {
// //       fontSize: '2rem !important',
// //     },
// //   },
// //   highlightText: {
// //     color: '#FFC614 !important',
// //     fontWeight: '900 !important',
// //   },
// //   subtitle: {
// //     fontSize: '1.2rem !important',
// //     color: '#64748b !important',
// //     marginBottom: '40px !important',
// //     maxWidth: '600px',
// //     margin: '0 auto 40px auto !important',
// //     lineHeight: '1.6 !important',
// //     '@media (max-width: 960px)': {
// //       fontSize: '1rem !important',
// //       marginBottom: '35px !important',
// //     },
// //   },
// //   fundingBadge: {
// //     background: 'linear-gradient(135deg, #2A2B6A 0%, #1e1f4f 100%)',
// //     color: 'white !important',
// //     padding: '12px 24px !important',
// //     borderRadius: '25px !important',
// //     fontSize: '1rem !important',
// //     fontWeight: '700 !important',
// //     display: 'inline-block !important',
// //     marginBottom: '60px !important',
// //     boxShadow: '0 8px 24px rgba(42, 43, 106, 0.25)',
// //     textTransform: 'uppercase',
// //     letterSpacing: '1px',
// //     '@media (max-width: 960px)': {
// //       marginBottom: '50px !important',
// //     },
// //   },
// //   roadmapContainer: {
// //     position: 'relative',
// //     maxWidth: '1000px',
// //     margin: '0 auto',
// //     '@media (max-width: 1000px)': {
// //       maxWidth: '600px',
// //     },
// //   },
// //   roadmapPath: {
// //     position: 'absolute',
// //     top: '0',
// //     left: '50%',
// //     transform: 'translateX(-50%)',
// //     width: '4px',
// //     height: '100%',
// //     background: 'linear-gradient(180deg, #2A2B6A 0%, #FFC614 50%, #2A2B6A 100%)',
// //     zIndex: 1,
// //     '@media (max-width: 1000px)': {
// //       display: 'none',
// //     },
// //   },
// //   stepContainer: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     marginBottom: '80px',
// //     position: 'relative',
// //     zIndex: 2,
// //     '&:nth-child(even)': {
// //       flexDirection: 'row-reverse',
// //       '& $stepContent': {
// //         textAlign: 'right',
// //       },
// //     },
// //     '@media (max-width: 1000px)': {
// //       flexDirection: 'column !important',
// //       alignItems: 'center',
// //       marginBottom: '60px',
// //       '&:nth-child(even)': {
// //         '& $stepContent': {
// //           textAlign: 'center',
// //         },
// //       },
// //     },
// //     '@media (max-width: 600px)': {
// //       marginBottom: '50px',
// //     },
// //   },
// //   stepContent: {
// //     flex: 1,
// //     padding: '0 40px',
// //     '@media (max-width: 1000px)': {
// //       padding: '20px 0 0 0',
// //       textAlign: 'center !important',
// //       order: 2,
// //     },
// //   },
// //   stepNumberWrapper: {
// //     position: 'relative',
// //     zIndex: 3,
// //     '@media (max-width: 1000px)': {
// //       order: 1,
// //     },
// //   },
// //   stepNumberContainer: {
// //     width: '100px',
// //     height: '100px',
// //     borderRadius: '50%',
// //     background: 'linear-gradient(135deg, #2A2B6A 0%, #3b4dbf 100%)',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     position: 'relative',
// //     boxShadow: '0 15px 35px rgba(42, 43, 106, 0.3), 0 8px 20px rgba(42, 43, 106, 0.2)',
// //     border: '4px solid white',
// //     transition: 'all 0.4s ease',
// //     '&:hover': {
// //       transform: 'scale(1.1)',
// //       boxShadow: '0 20px 45px rgba(42, 43, 106, 0.4), 0 12px 25px rgba(42, 43, 106, 0.3)',
// //     },
// //     '&::before': {
// //       content: '""',
// //       position: 'absolute',
// //       inset: '-6px',
// //       borderRadius: '50%',
// //       background: 'linear-gradient(45deg, #FFC614, transparent, #FFC614)',
// //       zIndex: -1,
// //       animation: '$rotate 4s linear infinite',
// //     },
// //     '@media (max-width: 1200px)': {
// //       width: '90px',
// //       height: '90px',
// //     },
// //     '@media (max-width: 960px)': {
// //       width: '80px',
// //       height: '80px',
// //     },
// //   },
// //   stepNumber: {
// //     color: 'white',
// //     fontWeight: '900 !important',
// //     fontSize: '2.2rem !important',
// //     textShadow: '0 3px 6px rgba(0, 0, 0, 0.3)',
// //     '@media (max-width: 1200px)': {
// //       fontSize: '2rem !important',
// //     },
// //     '@media (max-width: 960px)': {
// //       fontSize: '1.8rem !important',
// //     },
// //   },
// //   stepCard: {
// //     background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
// //     borderRadius: '20px',
// //     padding: '32px',
// //     boxShadow: '0 20px 40px rgba(42, 43, 106, 0.1), 0 8px 20px rgba(42, 43, 106, 0.05)',
// //     border: '1px solid rgba(42, 43, 106, 0.08)',
// //     position: 'relative',
// //     overflow: 'hidden',
// //     transition: 'all 0.3s ease',
// //     '&:hover': {
// //       transform: 'translateY(-8px)',
// //       boxShadow: '0 25px 50px rgba(42, 43, 106, 0.15), 0 12px 25px rgba(42, 43, 106, 0.08)',
// //     },
// //     '&::before': {
// //       content: '""',
// //       position: 'absolute',
// //       top: 0,
// //       left: 0,
// //       right: 0,
// //       height: '4px',
// //       background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 100%)',
// //     },
// //     '@media (max-width: 1000px)': {
// //       maxWidth: '500px',
// //       padding: '28px',
// //     },
// //     '@media (max-width: 600px)': {
// //       padding: '24px',
// //     },
// //   },
// //   stepTitle: {
// //     fontSize: '1.6rem !important',
// //     fontWeight: '700 !important',
// //     marginBottom: '16px !important',
// //     color: '#2A2B6A !important',
// //     textShadow: '0 2px 4px rgba(42, 43, 106, 0.1)',
// //     '@media (max-width: 1200px)': {
// //       fontSize: '1.4rem !important',
// //     },
// //     '@media (max-width: 960px)': {
// //       fontSize: '1.3rem !important',
// //       marginBottom: '12px !important',
// //     },
// //   },
// //   stepDescription: {
// //     fontSize: '1.1rem !important',
// //     color: '#64748b !important',
// //     lineHeight: '1.6 !important',
// //     textShadow: '0 1px 2px rgba(100, 116, 139, 0.05)',
// //     '@media (max-width: 1200px)': {
// //       fontSize: '1rem !important',
// //     },
// //     '@media (max-width: 960px)': {
// //       fontSize: '0.95rem !important',
// //       lineHeight: '1.5 !important',
// //     },
// //   },
// //   pathDots: {
// //     position: 'absolute',
// //     left: '50%',
// //     transform: 'translateX(-50%)',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '8px',
// //     top: '120px',
// //     bottom: '120px',
// //     zIndex: 1,
// //     '&::before': {
// //       content: '""',
// //       position: 'absolute',
// //       width: '2px',
// //       height: '100%',
// //       background: 'rgba(42, 43, 106, 0.2)',
// //       left: '50%',
// //       transform: 'translateX(-50%)',
// //       zIndex: -1,
// //     },
// //     '@media (max-width: 1000px)': {
// //       display: 'none',
// //     },
// //   },
// //   dot: {
// //     width: '8px',
// //     height: '8px',
// //     borderRadius: '50%',
// //     background: '#FFC614',
// //     margin: '0 auto',
// //     animation: '$pulse 2s infinite',
// //     '&:nth-child(even)': {
// //       animationDelay: '1s',
// //     },
// //   },
// //   '@keyframes rotate': {
// //     '0%': { transform: 'rotate(0deg)' },
// //     '100%': { transform: 'rotate(360deg)' },
// //   },
// //   '@keyframes pulse': {
// //     '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
// //     '50%': { opacity: 1, transform: 'scale(1.2)' },
// //   },
// // });

// // const StartupFundProcess = () => {
// //   const classes = useStyles();

// //   const steps = [
// //     {
// //       number: 1,
// //       title: "Ideation",
// //       description: "Think of a real-world tech problem worth solving. Conceptualize, validate, and evaluate product-market fit."
// //     },
// //     {
// //       number: 2,
// //       title: "Prototyping", 
// //       description: "Design and build your MVP using Gigaversity's labs, tools, and mentor guidance."
// //     },
// //     {
// //       number: 3,
// //       title: "Mentorship",
// //       description: "Get 1:1 sessions with startup founders, tech leaders, and VCs to refine your product."
// //     },
// //     {
// //       number: 4,
// //       title: "Pitch Day",
// //       description: "Present your startup to our in-house incubation panel for feedback and funding."
// //     },
// //     {
// //       number: 5,
// //       title: "Get Funded",
// //       description: "Receive up to ₹1 Lakh to build, scale, and launch your product from our campus."
// //     },
// //     {
// //       number: 6,
// //       title: "Scale your Tech Product",
// //       description: "Grow your MVP into a market-ready product with expert guidance, UX improvements, and go-to-market strategies."
// //     }
// //   ];

// //   return (
// //     <Box className={classes.section}>
// //       <Box className={classes.pathwayBackground} />
// //       <Container maxWidth="lg" className={classes.container}>
// //         <Typography variant="h2" className={classes.title}>
// //           Get Access to the <span className={classes.highlightText}>₹1 Lakh Startup</span> Fund
// //         </Typography>
// //         <Typography variant="body1" className={classes.subtitle}>
// //           Turn your tech idea into reality — right from campus.
// //         </Typography>
        
// //         <Box className={classes.fundingBadge}>
// //           ₹1 LAKH FUNDING
// //         </Box>
        
// //         <Box className={classes.roadmapContainer}>
// //           <Box className={classes.roadmapPath} />
// //           <Box className={classes.pathDots}>
// //             {Array.from({ length: 20 }).map((_, i) => (
// //               <Box key={i} className={classes.dot} />
// //             ))}
// //           </Box>
          
// //           {steps.map((step, index) => (
// //             <Box key={step.number} className={classes.stepContainer}>
// //               <Box className={classes.stepNumberWrapper}>
// //                 <Box className={classes.stepNumberContainer}>
// //                   <Typography className={classes.stepNumber}>{step.number}</Typography>
// //                 </Box>
// //               </Box>
// //               <Box className={classes.stepContent}>
// //                 <Box className={classes.stepCard}>
// //                   <Typography className={classes.stepTitle}>{step.title}</Typography>
// //                   <Typography className={classes.stepDescription}>{step.description}</Typography>
// //                 </Box>
// //               </Box>
// //             </Box>
// //           ))}
// //         </Box>
// //       </Container>
// //     </Box>
// //   );
// // };

// // export default StartupFundProcess;
// import React from 'react';
// import { Box, Typography, Container } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   section: {
//     padding: '60px 0',
//     minHeight: '100vh',
//     position: 'relative',
//     overflow: 'hidden',
//     background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   container: {
//     position: 'relative',
//     zIndex: 2,
//     textAlign: 'center',
//     width: '100%',
//   },
//   header: {
//     marginBottom: '40px',
//   },
//   title: {
//     fontSize: '2.5rem !important',
//     fontWeight: '800 !important',
//     marginBottom: '12px !important',
//     color: '#2A2B6A !important',
//     textShadow: '0 4px 12px rgba(42, 43, 106, 0.2)',
//     '@media (max-width: 768px)': {
//       fontSize: '2rem !important',
//     },
//   },
//   highlightText: {
//     color: '#FFC614 !important',
//   },
//   subtitle: {
//     fontSize: '1.1rem !important',
//     color: '#64748b !important',
//     marginBottom: '20px !important',
//     maxWidth: '500px',
//     margin: '0 auto 20px auto !important',
//   },
//   fundingBadge: {
//     background: 'linear-gradient(135deg, #2A2B6A 0%, #1e1f4f 100%)',
//     color: 'white !important',
//     padding: '8px 20px !important',
//     borderRadius: '20px !important',
//     fontSize: '0.9rem !important',
//     fontWeight: '700 !important',
//     display: 'inline-block !important',
//     textTransform: 'uppercase',
//     letterSpacing: '1px',
//     boxShadow: '0 6px 20px rgba(42, 43, 106, 0.25)',
//   },
//   pathwayContainer: {
//     position: 'relative',
//     maxWidth: '1200px',
//     margin: '0 auto',
//   },
//   stepsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(6, 1fr)',
//     gap: '20px',
//     position: 'relative',
//     '@media (max-width: 1200px)': {
//       gridTemplateColumns: 'repeat(3, 1fr)',
//       gap: '30px',
//     },
//     '@media (max-width: 768px)': {
//       gridTemplateColumns: 'repeat(2, 1fr)',
//       gap: '25px',
//     },
//     '@media (max-width: 480px)': {
//       gridTemplateColumns: '1fr',
//       gap: '20px',
//     },
//   },
//   pathLine: {
//     position: 'absolute',
//     top: '40px',
//     left: '8%',
//     right: '8%',
//     height: '3px',
//     background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 50%, #2A2B6A 100%)',
//     borderRadius: '2px',
//     zIndex: 1,
//     '@media (max-width: 1200px)': {
//       display: 'none',
//     },
//   },
//   step: {
//     position: 'relative',
//     zIndex: 2,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//   },
//   stepNumber: {
//     width: '80px',
//     height: '80px',
//     borderRadius: '50%',
//     background: 'linear-gradient(135deg, #2A2B6A 0%, #3b4dbf 100%)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: '16px',
//     color: 'white',
//     fontSize: '1.8rem !important',
//     fontWeight: '900 !important',
//     boxShadow: '0 12px 30px rgba(42, 43, 106, 0.3), 0 6px 15px rgba(42, 43, 106, 0.2)',
//     border: '3px solid white',
//     position: 'relative',
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       transform: 'scale(1.1)',
//       boxShadow: '0 16px 40px rgba(42, 43, 106, 0.4)',
//     },
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       inset: '-4px',
//       borderRadius: '50%',
//       background: 'linear-gradient(45deg, #FFC614, transparent, #FFC614)',
//       zIndex: -1,
//       animation: '$rotate 3s linear infinite',
//     },
//     '@media (max-width: 768px)': {
//       width: '70px',
//       height: '70px',
//       fontSize: '1.6rem !important',
//     },
//   },
//   stepContent: {
//     background: 'rgba(255, 255, 255, 0.9)',
//     borderRadius: '16px',
//     padding: '20px 16px',
//     height: '180px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     boxShadow: '0 8px 25px rgba(42, 43, 106, 0.1)',
//     border: '1px solid rgba(42, 43, 106, 0.08)',
//     backdropFilter: 'blur(10px)',
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       transform: 'translateY(-4px)',
//       boxShadow: '0 12px 35px rgba(42, 43, 106, 0.15)',
//     },
//     '@media (max-width: 768px)': {
//       height: '160px',
//       padding: '16px 12px',
//     },
//   },
//   stepTitle: {
//     fontSize: '1.1rem !important',
//     fontWeight: '700 !important',
//     marginBottom: '8px !important',
//     color: '#2A2B6A !important',
//     '@media (max-width: 768px)': {
//       fontSize: '1rem !important',
//     },
//   },
//   stepDescription: {
//     fontSize: '0.85rem !important',
//     color: '#64748b !important',
//     lineHeight: '1.4 !important',
//     '@media (max-width: 768px)': {
//       fontSize: '0.8rem !important',
//     },
//   },
//   decorativeElements: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 1,
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       width: '300px',
//       height: '300px',
//       borderRadius: '50%',
//       background: 'radial-gradient(circle, rgba(42, 43, 106, 0.04) 0%, transparent 70%)',
//       top: '10%',
//       left: '5%',
//       animation: '$float 8s ease-in-out infinite',
//     },
//     '&::after': {
//       content: '""',
//       position: 'absolute',
//       width: '250px',
//       height: '250px',
//       borderRadius: '50%',
//       background: 'radial-gradient(circle, rgba(255, 198, 20, 0.06) 0%, transparent 70%)',
//       bottom: '10%',
//       right: '5%',
//       animation: '$float 10s ease-in-out infinite reverse',
//     },
//   },
//   '@keyframes rotate': {
//     '0%': { transform: 'rotate(0deg)' },
//     '100%': { transform: 'rotate(360deg)' },
//   },
//   '@keyframes float': {
//     '0%, 100%': { transform: 'translateY(0px)' },
//     '50%': { transform: 'translateY(-20px)' },
//   },
// });

// const StartupFundProcess = () => {
//   const classes = useStyles();

//   const steps = [
//     {
//       number: 1,
//       title: "Ideation",
//       description: "Think of a real-world tech problem worth solving. Conceptualize and validate product-market fit."
//     },
//     {
//       number: 2,
//       title: "Prototyping",
//       description: "Design and build your MVP using Gigaversity's labs, tools, and mentor guidance."
//     },
//     {
//       number: 3,
//       title: "Mentorship",
//       description: "Get 1:1 sessions with startup founders, tech leaders, and VCs to refine your product."
//     },
//     {
//       number: 4,
//       title: "Pitch Day",
//       description: "Present your startup to our in-house incubation panel for feedback and funding."
//     },
//     {
//       number: 5,
//       title: "Get Funded",
//       description: "Receive up to ₹1 Lakh to build, scale, and launch your product from our campus."
//     },
//     {
//       number: 6,
//       title: "Scale Product",
//       description: "Grow your MVP into a market-ready product with expert guidance and go-to-market strategies."
//     }
//   ];

//   return (
//     <Box className={classes.section}>
//       <Box className={classes.decorativeElements} />
//       <Container maxWidth="lg" className={classes.container}>
//         <Box className={classes.header}>
//           <Typography variant="h2" className={classes.title}>
//             Get Access to the <span className={classes.highlightText}>₹1 Lakh Startup</span> Fund
//           </Typography>
//           <Typography variant="body1" className={classes.subtitle}>
//             Turn your tech idea into reality — right from campus.
//           </Typography>
//           <Box className={classes.fundingBadge}>
//             ₹1 LAKH FUNDING
//           </Box>
//         </Box>
        
//         <Box className={classes.pathwayContainer}>
//           <Box className={classes.pathLine} />
//           <Box className={classes.stepsGrid}>
//             {steps.map((step) => (
//               <Box key={step.number} className={classes.step}>
//                 <Box className={classes.stepNumber}>
//                   {step.number}
//                 </Box>
//                 <Box className={classes.stepContent}>
//                   <Typography className={classes.stepTitle}>{step.title}</Typography>
//                   <Typography className={classes.stepDescription}>{step.description}</Typography>
//                 </Box>
//               </Box>
//             ))}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default StartupFundProcess;
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {
    padding: '60px 0',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    width: '100%',
  },
  header: {
    marginBottom: '50px',
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: '800 !important',
    marginBottom: '12px !important',
    color: '#2A2B6A !important',
    textShadow: '0 4px 12px rgba(42, 43, 106, 0.2)',
    '@media (max-width: 768px)': {
      fontSize: '2rem !important',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#64748b !important',
    marginBottom: '20px !important',
    maxWidth: '500px',
    margin: '0 auto 20px auto !important',
  },
  fundingBadge: {
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1e1f4f 100%)',
    color: 'white !important',
    padding: '8px 20px !important',
    borderRadius: '20px !important',
    fontSize: '0.9rem !important',
    fontWeight: '700 !important',
    display: 'inline-block !important',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 6px 20px rgba(42, 43, 106, 0.25)',
  },
  stepsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '20px',
    '@media (max-width: 1200px)': {
      gap: '15px',
    },
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px',
    },
  },
  pathLine: {
    position: 'absolute',
    top: '50px',
    left: '8%',
    right: '8%',
    height: '3px',
    background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 50%, #2A2B6A 100%)',
    borderRadius: '2px',
    zIndex: 1,
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  step: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
    maxWidth: '180px',
    '@media (max-width: 768px)': {
      maxWidth: '300px',
    },
  },
  stepNumber: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #3b4dbf 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    color: 'white',
    fontSize: '2rem !important',
    fontWeight: '900 !important',
    boxShadow: '0 15px 35px rgba(42, 43, 106, 0.3), 0 8px 20px rgba(42, 43, 106, 0.2)',
    border: '4px solid white',
    position: 'relative',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '0 20px 45px rgba(42, 43, 106, 0.4)',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: '-6px',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, #FFC614, transparent, #FFC614)',
      zIndex: -1,
      animation: '$rotate 4s linear infinite',
    },
    '@media (max-width: 1200px)': {
      width: '80px',
      height: '80px',
      fontSize: '1.6rem !important',
    },
    '@media (max-width: 768px)': {
      width: '90px',
      height: '90px',
      fontSize: '1.8rem !important',
    },
  },
  stepContent: {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '16px',
    padding: '20px 16px',
    boxShadow: '0 8px 25px rgba(42, 43, 106, 0.1)',
    border: '1px solid rgba(42, 43, 106, 0.08)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    minHeight: '140px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 35px rgba(42, 43, 106, 0.15)',
    },
    '@media (max-width: 1200px)': {
      padding: '16px 12px',
      minHeight: '120px',
    },
    '@media (max-width: 768px)': {
      padding: '20px',
      minHeight: '100px',
    },
  },
  stepTitle: {
    fontSize: '1.1rem !important',
    fontWeight: '700 !important',
    marginBottom: '8px !important',
    color: '#2A2B6A !important',
    '@media (max-width: 1200px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 768px)': {
      fontSize: '1.2rem !important',
    },
  },
  stepDescription: {
    fontSize: '0.8rem !important',
    color: '#64748b !important',
    lineHeight: '1.4 !important',
    '@media (max-width: 1200px)': {
      fontSize: '0.75rem !important',
    },
    '@media (max-width: 768px)': {
      fontSize: '0.9rem !important',
    },
  },
  decorativeElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(42, 43, 106, 0.04) 0%, transparent 70%)',
      top: '10%',
      left: '5%',
      animation: '$float 8s ease-in-out infinite',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '250px',
      height: '250px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255, 198, 20, 0.06) 0%, transparent 70%)',
      bottom: '10%',
      right: '5%',
      animation: '$float 10s ease-in-out infinite reverse',
    },
  },
  '@keyframes rotate': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },
  },
});

const StartupFundProcess = () => {
  const classes = useStyles();

  const steps = [
    {
      number: 1,
      title: "Ideation",
      description: "Think of a real-world tech problem worth solving. Validate product-market fit."
    },
    {
      number: 2,
      title: "Prototyping",
      description: "Build your MVP using Gigaversity's labs and mentor guidance."
    },
    {
      number: 3,
      title: "Mentorship",
      description: "Get 1:1 sessions with startup founders and VCs to refine your product."
    },
    {
      number: 4,
      title: "Pitch Day",
      description: "Present your startup to our incubation panel for feedback and funding."
    },
    {
      number: 5,
      title: "Get Funded",
      description: "Receive up to ₹1 Lakh to build and launch your product."
    },
    {
      number: 6,
      title: "Scale Product",
      description: "Grow your MVP with expert guidance and go-to-market strategies."
    }
  ];

  return (
    <Box className={classes.section}>
      <Box className={classes.decorativeElements} />
      <Container maxWidth="xl" className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            Get Access to the <span className={classes.highlightText}>₹1 Lakh Startup</span> Fund
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Turn your tech idea into reality — right from campus.
          </Typography>
          <Box className={classes.fundingBadge}>
            ₹1 LAKH FUNDING
          </Box>
        </Box>
        
        <Box className={classes.stepsContainer}>
          <Box className={classes.pathLine} />
          {steps.map((step) => (
            <Box key={step.number} className={classes.step}>
              <Box className={classes.stepNumber}>
                {step.number}
              </Box>
              <Box className={classes.stepContent}>
                <Typography className={classes.stepTitle}>{step.title}</Typography>
                <Typography className={classes.stepDescription}>{step.description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StartupFundProcess;
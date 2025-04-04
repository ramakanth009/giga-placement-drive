// import React from 'react';
// import { Box, Typography, Button, Container, Grid } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   heroContainer: {
//     background: 'linear-gradient(90deg, #f0f6ff 0%, #e4f0ff 50%, #001F3F 50%, #001F3F 100%)',
//     position: 'relative',
//     overflow: 'hidden',
//     minHeight: '500px',
//     display: 'flex',
//     alignItems: 'center',
//     '@media (max-width: 960px)': {
//       background: 'linear-gradient(180deg, #f0f6ff 0%, #e4f0ff 50%, #001F3F 50%, #001F3F 100%)',
//       padding: '40px 0',
//     },
//   },
//   leftContent: {
//     padding: '40px 0',
//     position: 'relative',
//     zIndex: 5,
//     '@media (max-width: 960px)': {
//       textAlign: 'center',
//       padding: '30px 0',
//     },
//   },
//   title: {
//     fontSize: '2.8rem !important',
//     fontWeight: '800 !important',
//     color: '#2A2B6A !important',
//     lineHeight: '1.2 !important',
//     marginBottom: '8px !important',
//     '@media (max-width: 960px)': {
//       fontSize: '2.3rem !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '1.8rem !important',
//     },
//   },
//   highlightText: {
//     color: '#00B4D8 !important',
//     display: 'block',
//   },
//   subtitle: {
//     fontSize: '1.1rem !important',
//     color: '#555555 !important',
//     marginBottom: '25px !important',
//     '@media (max-width: 960px)': {
//       marginBottom: '20px !important',
//       fontSize: '1rem !important',
//     },
//   },
//   statBox: {
//     display: 'flex',
//     gap: '25px',
//     marginBottom: '30px',
//     '@media (max-width: 960px)': {
//       justifyContent: 'center',
//       gap: '15px',
//     },
//     '@media (max-width: 600px)': {
//       flexDirection: 'column',
//       alignItems: 'center',
//       gap: '10px',
//     },
//   },
//   statItem: {
//     textAlign: 'center',
//     width: '110px',
//     padding: '8px',
//     borderRadius: '8px',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
//     '@media (max-width: 960px)': {
//       width: '100px',
//     },
//     '@media (max-width: 600px)': {
//       width: '200px',
//     },
//   },
//   statTitle: {
//     fontSize: '0.8rem !important',
//     color: '#666 !important',
//     fontWeight: '500 !important',
//     marginBottom: '3px !important',
//   },
//   statValue: {
//     fontSize: '0.95rem !important',
//     fontWeight: 'bold !important',
//     color: '#2A2B6A !important',
//   },
//   joinButton: {
//     backgroundColor: '#2A2B6A !important',
//     color: 'white !important',
//     padding: '10px 24px !important',
//     fontSize: '1rem !important',
//     fontWeight: 'bold !important',
//     borderRadius: '5px !important',
//     textTransform: 'none !important',
//     '&:hover': {
//       backgroundColor: '#1e1f4d !important',
//     },
//     '@media (max-width: 960px)': {
//       margin: '0 auto !important',
//       display: 'block !important',
//     },
//   },
//   eligibilityText: {
//     fontSize: '0.8rem !important',
//     color: '#666 !important',
//     marginTop: '15px !important',
//     '@media (max-width: 960px)': {
//       textAlign: 'center !important',
//     },
//   },
//   imageContainer: {
//     position: 'relative',
//     height: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     '@media (max-width: 960px)': {
//       marginTop: '30px',
//     },
//   },
//   heroImage: {
//     width: '100%',
//     maxWidth: '450px',
//     position: 'relative',
//     zIndex: 5,
//     '@media (max-width: 960px)': {
//       maxWidth: '300px',
//     },
//   },
//   pricingBox: {
//     position: 'absolute',
//     top: '20px',
//     right: '10px',
//     backgroundColor: 'white',
//     padding: '15px',
//     borderRadius: '8px',
//     boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
//     zIndex: 6,
//     width: '180px',
//     textAlign: 'center',
//     '@media (max-width: 960px)': {
//       top: '0',
//       right: '0',
//       width: '150px',
//       padding: '10px',
//     },
//   },
//   regularPrice: {
//     fontSize: '0.8rem !important',
//     color: '#666 !important',
//     textDecoration: 'line-through',
//   },
//   offerText: {
//     fontSize: '0.9rem !important',
//     color: '#2A2B6A !important',
//     fontWeight: 'bold !important',
//     marginBottom: '5px !important',
//   },
//   specialPrice: {
//     fontSize: '1.4rem !important',
//     color: '#2A2B6A !important',
//     fontWeight: 'bold !important',
//     marginBottom: '3px !important',
//     '& span': {
//       fontSize: '0.9rem',
//     },
//   },
// });

// const DataScienceHero = () => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.heroContainer}>
//       <Container maxWidth="lg">
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={7}>
//             <Box className={classes.leftContent}>
//               <Typography variant="h1" className={classes.title}>
//                 Virtual Placement Drive<br />
//                 For <span className={classes.highlightText}>Data Science</span>
//               </Typography>
              
//               <Typography variant="h6" className={classes.subtitle}>
//                 India's Premier Virtual Hiring & Learning Experience
//               </Typography>
              
//               <Box className={classes.statBox}>
//                 <Box className={classes.statItem}>
//                   <Typography className={classes.statTitle}>
//                     400+ Job Opportunities
//                   </Typography>
//                   <Typography className={classes.statValue}>
                    
//                   </Typography>
//                 </Box>
                
//                 <Box className={classes.statItem}>
//                   <Typography className={classes.statTitle}>
//                     30-Day Expert Training
//                   </Typography>
//                   <Typography className={classes.statValue}>
                    
//                   </Typography>
//                 </Box>
                
//                 <Box className={classes.statItem}>
//                   <Typography className={classes.statTitle}>
//                     ₹199 Limited Offer
//                   </Typography>
//                   <Typography className={classes.statValue}>
                    
//                   </Typography>
//                 </Box>
//               </Box>
              
//               <Button variant="contained" className={classes.joinButton}>
//                 Join Us Now
//               </Button>
              
//               <Typography className={classes.eligibilityText}>
//                 Eligible for 2023, 2024, and 2025 batches
//               </Typography>
//             </Box>
//           </Grid>
          
//           <Grid item xs={12} md={5}>
//             <Box className={classes.imageContainer}>
//               <img 
//                 src="/path/to/data-science-student.png" 
//                 alt="Data Science Student with Laptop" 
//                 className={classes.heroImage}
//               />
              
//               <Box className={classes.pricingBox}>
//                 <Typography className={classes.regularPrice}>
//                   Regular Price ₹499
//                 </Typography>
//                 <Typography className={classes.offerText}>
//                   Special Offer
//                 </Typography>
//                 <Typography className={classes.specialPrice}>
//                   ₹199 <span>only</span>
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default DataScienceHero;
import React from 'react'
import { makeStyles } from '@mui/styles'
import HeroImage from '../../../assets/datascience.png'

const useStyles = makeStyles({
  heroContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  heroImage: {
    width: '100vw',
    objectFit: 'cover',
    borderRadius: '8px',
  }
});

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContainer}>
      <img src={HeroImage} alt="Hero" className={classes.heroImage} />
    </div>
  )
}

export default Hero
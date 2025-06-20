// // src/components/common/hiringpartners/EnhancedHiringPartners.jsx
// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// // Import existing SVG logos
// import { ReactComponent as AccentureLogo } from '../../../assets/hiringpartners/Accenture.svg';
// import { ReactComponent as AmazonLogo } from '../../../assets/hiringpartners/Amazon.svg';
// import { ReactComponent as BharatPeLogo } from '../../../assets/hiringpartners/BharatPe.svg';
// import { ReactComponent as CapgeminiLogo } from '../../../assets/hiringpartners/capgemini.svg';
// import { ReactComponent as CredLogo } from '../../../assets/hiringpartners/Cred.svg';
// import { ReactComponent as DellLogo } from '../../../assets/hiringpartners/Dell.svg';
// import { ReactComponent as DeloitteLogo } from '../../../assets/hiringpartners/deloitte.svg';
// import { ReactComponent as FlipkartLogo } from '../../../assets/hiringpartners/Flipkart.svg';
// import { ReactComponent as InfosysLogo } from '../../../assets/hiringpartners/Infosys.svg';
// import { ReactComponent as MuSigmaLogo } from '../../../assets/hiringpartners/Mu-Sigma.svg';
// import { ReactComponent as PharmEasyLogo } from '../../../assets/hiringpartners/pharmeasy.svg';
// import { ReactComponent as PhonePeLogo } from '../../../assets/hiringpartners/PhonePe.svg';
// import { ReactComponent as TcsLogo } from '../../../assets/hiringpartners/tcs.svg';
// import { ReactComponent as TechMahindraLogo } from '../../../assets/hiringpartners/Tech_Mahindra.svg';
// import { ReactComponent as WiproLogo } from '../../../assets/hiringpartners/Wipro.svg';
// import { ReactComponent as ZohoLogo } from '../../../assets/hiringpartners/zoho.svg';

// // Import new SVG logos
// import { ReactComponent as AdidasLogo } from '../../../assets/hiringpartners/Adidas-logo.svg';
// import { ReactComponent as CaterpillarLogo } from '../../../assets/hiringpartners/caterpillar-preview.svg';
// import { ReactComponent as InfrrtLogo } from '../../../assets/hiringpartners/Infrrt.svg';
// import { ReactComponent as MedplusLogo } from '../../../assets/hiringpartners/Medplus_logo.svg';
// import { ReactComponent as GoldmanSachsLogo } from '../../../assets/hiringpartners/goldman-sachs.svg';
// import { ReactComponent as PaytmLogo } from '../../../assets/hiringpartners/paytm.svg';
// import { ReactComponent as HappyFoxLogo } from '../../../assets/hiringpartners/happyfox.svg';
// import { ReactComponent as SynopsysLogo } from '../../../assets/hiringpartners/Synopsys_Logo.svg';

// const useStyles = makeStyles({
//   partnersSectionWrapper: {
//     width: '100%',
//     backgroundColor: 'transparent',
//     padding: '50px 0',
//     margin: '5px 0',
//     '@media (max-width: 768px)': {
//       padding: '40px 0',
//       margin: '20px 0',
//     },
//   },
//   titleContainer: {
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '40px',
//     position: 'relative',
//     zIndex: 2,
//     '@media (max-width: 768px)': {
//       marginBottom: '30px',
//     },
//   },
//   sectionTitle: {
//     color: "#2A2B6A !important",
//     fontWeight: 'bold !important',
//     textAlign: 'center !important',
//     fontSize: "2.5rem !important",
//     position: 'relative',
//     '@media (max-width: 960px)': {
//       fontSize: '2rem !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '1.8rem !important',
//       '&:after': {
//         width: '50px',
//         bottom: '-10px',
//       },
//     },
//   },
//   subtitle: {
//     color: "#555555 !important",
//     textAlign: 'center !important',
//     fontSize: "1.1rem !important",
//     maxWidth: '800px',
//     margin: '30px auto 0 !important',
//     '@media (max-width: 960px)': {
//       fontSize: '1rem !important',
//       maxWidth: '90%',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '0.9rem !important',
//       margin: '25px auto 0 !important',
//     },
//   },
//   highlightText: {
//     fontWeight: '600 !important',
//     color: '#2A2B6A !important',
//   },
//   partnersSection: {
//     width: '100%',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '0 20px',
//     '@media (max-width: 768px)': {
//       padding: '0 15px',
//     },
//   },
//   logoGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(6, 1fr)',
//     gap: '30px',
//     alignItems: 'center',
//     justifyItems: 'center',
//     '@media (max-width: 1200px)': {
//       gridTemplateColumns: 'repeat(5, 1fr)',
//       gap: '25px',
//     },
//     '@media (max-width: 960px)': {
//       gridTemplateColumns: 'repeat(4, 1fr)',
//       gap: '20px',
//     },
//     '@media (max-width: 768px)': {
//       gridTemplateColumns: 'repeat(3, 1fr)',
//       gap: '15px',
//     },
//     '@media (max-width: 480px)': {
//       gridTemplateColumns: 'repeat(2, 1fr)',
//       gap: '10px',
//     },
//   },
//   logoWrapper: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '15px',
//     borderRadius: '8px',
//     transition: 'all 0.3s ease',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
//     '&:hover': {
//       transform: 'translateY(-5px)',
//       boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
//       backgroundColor: 'rgba(255, 255, 255, 1)',
//     },
//     '@media (max-width: 768px)': {
//       padding: '10px',
//     },
//     '@media (max-width: 480px)': {
//       padding: '8px',
//     },
//   },
//   logoSvg: {
//     width: '120px',
//     height: '60px',
//     opacity: 0.85,
//     transition: 'all 0.3s ease',
//     objectFit: 'contain',
//     '&:hover': {
//       opacity: 1,
//     },
//     '@media (max-width: 1200px)': {
//       width: '100px',
//       height: '50px',
//     },
//     '@media (max-width: 960px)': {
//       width: '90px',
//       height: '45px',
//     },
//     '@media (max-width: 768px)': {
//       width: '80px',
//       height: '40px',
//     },
//     '@media (max-width: 480px)': {
//       width: '70px',
//       height: '35px',
//     },
//   },
//   connectButton: {
//     marginTop: '30px',
//     padding: '12px 30px',
//     backgroundColor: '#FFC614',
//     color: '#2A2B6A',
//     border: 'none',
//     borderRadius: '5px',
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       backgroundColor: '#2A2B6A',
//       color: '#FFC614',
//     },
//     '@media (max-width: 600px)': {
//       padding: '10px 25px',
//       fontSize: '1rem',
//     },
//   },
//   bottomContent: {
//     textAlign: 'center',
//     marginTop: '50px',
//     '@media (max-width: 768px)': {
//       marginTop: '40px',
//     },
//   },
// });

// const HiringPartners = () => {
//   const classes = useStyles();

//   // All logos combined
//   const allLogos = [
//     { Logo: AmazonLogo, alt: 'Amazon' },
//     { Logo: AccentureLogo, alt: 'Accenture' }, 
//     { Logo: CapgeminiLogo, alt: 'Capgemini' },
//     { Logo: DellLogo, alt: 'Dell' },
//     { Logo: DeloitteLogo, alt: 'Deloitte' },
//     { Logo: FlipkartLogo, alt: 'Flipkart' },
//     { Logo: GoldmanSachsLogo, alt: 'Goldman Sachs' },
//     { Logo: AdidasLogo, alt: 'Adidas' },
//     { Logo: PaytmLogo, alt: 'Paytm' },
//     { Logo: ZohoLogo, alt: 'Zoho' },
//     { Logo: TcsLogo, alt: 'TCS' },
//     { Logo: SynopsysLogo, alt: 'Synopsys' },
//     { Logo: InfosysLogo, alt: 'Infosys' },
//     { Logo: WiproLogo, alt: 'Wipro' },
//     { Logo: MuSigmaLogo, alt: 'Mu Sigma' },
//     { Logo: TechMahindraLogo, alt: 'Tech Mahindra' },
//     { Logo: PharmEasyLogo, alt: 'PharmEasy' },
//     { Logo: PhonePeLogo, alt: 'PhonePe' },
//     { Logo: BharatPeLogo, alt: 'BharatPe' },
//     { Logo: CredLogo, alt: 'Cred' },
//     { Logo: InfrrtLogo, alt: 'Infrrt' },
//     { Logo: MedplusLogo, alt: 'Medplus' },
//     { Logo: CaterpillarLogo, alt: 'Caterpillar' },
//     { Logo: HappyFoxLogo, alt: 'HappyFox' },
//   ];

//   return (
//     <Box className={classes.partnersSectionWrapper}>
//       {/* Title section */}
//       <Box className={classes.titleContainer}>
//         <Box sx={{ textAlign: 'center' }}>
//           <Typography variant="h2" className={classes.sectionTitle}>
//             Backed by our <span style={{ color: '#FFC614' }}>Hiring Partners</span>
//           </Typography>
//         </Box>
//       </Box>
      
//       <Box className={classes.partnersSection}>
//         {/* Logo grid */}
//         <Box className={classes.logoGrid}>
//           {allLogos.map(({ Logo, alt }, index) => (
//             <Box key={index} className={classes.logoWrapper}>
//               <Logo 
//                 className={classes.logoSvg} 
//                 title={alt}
//                 aria-label={alt}
//               />
//             </Box>
//           ))}
//         </Box>

//         {/* Bottom content */}
//         <Box className={classes.bottomContent}>
//           <Typography className={classes.subtitle}>
//             Explore collaboration opportunities. Partner with us to connect with candidates who are trained on real-world projects and ready to contribute from day one.
//           </Typography>
//           <button className={classes.connectButton}>
//             Connect with Us
//           </button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default HiringPartners;
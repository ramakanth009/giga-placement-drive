// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Button,
//   IconButton,
//   Box,
//   Menu,
//   MenuItem,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { makeStyles } from "@mui/styles";
// // import { ReactComponent as GigaLogo } from "../../../assets/GIGAVERSITY_LOGO.svg";
// import GigaLogo  from "../../../assets/GIGAVERSITY_LOGO.png";
// import { Link, useLocation } from "react-router-dom";
// import { scrollToTop } from "../../../utils/scrollUtils";
// import CentralizedPopupForms from '../../common/popupforms/CentralizedPopupForms';

// // Define styles using makeStyles
// const useStyles = makeStyles({
//   appBar: {
//     backgroundColor: "transparent !important",
//     boxShadow: "none !important",
//     backgroundImage: "none !important",
//     position: "relative",
//     zIndex: 9999,
//   },
//   toolbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "16px 24px",
//     "@media (max-width: 960px)": {
//       padding: "12px 16px",
//     },
//     "@media (max-width: 600px)": {
//       padding: "10px 12px",
//     },
//   },
//   logo: {
//     width: 60,
//     height: 60,
//     marginRight: 16,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     overflow: "hidden",
//     "@media (max-width: 960px)": {
//       width: 50,
//       height: 50,
//       marginRight: 8,
//     },
//     "@media (max-width: 600px)": {
//       width: 45,
//       height: 45,
//       marginRight: 4,
//     },
//   },
//   logoSvg: {
//     maxWidth: "100%",
//     maxHeight: "100%",
//     objectFit: "contain",
//   },
//   navContainer: {
//     display: "flex",
//     flexGrow: 1,
//     justifyContent: "center",
//   },
//   navLink: {
//     margin: "0 8px",
//     color: "#2A2B6A !important",
//     fontWeight: "500 !important",
//     padding: "8px 16px !important",
//     transition: "all 0.3s ease !important",
//     "&:hover": {
//       backgroundColor: "rgba(42, 43, 106, 0.05) !important",
//       transform: "translateY(-2px)",
//     },
//     "@media (max-width: 1200px)": {
//       margin: "0 4px",
//       padding: "8px 12px !important",
//     },
//   },
//   authContainer: {
//     display: "flex",
//     alignItems: "center",
//   },
//   signUpButton: {
//     backgroundColor: "#232459 !important",
//     color: "white !important",
//     padding: "8px 24px !important",
//     borderRadius: "4px !important",
//     fontWeight: "bold !important",
//     transition: "all 0.3s ease !important",
//     "&:hover": {
//       backgroundColor: "#1a1b43 !important",
//       transform: "translateY(-2px)",
//     },
//     "@media (max-width: 1200px)": {
//       padding: "8px 16px !important",
//     },
//   },
//   menuButton: {
//     marginLeft: "auto",
//     color: "#0a192f !important",
//     padding: "8px !important",
//   },
//   mobileMenu: {
//     "& .MuiPaper-root": {
//       borderRadius: "8px",
//       marginTop: "8px",
//       boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//     },
//   },
//   menuItem: {
//     padding: "12px 24px",
//     transition: "background-color 0.3s ease",
//     "&:hover": {
//       backgroundColor: "rgba(42, 43, 106, 0.05)",
//     },
//     "@media (max-width: 600px)": {
//       padding: "10px 20px",
//     },
//   },
//   signUpMenuItem: {
//     backgroundColor: "#f5f5f5",
//     color: "#0a192f",
//     fontWeight: "bold",
//   },
//   active: {
//     position: "relative",
//     "&::after": {
//       content: '""',
//       position: "absolute",
//       bottom: "5px",
//       left: "16px",
//       right: "16px",
//       height: "2px",
//       backgroundColor: "#FFC614",
//     },
//     "@media (max-width: 1200px)": {
//       "&::after": {
//         left: "12px",
//         right: "12px",
//       },
//     },
//   },
//   dropdown: {
//     position: "relative",
//     "&:hover $dropdownContent": {
//       display: "block",
//       opacity: 1,
//       visibility: "visible",
//       transform: "translateY(0)",
//     },
//     "&:hover $dropdownIcon": {
//       transform: "rotate(180deg)",
//     },
//   },
//   dropdownContent: {
//     position: "absolute",
//     top: "100%",
//     left: "0",
//     minWidth: "220px",
//     backgroundColor: "#fff",
//     boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//     borderRadius: "8px",
//     padding: "8px 0",
//     zIndex: 10000,
//     opacity: 0,
//     visibility: "hidden",
//     transform: "translateY(10px)",
//     transition: "all 0.3s ease",
//   },
//   dropdownItem: {
//     display: "block",
//     width: "100%",
//     padding: "10px 16px",
//     color: "#2A2B6A",
//     textDecoration: "none",
//     fontSize: "14px",
//     fontWeight: "500",
//     transition: "background-color 0.3s ease",
//     "&:hover": {
//       backgroundColor: "rgba(42, 43, 106, 0.05)",
//     },
//   },
//   dropdownIcon: {
//     marginLeft: "4px",
//     fontSize: "18px",
//     transition: "transform 0.3s ease",
//     verticalAlign: "middle",
//   },
//   dropdownText: {
//     display: "flex",
//     alignItems: "center",
//   },
//   mobileSubmenu: {
//     paddingLeft: "20px",
//   },
//   mobileSubmenuItem: {
//     padding: "8px 16px",
//     color: "#2A2B6A",
//     fontSize: "14px",
//     "&:hover": {
//       backgroundColor: "rgba(42, 43, 106, 0.05)",
//     },
//   },
// });

// const Navbar = () => {
//   const classes = useStyles();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const [popupOpen, setPopupOpen] = useState(false);

//   const [mobileVirtualPlacementOpen, setMobileVirtualPlacementOpen] = useState(false);
//   const [mobileFullTimeOpen, setMobileFullTimeOpen] = useState(false);

//   const location = useLocation();
//   const currentPath = location.pathname;

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setMobileVirtualPlacementOpen(false);
//     setMobileFullTimeOpen(false);
//   };

//   const handleNavLinkClick = () => {
//     if (isMobile) {
//       handleClose();
//     }
//     scrollToTop();
//   };

//   const toggleMobileVirtualPlacement = (e) => {
//     e.stopPropagation();
//     setMobileVirtualPlacementOpen(!mobileVirtualPlacementOpen);
//     setMobileFullTimeOpen(false);
//   };

//   const toggleMobileFullTime = (e) => {
//     e.stopPropagation();
//     setMobileFullTimeOpen(!mobileFullTimeOpen);
//     setMobileVirtualPlacementOpen(false);
//   };

//   const handleApplyClick = (e) => {
//     if (e) e.preventDefault();
//     setPopupOpen(true);
//     if (isMobile) handleClose();
//   };

//   const handlePopupClose = () => {
//     setPopupOpen(false);
//   };

//   return (
//     <AppBar position="relative" className={classes.appBar} sx={{ zIndex: 9999 }}>
//       <Toolbar className={classes.toolbar}>
//         <Box
//           className={classes.logo}
//           component={Link}
//           to="/"
//           onClick={scrollToTop}
//         >
//           {/* <GigaLogo className={classes.logoSvg} /> */}
//            <img 
//     src={GigaLogo} 
//     alt="Gigaversity Logo"
//     className={classes.logoSvg} 
//   />
//         </Box>

//         {!isMobile ? (
//           <>
//             <Box className={classes.navContainer}>
//               <Button
//                 className={`${classes.navLink} ${
//                   currentPath === "/" ? classes.active : ""
//                 }`}
//                 component={Link}
//                 to="/"
//                 onClick={handleNavLinkClick}
//               >
//                 Home
//               </Button>
              
//               <Box className={classes.dropdown}>
//                 <Button
//                   className={`${classes.navLink} ${
//                     (currentPath === "/fullstack" ||
//                      currentPath === "/datascience")
//                       ? classes.active
//                       : ""
//                   }`}
//                 >
//                   <Box className={classes.dropdownText}>
//                     Full Time Programs
//                     <KeyboardArrowDownIcon className={classes.dropdownIcon} />
//                   </Box>
//                 </Button>
//                 <Box className={classes.dropdownContent}>
//                   <Link
//                     to="/fullstack"
//                     className={classes.dropdownItem}
//                     onClick={handleNavLinkClick}
//                   >
//                     Full Stack Program
//                   </Link>
//                   <Link
//                     to="/datascience"
//                     className={classes.dropdownItem}
//                     onClick={handleNavLinkClick}
//                   >
//                     Data Science Program
//                   </Link>
//                 </Box>
//               </Box>

              
//               <Box className={classes.dropdown}>
//                 <Button
//                   className={`${classes.navLink} ${
//                     (currentPath === "/virtual-placement-fullstack" || 
//                      currentPath === "/virtual-placement-datascience")
//                       ? classes.active
//                       : ""
//                   }`}
//                 >
//                   <Box className={classes.dropdownText}>
//                     Virtual Placement
//                     <KeyboardArrowDownIcon className={classes.dropdownIcon} />
//                   </Box>
//                 </Button>
//                 <Box className={classes.dropdownContent}>
//                   <Link
//                     to="/virtual-placement-fullstack"
//                     className={classes.dropdownItem}
//                     onClick={handleNavLinkClick}
//                   >
//                     Full Stack
//                   </Link>
//                   <Link
//                     to="/virtual-placement-datascience"
//                     className={classes.dropdownItem}
//                     onClick={handleNavLinkClick}
//                   >
//                     Data Science
//                   </Link>
//                 </Box>
//               </Box>

              
              
//               <Button
//                 className={`${classes.navLink} ${
//                   currentPath === "/giga-resume-builder" ? classes.active : ""
//                 }`}
//                 component={Link}
//                 to="/giga-resume-builder"
//                 onClick={handleNavLinkClick}
//               >
//                 Products
//               </Button>
//               <Button
//                 className={`${classes.navLink} ${
//                   currentPath === "/blog" || currentPath.startsWith("/blog/") ? classes.active : ""
//                 }`}
//                 component={Link}
//                 to="/blog"
//                 onClick={handleNavLinkClick}
//               >
//                 Blog
//               </Button>
//               <Button
//                 className={`${classes.navLink} ${
//                   currentPath === "/about" ? classes.active : ""
//                 }`}
//                 component={Link}
//                 to="/about"
//                 onClick={handleNavLinkClick}
//               >
//                 About Us
//               </Button>
//               <Button
//                 className={`${classes.navLink} ${
//                   currentPath === "/contact" ? classes.active : ""
//                 }`}
//                 component={Link}
//                 to="/contact"
//                 onClick={handleNavLinkClick}
//               >
//                 Contact Us
//               </Button>
//             </Box>

//             <Box className={classes.authContainer}>
//               <Button
//                 variant="contained"
//                 className={classes.signUpButton}
//                 onClick={handleApplyClick}
//               >
//                 Apply Now
//               </Button>
//             </Box>
//           </>
//         ) : (
//           <IconButton
//             size="large"
//             edge="end"
//             aria-label="menu"
//             onClick={handleClick}
//             className={classes.menuButton}
//           >
//             <MenuIcon />
//           </IconButton>
//         )}

//         <Menu
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleClose}
//           className={classes.mobileMenu}
//         >
//           <MenuItem
//             onClick={() => handleNavLinkClick()}
//             className={classes.menuItem}
//             component={Link}
//             to="/"
//           >
//             Home
//           </MenuItem>
          
          
//           <MenuItem
//             onClick={toggleMobileFullTime}
//             className={classes.menuItem}
//           >
//             <Box className={classes.dropdownText}>
//               Full Time Programs
//               <KeyboardArrowDownIcon
//                 className={classes.dropdownIcon}
//                 style={{
//                   transform: mobileFullTimeOpen
//                     ? "rotate(180deg)"
//                     : "rotate(0deg)",
//                 }}
//               />
//             </Box>
//           </MenuItem>
//           {mobileFullTimeOpen && (
//             <Box className={classes.mobileSubmenu}>
//               <MenuItem
//                 onClick={() => handleNavLinkClick()}
//                 className={classes.mobileSubmenuItem}
//                 component={Link}
//                 to="/fullstack"
//               >
//                 Full Stack Program
//               </MenuItem>
//               <MenuItem
//                 onClick={() => handleNavLinkClick()}
//                 className={classes.mobileSubmenuItem}
//                 component={Link}
//                 to="/datascience"
//               >
//                 Data Science Program
//               </MenuItem>
//             </Box>
//           )}
// <MenuItem
//             onClick={toggleMobileVirtualPlacement}
//             className={classes.menuItem}
//           >
//             <Box className={classes.dropdownText}>
//               Virtual Placement
//               <KeyboardArrowDownIcon
//                 className={classes.dropdownIcon}
//                 style={{
//                   transform: mobileVirtualPlacementOpen
//                     ? "rotate(180deg)"
//                     : "rotate(0deg)",
//                 }}
//               />
//             </Box>
//           </MenuItem> 
//           {mobileVirtualPlacementOpen && (
//             <Box className={classes.mobileSubmenu}>
//               <MenuItem
//                 onClick={() => handleNavLinkClick()}
//                 className={classes.mobileSubmenuItem}
//                 component={Link}
//                 to="/virtual-placement-fullstack"
//               >
//                 Full Stack
//               </MenuItem> 
//               <MenuItem
//                 onClick={() => handleNavLinkClick()}
//                 className={classes.mobileSubmenuItem}
//                 component={Link}
//                 to="/virtual-placement-datascience"
//               >
//                 Data Science
//               </MenuItem>
//             </Box>
//           )}
          
//           <MenuItem
//             onClick={() => handleNavLinkClick()}
//             className={classes.menuItem}
//             component={Link}
//             to="/giga-resume-builder"
//           >
//             Products
//           </MenuItem>
//           <MenuItem
//             onClick={() => handleNavLinkClick()}
//             className={classes.menuItem}
//             component={Link}
//             to="/blog"
//           >
//             Blog
//           </MenuItem>
//           <MenuItem
//             onClick={() => handleNavLinkClick()}
//             className={classes.menuItem}
//             component={Link}
//             to="/about"
//           >
//             About Us
//           </MenuItem>
//           <MenuItem
//             onClick={() => handleNavLinkClick()}
//             className={classes.menuItem}
//             component={Link}
//             to="/contact"
//           >
//             Contact Us
//           </MenuItem>
          
//           <MenuItem
//             onClick={handleApplyClick}
//             className={`${classes.menuItem} ${classes.signUpMenuItem}`}
//           >
//             Apply Now
//           </MenuItem>
//         </Menu>
//       </Toolbar>
//       <CentralizedPopupForms
//         open={popupOpen}
//         onClose={handlePopupClose}
//         variant="dropdown"
//       />
//     </AppBar>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@mui/styles";
import GigaLogo  from "../../../assets/GIGAVERSITY_LOGO.png";
import { Link, useLocation } from "react-router-dom";
import { scrollToTop } from "../../../utils/scrollUtils";
import CentralizedPopupForms from '../../common/popupforms/CentralizedPopupForms';

// Define styles using makeStyles with enhanced animation effects
const useStyles = makeStyles({
  appBar: {
    backgroundColor: "transparent !important",
    boxShadow: "none !important",
    backgroundImage: "none !important",
    position: "relative",
    zIndex: 9999,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 24px",
    "@media (max-width: 960px)": {
      padding: "12px 16px",
    },
    "@media (max-width: 600px)": {
      padding: "10px 12px",
    },
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    "@media (max-width: 960px)": {
      width: 50,
      height: 50,
      marginRight: 8,
    },
    "@media (max-width: 600px)": {
      width: 45,
      height: 45,
      marginRight: 4,
    },
  },
  logoSvg: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  navContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
  },
  // Enhanced nav link with improved animation effect
  navLink: {
    margin: "0 8px",
    color: "#2A2B6A !important",
    fontWeight: "500 !important",
    padding: "8px 16px !important",
    position: "relative !important",
    transition: "all 0.3s ease-in-out !important",
    zIndex: 2,
    // Animation effect: scale on hover
    "&:hover": {
      backgroundColor: "transparent !important",
      transform: "scale(1.3)",
    },
    // Pseudo-elements for animation effect with reduced gap and yellow line
    "&::before": {
      content: '""',
      position: "absolute",
      top: "30px", // Reduced from 50px
      left: "16px",
      width: "calc(100% - 32px)",
      height: "2px",
      backgroundColor: "#FFC614", // Changed to yellow
      opacity: 0,
      transform: "translateY(15px)", // Reduced from 20px
      transition: "all 0.3s ease-in-out",
      transitionDelay: "0s",
    },
    "&::after": {
      content: "attr(data-alt-text)",
      position: "absolute",
      top: "35px", 
      left: "16px",
      width: "calc(100% - 32px)",
      fontSize: "0.50em", // Slightly smaller
      color: "rgba(42, 43, 106, 0.6)", // Dimmed brightness
      textAlign: "center",
      opacity: 0,
      transform: "translateY(15px)", // Reduced from 20px
      transition: "all 0.3s ease-in-out",
      transitionDelay: "0s",
    },
    // Animation on hover: slide up pseudo-elements with staggered timing
    "&:hover::before": {
      opacity: 1,
      transform: "translateY(0px)",
      transitionDelay: "0s",
    },
    "&:hover::after": {
      opacity: 1,
      transform: "translateY(0px)",
      transitionDelay: "0.15s",
    },
    "@media (max-width: 1200px)": {
      margin: "0 4px",
      padding: "8px 12px !important",
      "&::before": {
        left: "12px",
        width: "calc(100% - 24px)",
      },
      "&::after": {
        left: "12px",
        width: "calc(100% - 24px)",
      },
    },
  },
  authContainer: {
    display: "flex",
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: "#232459 !important",
    color: "white !important",
    padding: "8px 24px !important",
    borderRadius: "4px !important",
    fontWeight: "bold !important",
    transition: "all 0.3s ease !important",
    "&:hover": {
      backgroundColor: "#1a1b43 !important",
      transform: "translateY(-2px)",
    },
    "@media (max-width: 1200px)": {
      padding: "8px 16px !important",
    },
  },
  menuButton: {
    marginLeft: "auto",
    color: "#0a192f !important",
    padding: "8px !important",
  },
  mobileMenu: {
    "& .MuiPaper-root": {
      borderRadius: "8px",
      marginTop: "8px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
  },
  menuItem: {
    padding: "12px 24px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(42, 43, 106, 0.05)",
    },
    "@media (max-width: 600px)": {
      padding: "10px 20px",
    },
  },
  signUpMenuItem: {
    backgroundColor: "#f5f5f5",
    color: "#0a192f",
    fontWeight: "bold",
  },
  active: {
    position: "relative",
    // "&::after": {
    //   content: '""',
    //   position: "absolute",
    //   bottom: "5px",
    //   left: "16px",
    //   right: "16px",
    //   height: "2px",
    //   backgroundColor: "#FFC614",
    // },
    "@media (max-width: 1200px)": {
      "&::after": {
        left: "12px",
        right: "12px",
      },
    },
  },
  dropdown: {
    position: "relative",
    "&:hover $dropdownContent": {
      display: "block",
      opacity: 1,
      visibility: "visible",
      transform: "translateY(0)",
    },
    "&:hover $dropdownIcon": {
      transform: "rotate(180deg)",
    },
  },
  // Dropdown button with enhanced animation effect
  dropdownButton: {
    margin: "0 8px",
    color: "#2A2B6A !important",
    fontWeight: "500 !important",
    padding: "8px 16px !important",
    position: "relative !important",
    transition: "all 0.3s ease-in-out !important",
    zIndex: 2,
    
    // Scale transform on hover
    "&:hover": {
      backgroundColor: "transparent !important",
      transform: "scale(1.3)",
    },
    
    // Pseudo-element for underline with reduced gap and yellow color
    "&::before": {
      content: '""',
      position: "absolute",
      top: "30px", // Reduced from 50px
      left: "16px",
      width: "calc(100% - 32px)",
      height: "2px",
      backgroundColor: "#FFC614", // Changed to yellow
      opacity: 0,
      transform: "translateY(15px)", // Reduced from 20px
      transition: "all 0.3s ease-in-out",
      transitionDelay: "0s",
    },
    
    // Pseudo-element for alternative text with dimmed brightness
    "&::after": {
      content: "attr(data-alt-text)",
      position: "absolute",
      top: "35px", // Reduced gap
      left: "16px",
      width: "calc(100% - 32px)",
      fontSize: "0.65em", // Slightly smaller
      color: "rgba(42, 43, 106, 0.6)", // Dimmed brightness
      textAlign: "center",
      opacity: 0,
      transform: "translateY(15px)", // Reduced from 20px
      transition: "all 0.3s ease-in-out",
      transitionDelay: "0s",
    },
    
    // Staggered animation on hover
    "&:hover::before": {
      opacity: 1,
      transform: "translateY(0px)",
      transitionDelay: "0s",
    },
    "&:hover::after": {
      opacity: 1,
      transform: "translateY(0px)",
      transitionDelay: "0.15s",
    },
    
    "@media (max-width: 1200px)": {
      margin: "0 4px",
      padding: "8px 12px !important",
      "&::before": {
        left: "12px",
        width: "calc(100% - 24px)",
      },
      "&::after": {
        left: "12px",
        width: "calc(100% - 24px)",
      },
    },
  },
  dropdownContent: {
    marginTop: "40px",
    position: "absolute",
    top: "100%",
    left: "0",
    minWidth: "220px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "8px 0",
    zIndex: 10000,
    opacity: 0,
    visibility: "hidden",
    transform: "translateY(10px)",
    transition: "all 0.3s ease",
  },
  // Enhanced dropdown item with data-alt-text effects
  dropdownItem: {
    display: "block",
    width: "100%",
    padding: "10px 16px",
    color: "#2A2B6A",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    position: "relative",
    transition: "all 0.3s ease-in-out",
    marginBottom:"10px",
    "&:hover": {
      backgroundColor: "rgba(42, 43, 106, 0.05)",
      transform: "scale(1.05)",
    },
    
    // Pseudo-element for underline
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: "5px",
      left: "16px",
      width: "calc(100% - 32px)",
      height: "1.5px",
      backgroundColor: "#FFC614",
      opacity: 0,
      transform: "translateY(10px)",
      transition: "all 0.3s ease-in-out",
      transitionDelay: "0s",
    },
    
    // Pseudo-element for alternative text
    "&::after": {
      content: "attr(data-alt-text)",
      position: "absolute",
      bottom: "-10px",
      left: "16px",
      width: "calc(100% - 32px)",
      fontSize: "0.6em",
      color: "rgba(42, 43, 106, 0.5)",
      textAlign: "center",
      opacity: 0,
      transform: "translateY(10px)",
      transition: "all 0.3s ease-in-out",
      transitionDelay: "0s",
    },
    
    // Animation on hover
    "&:hover::before": {
      opacity: 1,
      transform: "translateY(0px)",
      transitionDelay: "0s",
    },
    "&:hover::after": {
      opacity: 1,
      transform: "translateY(0px)",
      transitionDelay: "0.1s",
    },
  },
  dropdownIcon: {
    marginLeft: "4px",
    fontSize: "18px",
    transition: "transform 0.3s ease",
    verticalAlign: "middle",
  },
  dropdownText: {
    display: "flex",
    alignItems: "center",
  },
  mobileSubmenu: {
    paddingLeft: "20px",
  },
  mobileSubmenuItem: {
    padding: "8px 16px",
    color: "#2A2B6A",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "rgba(42, 43, 106, 0.05)",
    },
  },
});

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [popupOpen, setPopupOpen] = useState(false);

  const [mobileVirtualPlacementOpen, setMobileVirtualPlacementOpen] = useState(false);
  const [mobileFullTimeOpen, setMobileFullTimeOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMobileVirtualPlacementOpen(false);
    setMobileFullTimeOpen(false);
  };

  const handleNavLinkClick = () => {
    if (isMobile) {
      handleClose();
    }
    scrollToTop();
  };

  const toggleMobileVirtualPlacement = (e) => {
    e.stopPropagation();
    setMobileVirtualPlacementOpen(!mobileVirtualPlacementOpen);
    setMobileFullTimeOpen(false);
  };

  const toggleMobileFullTime = (e) => {
    e.stopPropagation();
    setMobileFullTimeOpen(!mobileFullTimeOpen);
    setMobileVirtualPlacementOpen(false);
  };

  const handleApplyClick = (e) => {
    if (e) e.preventDefault();
    setPopupOpen(true);
    if (isMobile) handleClose();
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  return (
    <AppBar position="relative" className={classes.appBar} sx={{ zIndex: 9999 }}>
      <Toolbar className={classes.toolbar}>
        <Box
          className={classes.logo}
          component={Link}
          to="/"
          onClick={scrollToTop}
        >
           <img 
            src={GigaLogo} 
            alt="Gigaversity Logo"
            className={classes.logoSvg} 
          />
        </Box>

        {!isMobile ? (
          <>
            <Box className={classes.navContainer}>
              {/* Enhanced nav links with data-alt-text attributes for animation */}
              <Button
                className={`${classes.navLink} ${
                  currentPath === "/" ? classes.active : ""
                }`}
                component={Link}
                to="/"
                onClick={handleNavLinkClick}
                data-alt-text="Main Page"
              >
                Home
              </Button>
              
              <Box className={classes.dropdown}>
                <Button
                  className={`${classes.dropdownButton} ${
                    (currentPath === "/fullstack" ||
                     currentPath === "/datascience")
                      ? classes.active
                      : ""
                  }`}
                  data-alt-text="Complete Programs"
                >
                  <Box className={classes.dropdownText}>
                    Full Time Programs
                    <KeyboardArrowDownIcon className={classes.dropdownIcon} />
                  </Box>
                </Button>
                <Box className={classes.dropdownContent}>
                  <Link
                    to="/fullstack"
                    className={classes.dropdownItem}
                    onClick={handleNavLinkClick}
                    data-alt-text="Intensive Course"
                  >
                    Full Stack Program
                  </Link>
                  <Link
                    to="/datascience"
                    className={classes.dropdownItem}
                    onClick={handleNavLinkClick}
                    data-alt-text="Analytics Track"
                  >
                    Data Science Program
                  </Link>
                </Box>
              </Box>

              
              <Box className={classes.dropdown}>
                <Button
                  className={`${classes.dropdownButton} ${
                    (currentPath === "/virtual-placement-fullstack" || 
                     currentPath === "/virtual-placement-datascience")
                      ? classes.active
                      : ""
                  }`}
                  data-alt-text="Job Ready Training"
                >
                  <Box className={classes.dropdownText}>
                    Virtual Placement
                    <KeyboardArrowDownIcon className={classes.dropdownIcon} />
                  </Box>
                </Button>
                <Box className={classes.dropdownContent}>
                  <Link
                    to="/virtual-placement-fullstack"
                    className={classes.dropdownItem}
                    onClick={handleNavLinkClick}
                    data-alt-text="Web Development"
                  >
                    Full Stack
                  </Link>
                  <Link
                    to="/virtual-placement-datascience"
                    className={classes.dropdownItem}
                    onClick={handleNavLinkClick}
                    data-alt-text="Data Analytics"
                  >
                    Data Science
                  </Link>
                </Box>
              </Box>

              
              
              <Button
                className={`${classes.navLink} ${
                  currentPath === "/giga-resume-builder" ? classes.active : ""
                }`}
                component={Link}
                to="/giga-resume-builder"
                onClick={handleNavLinkClick}
                data-alt-text="Tools & Services"
              >
                Products
              </Button>
              <Button
                className={`${classes.navLink} ${
                  currentPath === "/blog" || currentPath.startsWith("/blog/") ? classes.active : ""
                }`}
                component={Link}
                to="/blog"
                onClick={handleNavLinkClick}
                data-alt-text="Thoughts"
              >
                Blog
              </Button>
              <Button
                className={`${classes.navLink} ${
                  currentPath === "/about" ? classes.active : ""
                }`}
                component={Link}
                to="/about"
                onClick={handleNavLinkClick}
                data-alt-text="Our Story"
              >
                About Us
              </Button>
              <Button
                className={`${classes.navLink} ${
                  currentPath === "/contact" ? classes.active : ""
                }`}
                component={Link}
                to="/contact"
                onClick={handleNavLinkClick}
                data-alt-text="Get In Touch"
              >
                Contact Us
              </Button>
            </Box>

            <Box className={classes.authContainer}>
              <Button
                variant="contained"
                className={classes.signUpButton}
                onClick={handleApplyClick}
              >
                Apply Now
              </Button>
            </Box>
          </>
        ) : (
          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            onClick={handleClick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          className={classes.mobileMenu}
        >
          <MenuItem
            onClick={() => handleNavLinkClick()}
            className={classes.menuItem}
            component={Link}
            to="/"
          >
            Home
          </MenuItem>
          
          
          <MenuItem
            onClick={toggleMobileFullTime}
            className={classes.menuItem}
          >
            <Box className={classes.dropdownText}>
              Full Time Programs
              <KeyboardArrowDownIcon
                className={classes.dropdownIcon}
                style={{
                  transform: mobileFullTimeOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              />
            </Box>
          </MenuItem>
          {mobileFullTimeOpen && (
            <Box className={classes.mobileSubmenu}>
              <MenuItem
                onClick={() => handleNavLinkClick()}
                className={classes.mobileSubmenuItem}
                component={Link}
                to="/fullstack"
              >
                Full Stack Program
              </MenuItem>
              <MenuItem
                onClick={() => handleNavLinkClick()}
                className={classes.mobileSubmenuItem}
                component={Link}
                to="/datascience"
              >
                Data Science Program
              </MenuItem>
            </Box>
          )}
        <MenuItem
            onClick={toggleMobileVirtualPlacement}
            className={classes.menuItem}
          >
            <Box className={classes.dropdownText}>
              Virtual Placement
              <KeyboardArrowDownIcon
                className={classes.dropdownIcon}
                style={{
                  transform: mobileVirtualPlacementOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              />
            </Box>
          </MenuItem> 
          {mobileVirtualPlacementOpen && (
            <Box className={classes.mobileSubmenu}>
              <MenuItem
                onClick={() => handleNavLinkClick()}
                className={classes.mobileSubmenuItem}
                component={Link}
                to="/virtual-placement-fullstack"
              >
                Full Stack
              </MenuItem> 
              <MenuItem
                onClick={() => handleNavLinkClick()}
                className={classes.mobileSubmenuItem}
                component={Link}
                to="/virtual-placement-datascience"
              >
                Data Science
              </MenuItem>
            </Box>
          )}
          
          <MenuItem
            onClick={() => handleNavLinkClick()}
            className={classes.menuItem}
            component={Link}
            to="/giga-resume-builder"
          >
            Products
          </MenuItem>
          <MenuItem
            onClick={() => handleNavLinkClick()}
            className={classes.menuItem}
            component={Link}
            to="/blog"
          >
            Blog
          </MenuItem>
          <MenuItem
            onClick={() => handleNavLinkClick()}
            className={classes.menuItem}
            component={Link}
            to="/about"
          >
            About Us
          </MenuItem>
          <MenuItem
            onClick={() => handleNavLinkClick()}
            className={classes.menuItem}
            component={Link}
            to="/contact"
          >
            Contact Us
          </MenuItem>
          
          <MenuItem
            onClick={handleApplyClick}
            className={`${classes.menuItem} ${classes.signUpMenuItem}`}
          >
            Apply Now
          </MenuItem>
        </Menu>
      </Toolbar>
      <CentralizedPopupForms
        open={popupOpen}
        onClose={handlePopupClose}
        variant="dropdown"
      />
    </AppBar>
  );
};

export default Navbar;
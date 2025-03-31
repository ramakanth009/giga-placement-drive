// src/components/footer/Footer.jsx
import React from "react";
import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ReactComponent as GigaLogo } from "../../assets/GIGAVERSITY_LOGO.svg";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { scrollToTop } from '../../utils/scrollUtils';

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#282880",
    color: "#ffffff",
    padding: "60px 0 20px 0",
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  column: {
    flex: "1",
    minWidth: "230px",
    marginBottom: "30px",
    paddingRight: "15px",
  },
  logoSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "20px",
  },
  logoWrapper: {
    width: "80px",
    height: "80px",
    marginBottom: "5px",
  },
  companyName: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  description: {
    color: "#e0e0e0",
    fontSize: "0.95rem",
    lineHeight: 1.5,
    marginBottom: "25px",
    maxWidth: "93%",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "1.25rem !important",
    fontWeight: "bold !important",
    marginBottom: "30px !important",
    position: "relative",
    paddingBottom: "10px",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "40px",
      height: "3px",
      backgroundColor: "#FFC614",
    },
  },
  linksList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  linkItem: {
    marginBottom: "15px",
  },
  linkText: {
    color: "#ffffff !important",
    textDecoration: "none !important",
    fontSize: "1rem",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#FFC614 !important",
      textDecoration: "underline !important",
    },
  },
  programLink: {
    color: "#ffffff !important",
    textDecoration: "none !important",
    fontSize: "1rem",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#FFC614 !important",
      textDecoration: "underline !important",
    },
  },
  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "20px",
  },
  contactIcon: {
    color: "#FFC614",
    marginRight: "15px",
    marginTop: "3px",
  },
  contactText: {
    color: "#ffffff",
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  contactLink: {
    color: "#ffffff !important",
    textDecoration: "none !important",
    fontSize: "1rem",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#FFC614 !important",
      textDecoration: "underline !important",
    },
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
    marginTop: "25px",
    flexWrap: "wrap",
  },
  socialIcon: {
    width: "40px",
    height: "40px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
    },
  },
  divider: {
    width: "100%",
    height: "1px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    margin: "20px 0",
  },
  copyright: {
    color: "#b0b0b0",
    fontSize: "0.9rem !important",
    textAlign: "center",
    padding: "10px 0 0",
  },
  poweredBy: {
    color: "#b0b0b0",
    fontSize: "0.6rem !important",
    textAlign: "center",
    padding: "10px 0 0",
  },
  "@media (max-width: 1100px)": {
    footerContainer: {
      justifyContent: "flex-start",
      gap: "40px",
    },
    column: {
      flex: "0 0 45%",
    },
  },
  "@media (max-width: 768px)": {
    column: {
      flex: "0 0 100%",
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Container maxWidth="lg">
        <Box className={classes.footerContainer}>
          {/* Company Info Column */}
          <Box className={classes.column}>
            <Box className={classes.logoSection}>
              <Box className={classes.logoWrapper}>
                <GigaLogo style={{ width: "100%", height: "100%" }} />
              </Box>
              <Typography variant="h6" className={classes.companyName}>
                Gigaversity
              </Typography>
            </Box>
            <Typography className={classes.description}>
              India's premier platform connecting students with top tech
              employers, offering specialized training for in-demand skills.
            </Typography>
          </Box>

          {/* Quick Links Column */}
          <Box className={classes.column}>
            <Typography className={classes.sectionTitle}>
              Quick Links
            </Typography>
            <ul className={classes.linksList}>
              <li className={classes.linkItem}>
                <MuiLink 
                  component={Link} 
                  to="/" 
                  className={classes.linkText}
                  onClick={scrollToTop}
                >
                  Home
                </MuiLink>
              </li>
              <li className={classes.linkItem}>
                <MuiLink
                  component={Link}
                  to="/about"
                  className={classes.linkText}
                  onClick={scrollToTop}
                >
                  About Us
                </MuiLink>
              </li>
              <li className={classes.linkItem}>
                <MuiLink
                  component={Link}
                  to="/contact"
                  className={classes.linkText}
                  onClick={scrollToTop}
                >
                  Contact Us
                </MuiLink>
              </li>
              <li className={classes.linkItem}>
                <MuiLink
                  component={Link}
                  to="/privacy-policy"
                  className={classes.linkText}
                  onClick={scrollToTop}
                >
                  Privacy Policy
                </MuiLink>
              </li>
              <li className={classes.linkItem}>
                <MuiLink
                  component={Link}
                  to="/terms-and-conditions"
                  className={classes.linkText}
                  onClick={scrollToTop}
                >
                  Terms & Conditions
                </MuiLink>
              </li>
            </ul>
          </Box>

          {/* Programs Column */}
          <Box className={classes.column}>
            <Typography className={classes.sectionTitle}>Programs</Typography>
            <ul className={classes.linksList}>
              {/* <li className={classes.linkItem}>
                <MuiLink
                  component={Link}
                  to="/programs/full-stack"
                  className={classes.programLink}
                >
                  Full Stack Development
                </MuiLink>
              </li>
              <li className={classes.linkItem}>
                <MuiLink
                  component={Link}
                  to="/programs/data-science"
                  className={classes.programLink}
                >
                  Data Science
                </MuiLink>
              </li> */}
              <li className={classes.linkItem}>
                <MuiLink
                  component={Link}
                  // to="/programs/placement-drive"
                  className={classes.programLink}
                  onClick={scrollToTop}
                >
                  Placement Drive
                </MuiLink>
              </li>
              <li className={classes.linkItem}>
                <MuiLink
                  component={Link}
                  // to="/programs/internship"
                  className={classes.programLink}
                  onClick={scrollToTop}
                >
                  Master Internship
                </MuiLink>
              </li>
            </ul>
          </Box>

          {/* Contact Info Column */}
          <Box className={classes.column}>
            <Typography className={classes.sectionTitle}>Contact Us</Typography>
            <Box className={classes.contactItem}>
              <LocationOnIcon className={classes.contactIcon} />
              <Typography className={classes.contactText}>
                The Headquarters, Dwaraka Pride, Hitech City, 500018, Hyderabad,
                Telangana, India
              </Typography>
            </Box>
            <Box className={classes.contactItem}>
              <PhoneIcon className={classes.contactIcon} />
              <Typography className={classes.contactText}>
                9849048999
              </Typography>
            </Box>
            <Box className={classes.contactItem}>
              <EmailIcon className={classes.contactIcon} />
              <MuiLink 
                href="mailto:Info@gigaversity.in" 
                className={classes.contactLink}
              >
                Info@gigaversity.in
              </MuiLink>
            </Box>

            {/* Social Media Icons moved to Contact section */}
            <Box className={classes.socialIcons}>
              <MuiLink href="https://www.facebook.com/gigaversity" target="_blank" rel="noopener noreferrer">
                <Box className={classes.socialIcon}>
                  <FacebookIcon />
                </Box>
              </MuiLink>
              <MuiLink href="https://www.linkedin.com/company/gigaversity" target="_blank" rel="noopener noreferrer">
                <Box className={classes.socialIcon}>
                  <LinkedInIcon />
                </Box>
              </MuiLink>
              <MuiLink href="https://twitter.com/gigaversity" target="_blank" rel="noopener noreferrer">
                <Box className={classes.socialIcon}>
                  <TwitterIcon />
                </Box>
              </MuiLink>
              <MuiLink href="https://wa.me/919849048999" target="_blank" rel="noopener noreferrer">
                <Box className={classes.socialIcon}>
                  <WhatsAppIcon />
                </Box>
              </MuiLink>
              <MuiLink href="https://www.youtube.com/channel/gigaversity" target="_blank" rel="noopener noreferrer">
                <Box className={classes.socialIcon}>
                  <YouTubeIcon />
                </Box>
              </MuiLink>
              <MuiLink href="https://www.instagram.com/gigaversity" target="_blank" rel="noopener noreferrer">
                <Box className={classes.socialIcon}>
                  <InstagramIcon />
                </Box>
              </MuiLink>
            </Box>
          </Box>
        </Box>

        <Box className={classes.divider} />
        <Typography className={classes.copyright}>
          Copyright © 2025 All rights reserved. Gigaversity
        </Typography>
        <Typography className={classes.poweredBy}>
          Powered by Sun E-Learning
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
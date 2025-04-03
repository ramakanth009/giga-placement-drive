// src/pages/aboutus/AboutUs.jsx
import React from "react";
import { Box, Typography, Container, Divider, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "../../components/homepagecomponets/navbar/Navbar";
import Background from "../../components/homepagecomponets/background/Background";
import Footer from "../../components/homepagecomponets/footer/Footer";

const useStyles = makeStyles({
  pageContainer: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    isolation: "isolate",
  },
  contentContainer: {
    position: "relative",
    zIndex: 1,
    padding: "40px 0 80px",
  },
  section: {
    marginBottom: "80px",
  },
  heroSection: {
    padding: "100px 0 60px",
    background: "linear-gradient(180deg, #2A2B6A 0%, #1A1B4A 100%)",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },
  heroGlow: {
    position: "absolute",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    filter: "blur(150px)",
    opacity: 0.15,
    zIndex: 0,
  },
  topRightGlow: {
    background: "#FFC614",
    top: "-200px",
    right: "-100px",
  },
  bottomLeftGlow: {
    background: "#4376eb",
    bottom: "-300px",
    left: "-200px",
  },
  heroTitle: {
    fontSize: "3.5rem !important",
    fontWeight: "bold !important",
    marginBottom: "20px !important",
    position: "relative",
    zIndex: 1,
    "& span": {
      color: "#FFC614 !important",
    },
  },
  heroSubtitle: {
    fontSize: "1.25rem !important",
    maxWidth: "800px",
    margin: "0 auto !important",
    opacity: 0.9,
    position: "relative",
    zIndex: 1,
  },
  sectionTitle: {
    fontSize: "2.5rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "30px !important",
    position: "relative",
    "& span": {
      color: "#FFC614 !important",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "-10px",
      left: 0,
      width: "60px",
      height: "3px",
      background: "#FFC614",
    },
  },
  sectionText: {
    fontSize: "1.1rem !important",
    color: "#4A4A4A !important",
    lineHeight: "1.8 !important",
    marginBottom: "20px !important",
  },
  emphasis: {
    fontWeight: "bold !important",
    fontSize: "1.25rem !important",
    fontStyle: "italic !important",
    display: "block",
    margin: "30px 0 !important",
    color: "#2A2B6A !important",
    textAlign: "center",
  },
  valueBox: {
    backgroundColor: "#f9fafc",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
    height: "100%",
  },
  valueTitle: {
    fontSize: "1.8rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "20px !important",
  },
  valueText: {
    fontSize: "1rem !important",
    color: "#4A4A4A !important",
    lineHeight: "1.7 !important",
  },
  founderSection: {
    padding: "40px",
    backgroundColor: "#f9fafc",
    borderRadius: "16px",
    textAlign: "center",
    marginBottom: "80px",
  },
  founderTitle: {
    fontSize: "2rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "40px !important",
  },
  foundersContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "60px",
    marginTop: "30px",
  },
  founderCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  founderAvatar: {
    width: "120px !important",
    height: "120px !important",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1) !important",
    marginBottom: "20px !important",
  },
  founderName: {
    fontSize: "1.5rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "5px !important",
  },
  founderPosition: {
    fontSize: "1.1rem !important",
    color: "#666 !important",
    marginBottom: "15px !important",
  },
  programsSection: {
    marginBottom: "80px",
  },
  programCard: {
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
    height: "100%",
    border: "1px solid #eaeaea",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
    },
  },
  programTitle: {
    fontSize: "1.4rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "15px !important",
  },
  programText: {
    fontSize: "1rem !important",
    color: "#4A4A4A !important",
    lineHeight: "1.7 !important",
  },
  contactSection: {
    marginTop: "80px",
  },
  contactInfo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  contactIcon: {
    color: "#2A2B6A !important",
    marginRight: "15px !important",
    fontSize: "1.5rem !important",
  },
  contactText: {
    fontSize: "1.1rem !important",
    color: "#4A4A4A !important",
  },
  socialIcons: {
    display: "flex",
    gap: "20px",
    marginTop: "30px",
  },
  socialIcon: {
    width: "50px !important",
    height: "50px !important",
    backgroundColor: "#eaecf2 !important",
    color: "#2A2B6A !important",
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    borderRadius: "50% !important",
    fontSize: "24px !important",
    transition: "all 0.3s ease !important",
    "&:hover": {
      backgroundColor: "#2A2B6A !important",
      color: "white !important",
      transform: "translateY(-5px)",
    },
  },
  divider: {
    margin: "60px 0 !important",
  },
});

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.pageContainer}>
      <Background />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        {/* Hero Section */}
        <Box className={classes.heroSection}>
          {/* Background glows */}
          <Box className={`${classes.heroGlow} ${classes.topRightGlow}`} />
          <Box className={`${classes.heroGlow} ${classes.bottomLeftGlow}`} />

          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <Typography variant="h1" className={classes.heroTitle}>
                About <span>Gigaversity</span>
              </Typography>
              <Typography variant="h6" className={classes.heroSubtitle}>
                India's first product-based learning platform, designed to equip students with practical skills, industry experience, and direct job opportunities.
              </Typography>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="lg" className={classes.contentContainer}>
          {/* Why We Started Section */}
          <Box className={classes.section}>
            <Typography variant="h2" className={classes.sectionTitle}>
              Why did we start <span>Gigaversity</span>
            </Typography>
            <Typography className={classes.sectionText}>
              Every year, millions of students graduate, but a huge number of them struggle to land a job. Not because they lack potential, but because they lack the real-world skills that companies actually need.
            </Typography>
            <Typography className={classes.sectionText}>
              We spoke to recruiters, hiring managers, and industry experts, and the message was clear:
            </Typography>
            <Typography className={classes.emphasis}>
            Degrees can open doors, but skills get you the job.
            </Typography>
            <Typography className={classes.sectionText}>
              Yet, most education systems still focus on theory over practice, leaving students unprepared for real job roles. Even edtech platforms focus on generic courses but fail to bridge the learning-to-hiring gap.
            </Typography>
            <Typography className={classes.sectionText}>
              That's where Gigaversity comes in. At Gigaversity, we believe you shouldn't just learn—you should get hired. And that's exactly what we help you do.
            </Typography>
          </Box>

          {/* Founders Section */}
          {/* <Box className={classes.founderSection}>
            <Typography variant="h3" className={classes.founderTitle}>
              Our Leadership
            </Typography>
            <Box className={classes.foundersContainer}>
              <Box className={classes.founderCard}>
                <Avatar className={classes.founderAvatar}>JM</Avatar>
                <Typography className={classes.founderName}>
                  Jaideep Maganti
                </Typography>
                <Typography className={classes.founderPosition}>
                  Founder & CEO
                </Typography>
              </Box>
              <Box className={classes.founderCard}>
                <Avatar className={classes.founderAvatar}>AL</Avatar>
                <Typography className={classes.founderName}>
                  Akhil Lanka
                </Typography>
                <Typography className={classes.founderPosition}>
                  Co-Founder
                </Typography>
              </Box>
            </Box>
          </Box> */}

          {/* What Sets Us Apart Section */}
          <Box className={classes.programsSection}>
            <Typography variant="h2" className={classes.sectionTitle}>
              What Sets Us <span>Apart</span>
            </Typography>
            
            <Box sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '30px',
              mt: 4,
              alignItems: 'stretch'
            }}>
              <Box sx={{ flex: '1 1 calc(33% - 20px)' }}>
                <Box className={classes.programCard}>
                  <Typography className={classes.programTitle}>
                    Virtual Placement Drive
                  </Typography>
                  <Typography className={classes.programText}>
                    A 30-day hiring & learning program with 100+ job opportunities, tailored training, and AI-powered learning.
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ flex: '1 1 calc(33% - 20px)' }}>
                <Box className={classes.programCard}>
                  <Typography className={classes.programTitle}>
                    Master Internship Program
                  </Typography>
                  <Typography className={classes.programText}>
                    A 3-month intensive internship where students develop one full-fledged product and receive 15 guaranteed interview opportunities.
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ flex: '1 1 calc(33% - 20px)' }}>
                <Box className={classes.programCard}>
                  <Typography className={classes.programTitle}>
                    Advanced Full-Stack & Data Science Program
                  </Typography>
                  <Typography className={classes.programText}>
                    A 9-month deep-dive training with three major projects, mini-projects, and 30 job opportunities for each student.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Divider className={classes.divider} />

          {/* Values Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h2" className={classes.sectionTitle} sx={{ mb: 4 }}>
              Our <span>Values</span>
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: '40px'
            }}>
              <Box sx={{ flex: 1 }}>
                <Box className={classes.valueBox}>
                  <Typography className={classes.valueTitle}>
                    Our Vision
                  </Typography>
                  <Typography className={classes.valueText}>
                    At Gigaversity, we envision a future where education is not just about acquiring knowledge but about building real-world expertise. Our goal is to create a product-based learning ecosystem where students don't just learn concepts but develop industry-grade projects, making them job-ready from day one. We aspire to bridge the gap between academic learning and real-world job demands, ensuring every learner gets hands-on experience, professional mentorship, and direct career opportunities in top companies.
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ flex: 1 }}>
                <Box className={classes.valueBox}>
                  <Typography className={classes.valueTitle}>
                    Our Mission
                  </Typography>
                  <Typography className={classes.valueText}>
                    Our mission at Gigaversity is to revolutionize technical and business education by providing job-specific, structured training programs that seamlessly blend theoretical learning with hands-on application. We emphasize real-world project development, ensuring students gain practical experience and build portfolio-worthy work. Through our Virtual Placement Drive and specialized Internship Programs, we create direct hiring opportunities by connecting skilled candidates with top recruiters.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>

        <Footer />
      </Box>
    </Box>
  );
};

export default AboutUs;
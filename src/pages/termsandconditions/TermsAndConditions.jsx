// src/pages/termsandconditions/TermsAndConditions.jsx
import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Divider
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "../../components/homepagecomponets/navbar/Navbar";
import Footer from "../../components/homepagecomponets/footer/Footer";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GavelIcon from '@mui/icons-material/Gavel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';
import CancelIcon from '@mui/icons-material/Cancel';
import PaymentIcon from '@mui/icons-material/Payment';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const useStyles = makeStyles({
  termsPage: {
    backgroundColor: "#f9fafc",
    minHeight: "100vh",
  },
  headerSection: {
    backgroundColor: "#2A2B6A",
    color: "white",
    padding: "100px 0 60px 0",
    position: "relative",
    overflow: "hidden",
  },
  backgroundGradient: {
    position: "absolute",
    width: "767px",
    height: "566px",
    top: "-100px",
    right: "-150px",
    background: "#BCE1FF",
    borderRadius: "50%",
    opacity: "0.15",
    filter: "blur(100px)",
    zIndex: "0",
  },
  headerContent: {
    position: "relative",
    zIndex: "1",
  },
  pageTitle: {
    fontSize: "3rem !important",
    fontWeight: "bold !important",
    marginBottom: "16px !important",
    "& span": {
      color: "#FFC614 !important",
    },
  },
  pageSubtitle: {
    fontSize: "1.2rem !important",
    maxWidth: "800px",
    fontWeight: "400 !important",
    opacity: "0.9",
  },
  contentSection: {
    padding: "40px 0 60px 0",
    backgroundColor: "white",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
    margin: "0 auto",
    borderRadius: "20px",
    transform: "translateY(-30px)",
    position: "relative",
    zIndex: "2",
  },
  accordionContainer: {
    margin: "0 auto",
    maxWidth: "90%",
  },
  accordion: {
    margin: "0 0 16px 0 !important",
    borderRadius: "10px !important",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1) !important",
    "&:before": {
      display: "none",
    },
    "&.Mui-expanded": {
      margin: "0 0 16px 0 !important",
    },
  },
  accordionSummary: {
    backgroundColor: "#f5f7fb",
    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
    minHeight: "64px",
    "&.Mui-expanded": {
      minHeight: "64px",
    },
  },
  accordionIcon: {
    marginRight: "15px",
    color: "#2A2B6A",
    fontSize: "24px !important",
  },
  accordionTitle: {
    fontSize: "1.2rem !important",
    fontWeight: "600 !important",
    color: "#2A2B6A !important",
    display: "flex",
    alignItems: "center",
  },
  accordionContent: {
    padding: "24px",
  },
  contentText: {
    fontSize: "1rem !important",
    color: "#4A4A4A !important",
    lineHeight: "1.7 !important",
    marginBottom: "16px !important",
  },
  highlight: {
    color: "#2A2B6A !important",
    fontWeight: "600 !important",
  },
  divider: {
    margin: "24px 0 !important",
  },
  lastUpdated: {
    fontStyle: "italic !important",
    color: "#6A6B6C !important",
    marginTop: "40px !important",
    textAlign: "center !important",
  },
  expandIcon: {
    color: "#2A2B6A !important",
  },
  listItem: {
    margin: "8px 0 !important",
    paddingLeft: "20px !important",
    position: "relative !important",
    "&:before": {
      content: '"•"',
      position: "absolute",
      left: "0",
      color: "#2A2B6A",
      fontWeight: "bold",
    },
  },
});

const TermsAndConditions = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('introduction');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <GavelIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            This is a legal and binding agreement between you, the user (referred to as "user" or "you") of the Programs, as defined below, and Gigaversity (together with its subsidiaries, and international affiliates, hereinafter "Gigaversity," "us," "we," or "our" or "the Company") stating the terms that govern your use of the Platform, as defined below.
          </Typography>
          <Typography className={classes.contentText}>
            The website www.gigaversity.in and mobile apps (collectively referred to as the "Platform") and the information, services and other materials contained therein are provided and operated by Gigaversity. Gigaversity offers curated and specially designed online higher education and industry-relevant certification programs and career assistance services ("Programs").
          </Typography>
          <Typography className={classes.contentText}>
            Please review our Terms of Use, Privacy Policy and other policies available on the Platform (collectively referred to as the "Terms") that govern the use of the Platform and Programs. By accepting these Terms in any manner or accessing the website, you consent, agree, and undertake to abide, be bound by and adhere to the Terms and if you do not agree to these Terms, you are not entitled to avail of/use the Programs and any use thereafter shall be unauthorised.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'program-terms',
      title: 'Program Terms',
      icon: <SchoolIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            Each Program may have a separate set of terms dealing with refunds, deferrals, payments, etc. governing such Programs, and our corporate clients may have executed separate written agreements with us, which, in the event of a conflict, will supersede these Terms to the extent of the conflicting provisions.
          </Typography>
          <Typography className={classes.contentText}>
            These Terms shall apply to Gigaversity hosted mobile apps, WhatsApp groups, Facebook groups, Instagram pages, Facebook pages, email/SMS/phone communications and other social media forums hosted by Gigaversity, which shall be deemed to be part of the 'Platform' by reference. You acknowledge that certain parts of the Platform, as mentioned above, are provided by third-party service providers, and you agree to abide by their terms and conditions. Gigaversity shall not be responsible for any disruption of services caused by such third-party service providers.
          </Typography>
          <Typography className={classes.contentText}>
            Although you may "bookmark" a particular portion of the Platform and thereby bypass these Terms, your use of the Platform still binds you to these Terms.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'account-registration',
      title: 'Accounts & Registration',
      icon: <AccountCircleIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            In order to participate in most Platform activities and to apply for a Program, you will need to register for a personal account ("User Account") by undergoing a two-step verification process to verify your login credentials such as your phone number, by way of a one-time password which will be sent to your phone number simultaneously and/or by providing an email address and a password that is unique.
          </Typography>
          <Typography className={classes.contentText}>
            Upon payment of the Program fees – in part or whole, depending on the Program – Gigaversity shall deliver the terms of use of the Program and grant you access to the Program. The invoice may be provided to you along with the email confirmation or within two (2) months thereafter. This shall be a proof of delivery against the successful payment of fees.
          </Typography>
          <Typography className={classes.contentText}>
            Owing to certain exceptional circumstances, if Gigaversity has granted you access to a Program pending payment, and Gigaversity does not receive payments within the stipulated time periods, Gigaversity may, at its own discretion, withdraw your access to the Program without giving any prior notice.
          </Typography>
          <Typography className={classes.contentText}>
            You agree that you will never divulge or share access to your User Account with any third party for any reason. You also agree that you will create, use and/or access only one User Account, and that you will not use any User Account other than your own.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'user-information',
      title: 'User Information',
      icon: <SecurityIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            In setting up your User Account, you may be prompted or required to enter additional information, including but not limited to your name and email address. Additional information may be required to confirm your identity. You understand and agree that all information provided by you is accurate, current and complete and that you will maintain and update your information to keep it accurate, current and complete. You acknowledge that if any information provided by you is untrue, inaccurate, not current or incomplete, we reserve the right to terminate your use of the Platform and your enrolment into a Program, to the extent applicable.
          </Typography>
          <Typography className={classes.contentText}>
            In addition to the registration process, as part of your use of the Platform or participation in the Programs, we may obtain certain information about you and your performance in the Programs. Some of this information may be Personally Identifiable Information. We may use, maintain, and store this information to provide certain services to you now and in the future, and may share such information with our Educational Partners or third parties in conjunction with such services or for the purpose of marketing.
          </Typography>
          <Typography className={classes.contentText}>
            For example, as further detailed in our Privacy Policy, we may share certain materials or information about you with third parties, including your grades/scores in our classes. Irrespective of the fact if also you have registered yourself under DND or DNC or NCPR service, you still authorize us to give you a call from us or any third party for the above mentioned purposes till 365 days of your registration with us.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'program-access',
      title: 'Program Access & Requirements',
      icon: <VerifiedUserIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            Access to the Programs is restricted to attendees or students who have specifically been granted access by Gigaversity.
          </Typography>
          <Typography className={classes.contentText}>
            By registering your User Account, you agree that:
          </Typography>
          <Box className={classes.listItem}>
            <Typography className={classes.contentText}>
              You are registered for the Program only once and will not set up multiple User Accounts
            </Typography>
          </Box>
          <Box className={classes.listItem}>
            <Typography className={classes.contentText}>
              You will abide by these Terms and any terms specific to the Program
            </Typography>
          </Box>
          <Typography className={classes.contentText}>
            Additional requirements apply to Students. As a Student, in addition to the points above, you agree that you are registering with the intent to complete the assignments, if any, that are relevant and applicable to the Platform or Programs into which you have enrolled.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'program-modifications',
      title: 'Program Modifications & Limitations',
      icon: <CancelIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            Gigaversity reserves the right to cancel or reschedule any Program or live lectures/webinars, or to alter, modify or rearrange the schedule of topics, as well as the point value or weight of assignments, tests, quizzes, exams, projects and other such evaluations of progress. You also understand that Gigaversity, at its sole discretion, may limit, suspend, or terminate your use of the Platform or Programs and/or all Gigaversity-provided services related to the Programs, such as access to Gigaversity coaches or support services, evaluation services, or certifications.
          </Typography>
          <Typography className={classes.contentText}>
            You also understand that Gigaversity may modify or discontinue all services related to its Programs at its sole discretion. You agree that Gigaversity shall not be liable to you or to any third party for any such modification, suspension or discontinuance. Nothing in these Terms shall be construed to obligate Gigaversity to maintain and support the Platform or Programs or any part or portion thereof or any associated services.
          </Typography>
          <Typography className={classes.contentText}>
            You agree that Gigaversity shall be under no liability whatsoever to you in the event of non-availability of the Platform or any portion thereof occasioned by Act of God, war, disease, revolution, epidemic, riot, civil commotion, strike, lockout, flood, fire, satellite failure, failure of any public utility, man-made disaster or any other cause whatsoever beyond the control of Gigaversity.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'termination',
      title: 'Termination & Equipment',
      icon: <WatchLaterIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            Subject to the applicable refund policy, if you no longer wish to use any program, you may terminate your participation by giving a prior notice to Gigaversity. Participants of Gigaversity online live lectures and webinars shall be provided access to such classes via email. You agree not to share such access with any third party. If you are unable to attend an online live lecture/webinar, please provide Gigaversity with prior intimation regarding this.
          </Typography>
          <Typography className={classes.contentText}>
            You shall be exclusively responsible for obtaining and maintaining any equipment or ancillary services needed to connect to, access, receive or use the Platform, including, without limitation, hardware devices, software, and other internet, wireless, broadband, phone and/or other mobile communication device connection services. You shall be exclusively responsible for ensuring that such equipment or ancillary services are compatible with the Platform, and you shall be responsible for all charges incurred in connection with the use of the Platform and Program in connection with all such equipment and ancillary services.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'accreditations',
      title: 'Accreditations & Partnerships',
      icon: <ContactSupportIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            Gigaversity is NOT a university, but an education service provider, offering Programs in consultation with Indian universities, educational institutions, governmental authorities, NGOs, corporates, etc. (each an "Educational Partner").
          </Typography>
          <Typography className={classes.contentText}>
            Admission to the degree/diploma programs of an Educational Partner is separate from being accepted into and/or taking one or more Programs. You agree and acknowledge that nothing in these Terms or otherwise with respect to the use of the Platform or any Program (a) enrolls or registers you in an Educational Partner, or any other school, division, institute or program of or associated with an Educational Partner, and (b) allows you to access or use the resources or receive any benefits or privileges of any Educational Partner, beyond the Programs.
          </Typography>
          <Typography className={classes.contentText}>
            Gigaversity may offer a credential or other acknowledgement for participants who have satisfactorily demonstrated mastery of the Program material. The decision to award any such credential acknowledgement to a given participant will be solely at the discretion of Gigaversity. Gigaversity may choose not to offer any credential or other acknowledgement for some Programs. Gigaversity may decide at its sole discretion whether to provide a record concerning a participant's performance in a Program. The format of any credential or other acknowledgement, and of any performance, provided by Gigaversity relating to Programs will be determined by Gigaversity at its sole discretion and may vary from Program to Program.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'certificates',
      title: 'Certificates & Academic Credit',
      icon: <PaymentIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            You will be awarded a certificate of successful completion of a Program ("Program Certificate") only upon fulfilling the criteria and requirements of Gigaversity and its Educational Partners.
          </Typography>
          <Typography className={classes.contentText}>
            If you are taking a Program for academic credit or certification as a student of, or otherwise through, an Educational Partner, any such credit or certification may only be awarded directly by the Educational Partner based on its own policies and procedures, and you may be required by that Educational Partner to be registered or enrolled with the Educational Partner in order to receive credit or certification; and, in any event, Gigaversity will not have any authority or responsibility with respect to any award of academic credit or certification provided by an Educational Partner for a Program.
          </Typography>
          <Typography className={classes.contentText}>
            You acknowledge and agree that any Program affiliated with an Educational Partner may be subject to the terms, policies and procedures of the applicable Educational Partner in addition to Gigaversity's Terms. Without limiting the foregoing, if you are a student registered or enrolled at, or are otherwise attending, an Educational Partner and are taking a Program for credit or certification through that Educational Partner, you acknowledge and agree that (a) the Educational Partner may have its own terms, policies or procedures regarding your eligibility to participate in the Program, your participation in the Program, the requirements or prerequisites for receiving credit or certification for the Program, and/or your educational or student records as they may relate to your participation and performance in the Program, and (b) your educational or student records are maintained by the Educational Partner, including for purposes of assigning credit or certification, and not Gigaversity.
          </Typography>
          
          <Typography className={classes.lastUpdated}>
            Last Updated: 30th March, 2025
          </Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box className={classes.termsPage}>
      <Navbar />
      
      {/* Header Section */}
      <Box className={classes.headerSection}>
        <Box className={classes.backgroundGradient} />
        <Container maxWidth="lg" className={classes.headerContent}>
          <Typography variant="h1" className={classes.pageTitle}>
            Terms & <span>Conditions</span>
          </Typography>
          <Typography variant="subtitle1" className={classes.pageSubtitle}>
            This is a legal and binding agreement between you and Gigaversity stating the terms that govern your use of our Platform and Programs.
          </Typography>
        </Container>
      </Box>
      
      {/* Main Content Section with Accordions */}
      <Container maxWidth="lg">
        <Box className={classes.contentSection}>
          <Box className={classes.accordionContainer}>
            {sections.map((section) => (
              <Accordion 
                key={section.id}
                expanded={expanded === section.id}
                onChange={handleChange(section.id)}
                className={classes.accordion}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                  className={classes.accordionSummary}
                >
                  <Typography className={classes.accordionTitle}>
                    {section.icon}
                    {section.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionContent}>
                  {section.content}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default TermsAndConditions;
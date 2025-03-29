// src/pages/privacypolicy/PrivacyPolicy.jsx
import React from "react";
import { Box, Typography, Container, Divider, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SecurityIcon from '@mui/icons-material/Security';
import PolicyIcon from '@mui/icons-material/Policy';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import InfoIcon from '@mui/icons-material/Info';
import GavelIcon from '@mui/icons-material/Gavel';
import ViewListIcon from '@mui/icons-material/ViewList';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import ShieldIcon from '@mui/icons-material/Shield';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import LinkIcon from '@mui/icons-material/Link';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

const useStyles = makeStyles({
  privacyPage: {
    backgroundColor: "#f9fafc",
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
    padding: "60px 0",
    backgroundColor: "white",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
    margin: "0 auto",
    borderRadius: "20px",
    transform: "translateY(-30px)",
    position: "relative",
    zIndex: "2",
  },
  sectionTitle: {
    fontSize: "1.8rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "20px !important",
    marginTop: "40px !important",
    display: "flex",
    alignItems: "center",
    "& svg": {
      marginRight: "15px",
      color: "#2A2B6A",
    },
  },
  sectionTitleFirst: {
    marginTop: "0 !important",
  },
  sectionContent: {
    fontSize: "1rem !important",
    color: "#4A4A4A !important",
    lineHeight: "1.7 !important",
    marginBottom: "20px !important",
  },
  divider: {
    margin: "30px 0 !important",
  },
  listItem: {
    marginBottom: "10px !important",
    paddingLeft: "0 !important",
  },
  listItemIcon: {
    minWidth: "30px !important",
    "& svg": {
      fontSize: "10px !important",
      color: "#2A2B6A",
    },
  },
  listItemText: {
    color: "#4A4A4A !important",
    "& span": {
      fontSize: "1rem !important",
      lineHeight: "1.7 !important",
    },
  },
  categoryContainer: {
    marginBottom: "30px",
  },
  categoryTitle: {
    fontSize: "1.2rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "10px !important",
  },
  lastUpdated: {
    fontStyle: "italic !important",
    color: "#6A6B6C !important",
    marginTop: "40px !important",
    textAlign: "center !important",
  },
  highlight: {
    color: "#FFC614 !important",
    fontWeight: "bold !important",
  },
});

const PrivacyPolicy = () => {
  const classes = useStyles();

  const dataCategories = [
    {
      title: "Personal Identification Data",
      items: ["First Name, Last name", "Job title & Company", "Signature", "Photographs"],
    },
    {
      title: "Identification Data",
      items: ["Aadhar number and PAN"],
    },
    {
      title: "Financial Data",
      items: ["Bank Account information", "Salary Information", "Payment gateway account details", "E-wallet account details"],
    },
    {
      title: "Personal Characteristics",
      items: ["Age", "Gender", "Date of Birth", "Marital Status", "Nationality"],
    },
    {
      title: "Contact Data",
      items: ["Postal address", "Email address", "Phone number"],
    },
    {
      title: "Education and Recruitment Data",
      items: ["Educational qualification(s)"],
    },
    {
      title: "Electronic Identification Data",
      items: [
        "Login credentials (If you are a registered user)",
        "Visitors IP Data",
        "Date and time of website visit",
        "Pages visited and navigation on the website",
        "Browser being used",
        "Country of accessing website",
        "Language of the browser being used",
        "Words searched for",
        "Pixel tags",
      ],
    },
    {
      title: "User Generated Data",
      items: [
        "Projects and Assignments submitted",
        "Peer feedback and grading",
        "Program performance data",
        "Response to quizzes, standalone quizzes, exams, and surveys",
        "Webcam Recordings (during assessments related to online courses)",
        "Posts made to public forums through our platform",
        "Any other information necessary to ensure conformity with test/assessment rules, area of interests",
      ],
    },
  ];

  const cookieTypes = [
    {
      name: "Persistent Cookies",
      description: "We use persistent cookies to improve your experience of using the site. This includes recording your acceptance of our Cookie Policy to remove the cookie message which first appears when you use the site."
    },
    {
      name: "Session Cookies",
      description: "These are temporary and deleted from your machine when your web browser closes. We use session cookies to help us track internet usage as described above."
    },
    {
      name: "Analytical/Performance Cookies",
      description: "These allow us to recognize and count the number of visitors and see how many visitors move around our website while they are using it. This helps us improve the way our website works, for example, by ensuring the users find what they are looking for."
    },
    {
      name: "Functionality Cookies",
      description: "These are recognized when you return to the website. This enables us to create greater content for you and remember your likes, dislikes, and other preferences."
    },
    {
      name: "Targeting Cookies",
      description: "These record the visit to our website, the pages navigated to, and the links clicked upon. It helps to formulate information relevant to the user's area of interest."
    }
  ];

  const dataSharingRecipients = [
    {
      title: "Educational Partners",
      description: "University or company offering the course, External Graders, Mentors"
    },
    {
      title: "Employers, Sponsors, and Scholarship Providers",
      description: "If you are taking a Program that is sponsored or paid for by your employer or a sponsor, or if you have availed a scholarship from a third-party scholarship provider"
    },
    {
      title: "Service Providers",
      description: "Operations and maintenance contractors and other third parties who perform services on our behalf"
    },
    {
      title: "Third Parties",
      description: "Service providers such as Facebook or WhatsApp, to provide you with services that you have requested"
    },
    {
      title: "Recruitment Service Providers",
      description: "Recruitment agencies and potential employers"
    }
  ];

  return (
    <Box className={classes.privacyPage}>
      <Navbar />
      
      {/* Header Section */}
      <Box className={classes.headerSection}>
        <Box className={classes.backgroundGradient} />
        <Container maxWidth="lg" className={classes.headerContent}>
          <Typography variant="h1" className={classes.pageTitle}>
            Privacy <span>Policy</span>
          </Typography>
          <Typography variant="subtitle1" className={classes.pageSubtitle}>
            Gigaversity is committed to security and management of personal data, to function effectively and successfully for the benefit of our stakeholders, customers and for the community.
          </Typography>
        </Container>
      </Box>
      
      {/* Main Content Section */}
      <Container maxWidth="lg">
        <Box className={classes.contentSection}>
          <Container maxWidth="md">
            {/* Introduction */}
            <Typography variant="h2" className={`${classes.sectionTitle} ${classes.sectionTitleFirst}`}>
              <InfoIcon fontSize="large" /> Introduction
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              Gigaversity hereinafter ("Gigaversity," "us," "we," or "our" or "the Company") is committed to security and management of personal data, to function effectively and successfully for the benefit of our stakeholders, customers and for the community. In doing so, it is essential that people's privacy is protected through the lawful and appropriate means for handling the personal data. Therefore, we have implemented this privacy policy (hereinafter referred to as "policy").
            </Typography>
            
            <Divider className={classes.divider} />
            
            {/* Aim */}
            <Typography variant="h2" className={classes.sectionTitle}>
              <PrivacyTipIcon fontSize="large" /> Aim
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              This policy aims to protect personal data of the various stakeholders connected to our organisation. This policy is aimed at providing individuals notice of the basic principles by which the company processes the personal data of individuals ("Personal Data") who visit, use, deal with and/or transact through the website and includes a guest user and browser (hereinafter 'you', 'user').
            </Typography>
            
            <Divider className={classes.divider} />
            
            {/* Scope & Purpose */}
            <Typography variant="h2" className={classes.sectionTitle}>
              <PolicyIcon fontSize="large" /> Scope & Purpose
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              The purpose of this policy is to describe how Gigaversity collects, uses, and shares information about you through our online interfaces (e.g., websites and mobile applications) owned and controlled by us, including but not limited to https://www.gigaversity.in (hereinafter the "website"). This policy is also designed to provide information on how Gigaversity ensures data security, conducts data transfers and processes requests from data subjects.
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              This policy control applies to all systems, people and processes that constitute the organisation's information systems, including board members, directors, employees and other third parties who have access to Personal Data available within Gigaversity.
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              The company is also committed to ensure that its employees conduct themselves in line with this, and other related, policies. Where third parties process data on behalf of Gigaversity, the Company endeavors to obtain assurances from such third parties that your Personal Data will be safeguarded consistently.
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              Gigaversity offers curated and specially designed higher education and industry-relevant certification programs online ("hereinafter individually or collectively referred to as Program"). This Privacy Policy applies to all our services unless specified otherwise.
            </Typography>
            
            <Divider className={classes.divider} />
            
            {/* Types of Data Collected */}
            <Typography variant="h2" className={classes.sectionTitle}>
              <ViewListIcon fontSize="large" /> Types of Data Collected
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              The Personal Data that we collect about you depends on the context of your interactions with us, the products, services and features that you use, your location, and the applicable laws.
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              Personal Data is stored in personnel files or within the electronic records (on servers in India or other countries) of Gigaversity. The following types of Personal Data may be held by the Company, as appropriate, on relevant individuals:
            </Typography>
            
            {dataCategories.map((category, index) => (
              <Box key={index} className={classes.categoryContainer}>
                <Typography variant="h5" className={classes.categoryTitle}>
                  {category.title}
                </Typography>
                <List>
                  {category.items.map((item, itemIndex) => (
                    <ListItem key={itemIndex} className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText className={classes.listItemText} primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
            
            <Divider className={classes.divider} />
            
            {/* Special Categories in Data Collection */}
            <Typography variant="h2" className={classes.sectionTitle}>
              <DataObjectIcon fontSize="large" /> Special Categories in Data Collection
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              Special Category of Personal Data includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union memberships, information about your health and genetic and biometric data. <strong>We do not collect or process any special or sensitive Personal Data.</strong>
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              Should we specifically require "special" or "sensitive" Personal Data in connection with one or more of the uses described below, we will request your explicit consent to use the data in accordance with this policy and/or in the ways described at the point where you were asked to disclose the data.
            </Typography>
            
            <Divider className={classes.divider} />
            
            {/* Cookies */}
            <Typography variant="h2" className={classes.sectionTitle}>
              <StorageIcon fontSize="large" /> Cookies
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              Cookies are text files placed on your computer to collect standard Internet log information and visitor behaviour information. When you visit our websites, we may collect information from you automatically through cookies or similar technology.
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              Furthermore, we may allow third-party advertising companies (such as Facebook, Google, Twitter, Quora, and Bing) to place cookies on our website. These cookies enable such companies to track your activity across various sites where they display ads and record your activities so they can show ads that they consider relevant to you as you browse the Internet.
            </Typography>
            
            <Typography variant="h5" className={classes.categoryTitle}>
              Types of cookies we use:
            </Typography>
            
            {cookieTypes.map((cookie, index) => (
              <Box key={index} className={classes.categoryContainer}>
                <Typography variant="body1" className={classes.sectionContent}>
                  <span className={classes.highlight}>{cookie.name}:</span> {cookie.description}
                </Typography>
              </Box>
            ))}
            
            <Typography variant="body1" className={classes.sectionContent}>
              Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser and from version to version. Disabling some cookies from the website may have a negative impact and may result in some features being unavailable.
            </Typography>
            
            <Divider className={classes.divider} />
            
            {/* Legal Compliance to process data */}
            <Typography variant="h2" className={classes.sectionTitle}>
              <GavelIcon fontSize="large" /> Legal Compliance to Process Data
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              Certain jurisdictions require that we have a lawful basis to justify our processing of your personal data.
              Where applicable, the lawful basis that Gigaversity relies upon to justify a particular processing activity may differ from the lawful basis used to justify a different processing activity.
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              Gigaversity relies on the following lawful basis to process personal data, as permitted under applicable law:
            </Typography>
            
            <List>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary="Processing necessary for the negotiation, execution, or performance of contracts." />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary="Processing to comply with legal and regulatory obligations." />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary="Processing in furtherance of our legitimate interests, including our interests to conduct legitimate business activities." />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary="Processing necessary to protect the vital interest of a user or any other natural person." />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary="Processing necessary for public interest." />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary="Processing based on your consent." />
              </ListItem>
            </List>
            
            <Divider className={classes.divider} />
            
            {/* Disclosure of Data */}
            <Typography variant="h2" className={classes.sectionTitle}>
              <CloudSyncIcon fontSize="large" /> Disclosure of Data
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              We may share your personal data with the following recipients:
            </Typography>
            
            {dataSharingRecipients.map((recipient, index) => (
              <Box key={index} className={classes.categoryContainer}>
                <Typography variant="h5" className={classes.categoryTitle}>
                  {recipient.title}
                </Typography>
                <Typography variant="body1" className={classes.sectionContent}>
                  {recipient.description}
                </Typography>
              </Box>
            ))}
            
            <Divider className={classes.divider} />
            
            {/* Rights On Data */}
            <Typography variant="h2" className={classes.sectionTitle}>
              <VpnLockIcon fontSize="large" /> Rights On Data
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              Some jurisdictions have provided individuals with certain rights in relation to the processing of their Personal Data. These rights are not available to everyone, and they do not necessarily apply in all contexts. Depending on applicable law, you may have the right to:
            </Typography>
            
            <List>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary="Request access to your Personal Data." />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary="Request correction of your Personal Data (should your Personal Data be inaccurate, incomplete, or obsolete)." />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary="Request deletion of your Personal Data." />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary="Withdraw your consent to processing (where we processed Personal Data on the basis of your consent)." />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary="Object to the processing of your Personal Data." />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary="Request restrictions on the processing of your Personal Data." />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary="Request the transfer of your Personal Data to you or a third party." />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary="Opt-out of certain transfers to third parties." />
              </ListItem>
            </List>
            
            <Typography variant="body1" className={classes.sectionContent}>
              To exercise a right that you believe you may be entitled to under applicable law, please write to us at <strong>info@gigaversity.in</strong>
            </Typography>
            
            <Divider className={classes.divider} />
            
            {/* Data Security */}
            <Typography variant="h2" className={classes.sectionTitle}>
              <SecurityIcon fontSize="large" /> Data Security
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              Gigaversity will ensure that appropriate technical and organisational measures are in place, supported by privacy impact and risk assessments, to ensure a high level of security for Personal Data, and a secure environment for information held both manually and electronically.
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              Gigaversity implements appropriate security measures designed to prevent unlawful or unauthorised processing of personal information and accidental loss of or damage to personal information. While we strive to secure your Personal Data, please note that 100% security of Personal Data cannot be guaranteed and that Gigaversity shall not be liable for any misuse or loss of Personal Data carried out by third-party cloud service providers.
            </Typography>
            
            <Divider className={classes.divider} />
            
            {/* Data Retention */}
            <Typography variant="h2" className={classes.sectionTitle}>
              <ShieldIcon fontSize="large" /> Data Retention
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              We retain your Personal Data no longer than necessary for the purposes for which it was collected. The length of time to retain Personal Data depends on the purposes for which we collect and use it and/or as may be required to comply with applicable laws, to establish, exercise, or defend our legal rights.
            </Typography>
            
            <Divider className={classes.divider} />
            
            {/* Data Breach Notification */}
            <Typography variant="h2" className={classes.sectionTitle}>
              <SyncProblemIcon fontSize="large" /> Data Breach Notification
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              Where a data breach is likely to result in a risk to the rights and freedoms of individuals, it will be reported to the relevant supervisory authority within 72 hours of the Company becoming aware of it and may be reported in more than one installment. Individuals will be informed directly in the event that the breach is likely to result in a high risk to the rights and freedoms of that individual. If the breach is sufficient to warrant notification to the public, the Company will do so without undue delay.
            </Typography>
            
            <Divider className={classes.divider} />
            
            {/* Third-Party Links */}
            <Typography variant="h2" className={classes.sectionTitle}>
              <LinkIcon fontSize="large" /> Third-Party Links In Our Website
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              For your convenience, we may provide links to sites operated by organizations other than Gigaversity ("Third-Party Sites") that we believe may be of interest to you. We do not disclose your Personal Data to these Third-Party Sites unless we have a lawful basis on which to do so. We do not endorse and are not responsible for the privacy practices of these Third-Party Sites. If you choose to click on a link to one of these Third-Party Sites, you should review the privacy policy posted on the other websites to understand how that Third-Party website collects and uses your Personal Data.
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              We take no responsibility for the content or practices of any third-party services in the Third-Party Sites. We encourage you to carefully review the terms of service/use of any third-party services or Third-Party Sites you access.
            </Typography>
            
            <Divider className={classes.divider} />
            
            {/* Policy Updates */}
            <Typography variant="h2" className={classes.sectionTitle}>
              <SettingsApplicationsIcon fontSize="large" /> Policy Updates
            </Typography>
            <Typography variant="body1" className={classes.sectionContent}>
              We may update our Privacy Policy from time to time. We will take reasonable steps to inform all Gigaversity entities, Customers, Business Partners, and other data subjects affected by the revisions by posting the new Privacy Policy on this page and/or via email.
            </Typography>
            
            <Typography variant="body2" className={classes.lastUpdated}>
              Last Updated: 24th March, 2025
            </Typography>
          </Container>
        </Box>
      </Container>
      
      <Footer />
    </Box>
  );
};

export default PrivacyPolicy;
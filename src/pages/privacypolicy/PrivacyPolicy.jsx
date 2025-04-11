// src/pages/privacypolicy/PrivacyPolicy.jsx
import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon 
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "../../components/common/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import PolicyIcon from '@mui/icons-material/Policy';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ViewListIcon from '@mui/icons-material/ViewList';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import ShieldIcon from '@mui/icons-material/Shield';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import LinkIcon from '@mui/icons-material/Link';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';

const useStyles = makeStyles({
  privacyPage: {
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
    color:"#ffffff !important",
    "& span": {
      color: "#FFC614 !important",
    },
  },
  pageSubtitle: {
    fontSize: "1.2rem !important",
    maxWidth: "800px",
    fontWeight: "400 !important",
    color:"#ffffff !important",
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
  categoryContainer: {
    marginBottom: "24px",
  },
  categoryTitle: {
    fontSize: "1.1rem !important",
    fontWeight: "600 !important",
    color: "#2A2B6A !important",
    marginBottom: "12px !important",
    marginTop: "24px !important",
  },
  listItem: {
    marginBottom: "8px !important",
    paddingLeft: "0 !important",
  },
  listItemIcon: {
    minWidth: "30px !important",
    "& svg": {
      fontSize: "8px !important",
      color: "#2A2B6A",
    },
  },
  listItemText: {
    color: "#4A4A4A !important",
    "& span": {
      fontSize: "0.95rem !important",
      lineHeight: "1.6 !important",
    },
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
  highlight: {
    color: "#2A2B6A !important",
    fontWeight: "600 !important",
  },
  expandIcon: {
    color: "#2A2B6A !important",
  },
});

const PrivacyPolicy = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('introduction');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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

  const dataRights = [
    "Request access to your Personal Data.",
    "Request correction of your Personal Data (should your Personal Data be inaccurate, incomplete, or obsolete).",
    "Request deletion of your Personal Data.",
    "Withdraw your consent to processing (where we processed Personal Data on the basis of your consent).",
    "Object to the processing of your Personal Data.",
    "Request restrictions on the processing of your Personal Data.",
    "Request the transfer of your Personal Data to you or a third party.",
    "Opt-out of certain transfers to third parties."
  ];

  const legalBasis = [
    "Processing necessary for the negotiation, execution, or performance of contracts.",
    "Processing to comply with legal and regulatory obligations.",
    "Processing in furtherance of our legitimate interests, including our interests to conduct legitimate business activities.",
    "Processing necessary to protect the vital interest of a user or any other natural person.",
    "Processing necessary for public interest.",
    "Processing based on your consent."
  ];

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <InfoIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            Gigaversity hereinafter ("Gigaversity," "us," "we," or "our" or "the Company") is committed to security and management of personal data, to function effectively and successfully for the benefit of our stakeholders, customers and for the community. In doing so, it is essential that people's privacy is protected through the lawful and appropriate means for handling the personal data. Therefore, we have implemented this privacy policy (hereinafter referred to as "policy").
          </Typography>
        </Box>
      ),
    },
    {
      id: 'aim',
      title: 'Aim',
      icon: <PrivacyTipIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            This policy aims to protect personal data of the various stakeholders connected to our organisation. This policy is aimed at providing individuals notice of the basic principles by which the company processes the personal data of individuals ("Personal Data") who visit, use, deal with and/or transact through the website and includes a guest user and browser (hereinafter 'you', 'user').
          </Typography>
        </Box>
      ),
    },
    {
      id: 'scope',
      title: 'Scope & Purpose',
      icon: <PolicyIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            The purpose of this policy is to describe how Gigaversity collects, uses, and shares information about you through our online interfaces (e.g., websites and mobile applications) owned and controlled by us, including but not limited to https://www.gigaversity.in (hereinafter the "website"). This policy is also designed to provide information on how Gigaversity ensures data security, conducts data transfers and processes requests from data subjects.
          </Typography>
          <Typography className={classes.contentText}>
            This policy control applies to all systems, people and processes that constitute the organisation's information systems, including board members, directors, employees and other third parties who have access to Personal Data available within Gigaversity.
          </Typography>
          <Typography className={classes.contentText}>
            The company is also committed to ensure that its employees conduct themselves in line with this, and other related, policies. Where third parties process data on behalf of Gigaversity, the Company endeavors to obtain assurances from such third parties that your Personal Data will be safeguarded consistently.
          </Typography>
          <Typography className={classes.contentText}>
            Gigaversity offers curated and specially designed higher education and industry-relevant certification programs online ("hereinafter individually or collectively referred to as Program"). This Privacy Policy applies to all our services unless specified otherwise.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'data-types',
      title: 'Types of Data Collected',
      icon: <ViewListIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            The Personal Data that we collect about you depends on the context of your interactions with us, the products, services and features that you use, your location, and the applicable laws.
          </Typography>
          <Typography className={classes.contentText}>
            Personal Data is stored in personnel files or within the electronic records (on servers in India or other countries) of Gigaversity. The following types of Personal Data may be held by the Company, as appropriate, on relevant individuals:
          </Typography>
          
          {dataCategories.map((category, index) => (
            <Box key={index} className={classes.categoryContainer}>
              <Typography variant="h6" className={classes.categoryTitle}>
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
        </Box>
      ),
    },
    {
      id: 'special-categories',
      title: 'Special Categories in Data Collection',
      icon: <DataObjectIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            Special Category of Personal Data includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union memberships, information about your health and genetic and biometric data. <strong>We do not collect or process any special or sensitive Personal Data.</strong>
          </Typography>
          <Typography className={classes.contentText}>
            Should we specifically require "special" or "sensitive" Personal Data in connection with one or more of the uses described below, we will request your explicit consent to use the data in accordance with this policy and/or in the ways described at the point where you were asked to disclose the data.
          </Typography>
          <Typography className={classes.contentText}>
            Other legal basis for our processing of special category data may include, as permitted by applicable law, for scientific research, for employment, social security or social protection law, for reasons of substantial public interest, or as necessary for the establishment, exercise or defence of legal claims. If you voluntarily share with us or post/upload any "special" or "sensitive" Personal Data to this website for any other reason, you consent that we may use such data in accordance with applicable law and this policy.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'cookies',
      title: 'Cookies',
      icon: <StorageIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            Cookies are text files placed on your computer to collect standard Internet log information and visitor behaviour information. When you visit our websites, we may collect information from you automatically through cookies or similar technology.
          </Typography>
          <Typography className={classes.contentText}>
            Furthermore, we may allow third-party advertising companies (such as Facebook, Google, Twitter, Quora, and Bing) to place cookies on our website. These cookies enable such companies to track your activity across various sites where they display ads and record your activities so they can show ads that they consider relevant to you as you browse the Internet.
          </Typography>
          
          <Typography variant="h6" className={classes.categoryTitle}>
            Types of cookies we use:
          </Typography>
          
          {cookieTypes.map((cookie, index) => (
            <Box key={index} className={classes.categoryContainer}>
              <Typography className={classes.contentText}>
                <span className={classes.highlight}>{cookie.name}:</span> {cookie.description}
              </Typography>
            </Box>
          ))}
          
          <Typography className={classes.contentText}>
            Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser and from version to version. Disabling some cookies from the website may have a negative impact and may result in some features being unavailable.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'legal-compliance',
      title: 'Legal Compliance to Process Data',
      icon: <GavelIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            Certain jurisdictions require that we have a lawful basis to justify our processing of your personal data.
            Where applicable, the lawful basis that Gigaversity relies upon to justify a particular processing activity may differ from the lawful basis used to justify a different processing activity.
          </Typography>
          <Typography className={classes.contentText}>
            Gigaversity relies on the following lawful basis to process personal data, as permitted under applicable law:
          </Typography>
          
          <List>
            {legalBasis.map((basis, index) => (
              <ListItem key={index} className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary={basis} />
              </ListItem>
            ))}
          </List>
        </Box>
      ),
    },
    {
      id: 'data-disclosure',
      title: 'Disclosure of Data',
      icon: <CloudSyncIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            We may share your personal data with the following recipients:
          </Typography>
          
          {dataSharingRecipients.map((recipient, index) => (
            <Box key={index} className={classes.categoryContainer}>
              <Typography variant="h6" className={classes.categoryTitle}>
                {recipient.title}
              </Typography>
              <Typography className={classes.contentText}>
                {recipient.description}
              </Typography>
            </Box>
          ))}
        </Box>
      ),
    },
    {
      id: 'data-rights',
      title: 'Rights On Data',
      icon: <VpnLockIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            Some jurisdictions have provided individuals with certain rights in relation to the processing of their Personal Data. These rights are not available to everyone, and they do not necessarily apply in all contexts. Depending on applicable law, you may have the right to:
          </Typography>
          
          <List>
            {dataRights.map((right, index) => (
              <ListItem key={index} className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <ListItemText className={classes.listItemText} primary={right} />
              </ListItem>
            ))}
          </List>
          
          <Typography className={classes.contentText}>
            To exercise a right that you believe you may be entitled to under applicable law, please write to us at <strong>info@gigaversity.in</strong>
          </Typography>
          <Typography className={classes.contentText}>
            We may need to verify your identity before we fulfill your request. Please note that certain conditions in relation to processing your rights will vary as many countries have varying data privacy rights. Our response and further processing of requests to exercise these rights will depend upon the law applicable in relation to the rights exercised by you.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: <SecurityIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            Gigaversity will ensure that appropriate technical and organisational measures are in place, supported by privacy impact and risk assessments, to ensure a high level of security for Personal Data, and a secure environment for information held both manually and electronically.
          </Typography>
          <Typography className={classes.contentText}>
            Gigaversity implements appropriate security measures designed to prevent unlawful or unauthorised processing of personal information and accidental loss of or damage to personal information. Gigaversity maintains written security management policies and procedures designed to prevent, detect, contain, and correct violations of measures taken to protect the confidentiality, integrity, availability, or security of your Personal Information.
          </Typography>
          <Typography className={classes.contentText}>
            While we strive to secure your Personal Data, please note that 100% security of Personal Data cannot be guaranteed and that Gigaversity shall not be liable for any misuse or loss of Personal Data carried out by third-party cloud service providers.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: <ShieldIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            We retain your Personal Data no longer than necessary for the purposes for which it was collected. The length of time to retain Personal Data depends on the purposes for which we collect and use it and/or as may be required to comply with applicable laws, to establish, exercise, or defend our legal rights.
          </Typography>
          <Typography className={classes.contentText}>
            The users can exercise their rights enumerated herein. Also, if in case it is required to extend the period of retention of such data, we shall obtain your consent for the same. Further, we may also dispose of the data prior to completion of the period of retention if the purpose for which it was collected is exhausted.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'data-breach',
      title: 'Data Breach Notification',
      icon: <SyncProblemIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            Where a data breach is likely to result in a risk to the rights and freedoms of individuals, it will be reported to the relevant supervisory authority within 72 hours of the Company becoming aware of it and may be reported in more than one installment. Individuals will be informed directly in the event that the breach is likely to result in a high risk to the rights and freedoms of that individual. If the breach is sufficient to warrant notification to the public, the Company will do so without undue delay.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'third-party-links',
      title: 'Third-Party Links In Our Website',
      icon: <LinkIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            For your convenience, we may provide links to sites operated by organizations other than Gigaversity ("Third-Party Sites") that we believe may be of interest to you. We do not disclose your Personal Data to these Third-Party Sites unless we have a lawful basis on which to do so. We do not endorse and are not responsible for the privacy practices of these Third-Party Sites. If you choose to click on a link to one of these Third-Party Sites, you should review the privacy policy posted on the other websites to understand how that Third-Party website collects and uses your Personal Data.
          </Typography>
          <Typography className={classes.contentText}>
            We take no responsibility for the content or practices of any third-party services in the Third-Party Sites. We encourage you to carefully review the terms of service/use of any third-party services or Third-Party Sites you access.
          </Typography>
        </Box>
      ),
    },
    {
      id: 'policy-updates',
      title: 'Policy Updates',
      icon: <SettingsApplicationsIcon className={classes.accordionIcon} />,
      content: (
        <Box>
          <Typography className={classes.contentText}>
            We may update our Privacy Policy from time to time. We will take reasonable steps to inform all Gigaversity entities, Customers, Business Partners, and other data subjects affected by the revisions by posting the new Privacy Policy on this page and/or via email.
          </Typography>
          
          <Typography className={classes.lastUpdated}>
            Last Updated: 24th March, 2025
          </Typography>
        </Box>
      ),
    },
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

export default PrivacyPolicy;
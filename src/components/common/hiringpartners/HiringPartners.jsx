
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Import existing SVG logos (these would be your actual imports)
import { ReactComponent as AccentureLogo } from '../../../assets/hiringpartners/Accenture.svg';
import { ReactComponent as AmazonLogo } from '../../../assets/hiringpartners/Amazon.svg';
import { ReactComponent as BharatPeLogo } from '../../../assets/hiringpartners/BharatPe.svg';
import { ReactComponent as CapgeminiLogo } from '../../../assets/hiringpartners/capgemini.svg';
import { ReactComponent as CredLogo } from '../../../assets/hiringpartners/Cred.svg';
import { ReactComponent as DellLogo } from '../../../assets/hiringpartners/Dell.svg';
import { ReactComponent as DeloitteLogo } from '../../../assets/hiringpartners/deloitte.svg';
import { ReactComponent as FlipkartLogo } from '../../../assets/hiringpartners/Flipkart.svg';
import { ReactComponent as InfosysLogo } from '../../../assets/hiringpartners/Infosys.svg';
import { ReactComponent as MuSigmaLogo } from '../../../assets/hiringpartners/Mu-Sigma.svg';
import { ReactComponent as PharmEasyLogo } from '../../../assets/hiringpartners/pharmeasy.svg';
import { ReactComponent as PhonePeLogo } from '../../../assets/hiringpartners/PhonePe.svg';
import { ReactComponent as TcsLogo } from '../../../assets/hiringpartners/tcs.svg';
import { ReactComponent as TechMahindraLogo } from '../../../assets/hiringpartners/Tech_Mahindra.svg';
import { ReactComponent as WiproLogo } from '../../../assets/hiringpartners/Wipro.svg';
import { ReactComponent as ZohoLogo } from '../../../assets/hiringpartners/zoho.svg';
import { ReactComponent as AdidasLogo } from '../../../assets/hiringpartners/Adidas-logo.svg';
import { ReactComponent as CaterpillarLogo } from '../../../assets/hiringpartners/caterpillar-preview.svg';
import { ReactComponent as InfrrtLogo } from '../../../assets/hiringpartners/Infrrt.svg';
import { ReactComponent as MedplusLogo } from '../../../assets/hiringpartners/Medplus_logo.svg';
import { ReactComponent as GoldmanSachsLogo } from '../../../assets/hiringpartners/goldman-sachs.svg';
import { ReactComponent as PaytmLogo } from '../../../assets/hiringpartners/paytm.svg';
import { ReactComponent as HappyFoxLogo } from '../../../assets/hiringpartners/happyfox.svg';
import { ReactComponent as SynopsysLogo } from '../../../assets/hiringpartners/Synopsys_Logo.svg';
import applexusLogo from '../../../assets/hiringpartners/applexus.png';
import skillventory from '../../../assets/hiringpartners/skillventory.png';
import nielseniq from '../../../assets/hiringpartners/nielseniq.webp';
import biznext from '../../../assets/hiringpartners/biznext.png';
import meesho from '../../../assets/hiringpartners/meesho.png';

const useStyles = makeStyles({
  partnersSectionWrapper: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: '60px 0',
    margin: '0',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
      padding: '40px 0',
    },
  },
  titleContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '50px',
    position: 'relative',
    zIndex: 2,
  },
  sectionTitle: {
    color: "#2A2B6A !important",
    fontWeight: 'bold !important',
    textAlign: 'center !important',
    fontSize: "2.5rem !important",
    position: 'relative',
    
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
    },
  },
  categoryContainer: {
    maxWidth: '1200px',
    margin: '0 auto 40px',
    padding: '0 20px',
    '@media (max-width: 768px)': {
      marginBottom: '30px',
    },
  },
  categoryFilters: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '40px',
    '@media (max-width: 768px)': {
      gap: '10px',
      marginBottom: '30px',
    },
  },
  filterButton: {
    backgroundColor: 'white !important',
    color: '#555 !important',
    borderRadius: '30px !important',
    padding: '8px 20px !important',
    fontSize: '14px !important',
    fontWeight: '500 !important',
    border: '1px solid #e0e0e0 !important',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05) !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: '#f5f5f5 !important',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1) !important',
    },
    '@media (max-width: 768px)': {
      padding: '6px 15px !important',
      fontSize: '13px !important',
    },
  },
  activeFilterButton: {
    backgroundColor: '#2A2B6A !important',
    color: 'white !important',
    boxShadow: '0 4px 12px rgba(42,43,106,0.2) !important',
    '&:hover': {
      backgroundColor: '#232255 !important',
    },
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    '@media (max-width: 768px)': {
      gap: '20px',
    },
  },
  categoryCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
      transform: 'translateY(-5px)',
    },
  },
  categoryHeader: {
    backgroundColor: '#f8f9ff',
    padding: '20px 30px',
    borderBottom: '1px solid #eaeaea',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '@media (max-width: 768px)': {
      padding: '15px 20px',
    },
  },
  categoryTitle: {
    color: '#2A2B6A !important',
    fontSize: '1.4rem !important',
    fontWeight: '600 !important',
    '@media (max-width: 768px)': {
      fontSize: '1.2rem !important',
    },
  },
  logoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    padding: '25px 30px',
    gap: '25px',
    '@media (max-width: 960px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
      padding: '20px',
      gap: '20px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      padding: '15px',
      gap: '15px',
    },
  },
  logoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px 15px',
    border: '1px solid #f0f0f0',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    height: '100px',
    width: '100%',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
    },
    '@media (max-width: 768px)': {
      padding: '15px 10px',
      height: '90px',
    },
  },
  logoSvg: {
    width: '100px',
    height: '50px',
    opacity: 0.9,
    transition: 'all 0.3s ease',
    objectFit: 'contain',
    '@media (max-width: 768px)': {
      width: '80px',
      height: '40px',
    },
  },
  emptyState: {
    textAlign: 'center',
    padding: '50px 20px',
  },
  emptyStateText: {
    color: '#777 !important',
    fontSize: '1.1rem !important',
  },
  moreCompaniesCard: {
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'center',
    backgroundColor: '#f8f9ff',
    borderRadius: '12px',
    padding: '20px 15px',
    border: '2px dashed #2A2B6A',
    cursor: 'pointer',
    height: '100px',
    width: '100%',
    transition: 'all 0.3s ease',
    backgroundColor: '#2A2B6A',
    '&:hover': {
      backgroundColor: '#eef0ff',
      transform: 'translateY(-5px)',
    },
    '@media (max-width: 768px)': {
      height: '90px',
    },
  },
  moreCompaniesText: {
    color: '#ffffff',
    fontSize: '1rem',
    fontWeight: 600,
    marginTop: '8px',
  },
  plusIcon: {
    fontSize: '40px',
    color: '#ffffff',
    marginBottom: '4px',
  },
});

const HiringPartners = () => {
  const classes = useStyles();
  const [activeFilter, setActiveFilter] = useState('Software & IT');

  // Define categories and company data
  const categories = [
    { id: 'software', name: 'Software & IT', color: '#4285F4' },
    { id: 'enterprise', name: 'Enterprise Tech', color: '#9334EA' },  // New category
    { id: 'finance', name: 'Finance & Fintech', color: '#34A853' },
    { id: 'consulting', name: 'Consulting', color: '#FBBC05' },
    { id: 'retail', name: 'Retail & E-commerce', color: '#EA4335' },
  ];
  
  const filters = categories.map(cat => cat.name);

  // Companies data with category assignment
  const companies = [
    // Software & IT Companies
    { name: 'Amazon', Logo: AmazonLogo, category: 'Retail & E-commerce' },
    { name: 'CRED', Logo: CredLogo, category: 'Software & IT' },
    { name: 'Zoho', Logo: ZohoLogo, category: 'Software & IT' },
    { name: 'HappyFox', Logo: HappyFoxLogo, category: 'Software & IT' },
    { name: 'Infrrt', Logo: InfrrtLogo, category: 'Software & IT' },
    { name: 'Applexus', Logo: ({ className }) => (
        <img 
          src={applexusLogo} 
          className={className} 
          alt="Applexus" 
        />
      ), category: 'Software & IT' },
    
    // Enterprise Tech Companies
    { name: 'TCS', Logo: TcsLogo, category: 'Enterprise Tech' },
    { name: 'Wipro', Logo: WiproLogo, category: 'Enterprise Tech' },
    { name: 'Tech Mahindra', Logo: TechMahindraLogo, category: 'Enterprise Tech' },
    { name: 'Dell', Logo: DellLogo, category: 'Software & IT' },
    { name: 'Synopsys', Logo: SynopsysLogo, category: 'Enterprise Tech' },
    { name: 'Caterpillar', Logo: CaterpillarLogo, category: 'Enterprise Tech' },

    // Existing other categories remain unchanged
    { name: 'Flipkart', Logo: FlipkartLogo, category: 'Retail & E-commerce' },
    { name: 'Infosys', Logo: InfosysLogo, category: 'Consulting' },

    { name: 'Accenture', Logo: AccentureLogo, category: 'Consulting' },
    { name: 'Deloitte', Logo: DeloitteLogo, category: 'Consulting' },
    { name: 'Goldman Sachs', Logo: GoldmanSachsLogo, category: 'Finance & Fintech' },
    { name: 'Paytm', Logo: PaytmLogo, category: 'Finance & Fintech' },
    { name: 'PhonePe', Logo: PhonePeLogo, category: 'Finance & Fintech' },
    { name: 'BharatPe', Logo: BharatPeLogo, category: 'Finance & Fintech' },
    { name: 'Capgemini', Logo: CapgeminiLogo, category: 'Consulting' },
    { name: 'PharmEasy', Logo: PharmEasyLogo, category: 'Retail & E-commerce' },
    { name: 'Mu Sigma', Logo: MuSigmaLogo, category: 'Consulting' },
    { name: 'skillventory', Logo: ({ className }) => (
        <img 
          src={skillventory} 
          className={className} 
          alt="skillventory" 
        />
      ), category: 'Consulting' },
    { name: 'nielseniq', Logo: ({ className }) => (
        <img 
          src={nielseniq} 
          className={className} 
          alt="nielseniq" 
        />
      ), category: 'Enterprise Tech' },
    { name: 'biznext', Logo: ({ className }) => (
        <img 
          src={biznext} 
          className={className} 
          alt="biznext" 
        />
      ), category: 'Finance & Fintech' },
    { name: 'meesho', Logo: ({ className }) => (
        <img 
          src={meesho} 
          className={className} 
          alt="meesho" 
        />
      ), category: 'Retail & E-commerce' },
    { name: 'Adidas', Logo: AdidasLogo, category: 'Retail & E-commerce' },
    { name: 'Medplus', Logo: MedplusLogo, category: 'Retail & E-commerce' },
  ];

  // Filter companies based on selected category
  const filteredCompanies = activeFilter === 'All' 
    ? companies 
    : companies.filter(company => company.category === activeFilter);

  // Group companies by category
  const groupedCompanies = categories.map(category => {
    const companiesInCategory = filteredCompanies.filter(
      company => company.category === category.name
    );
    
    return {
      ...category,
      companies: companiesInCategory,
      count: companiesInCategory.length
    };
  }).filter(category => category.count > 0);

  const MoreCompaniesCard = () => {
    return (
      <div className={classes.moreCompaniesCard}>
        <span className={classes.plusIcon}>+</span>
        <span className={classes.moreCompaniesText}>More Companies</span>
      </div>
    );
  };

  const renderLogos = (categoryCompanies) => (
    <div className={classes.logoGrid}>
      {categoryCompanies.map((company) => (
        <div key={company.name} className={classes.logoWrapper}>
          <company.Logo className={classes.logoSvg} aria-label={company.name} />
        </div>
      ))}
      <MoreCompaniesCard />
    </div>
  );

  return (
    <Box className={classes.partnersSectionWrapper}>
      {/* Title section */}
      <Box className={classes.titleContainer}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" className={classes.sectionTitle}>
            Backed by our Hiring Partners
          </Typography>
        </Box>
      </Box>
      
      {/* Category filters */}
      <Box className={classes.categoryContainer}>
        <Box className={classes.categoryFilters}>
          {filters.map((filter, index) => (
            <Button
              key={index}
              variant="contained"
              className={`${classes.filterButton} ${
                activeFilter === filter ? classes.activeFilterButton : ''
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </Box>
        
        {/* Category cards */}
        <Box className={classes.cardsContainer}>
          {groupedCompanies.length > 0 ? (
            groupedCompanies.map((category) => (
              <Box key={category.id} className={classes.categoryCard}>
                {/* Category header */}
                <Box className={classes.categoryHeader}>
                  <Typography variant="h5" className={classes.categoryTitle}>
                    {category.name}
                  </Typography>
                </Box>
                
                {/* Logos grid */}
                {renderLogos(category.companies)}
              </Box>
            ))
          ) : (
            <Box className={classes.emptyState}>
              <Typography variant="body1" className={classes.emptyStateText}>
                No hiring partners found in this category
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default HiringPartners;
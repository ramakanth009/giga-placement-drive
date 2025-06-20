import React, { useState, useEffect } from 'react';
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
  // Add highlight style for yellow span
  highlight: {
    color: "#FFC614",
    fontWeight: "bold",
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
    position: 'relative',
    marginBottom: '40px',
    '@media (max-width: 768px)': {
      marginBottom: '30px',
    },
  },
  filterButton: {
    backgroundColor: '#f0f2f5 !important',
    color: '#555 !important',
    padding: '12px 24px !important',
    fontSize: '14px !important',
    fontWeight: '500 !important',
    border: 'none !important',
    boxShadow: 'none !important',
    borderRadius: '0 !important',
    transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1) !important',
    position: 'relative',
    zIndex: '1',
    margin: '0 -1px !important',
    '&:hover': {
      backgroundColor: '#e8eaed !important',
    },
    '@media (max-width: 768px)': {
      padding: '8px 16px !important',
      fontSize: '13px !important',
    },
  },
  activeFilterButton: {
    backgroundColor: '#2A2B6A !important',
    color: '#fff !important',
    fontWeight: '600 !important',
    zIndex: '2',
    borderRadius:"30px !important",
    transition: 'background 0.5s cubic-bezier(0.4,0,0.2,1), color 0.5s cubic-bezier(0.4,0,0.2,1) !important',
    '&:hover': {
      backgroundColor: '#2A2B6A !important',
    },
    '&:first-child': {
      borderTopLeftRadius: '30px !important',
      borderBottomLeftRadius: '30px !important',
    },
    '&:last-child': {
      borderTopRightRadius: '30px !important',
      borderBottomRightRadius: '30px !important',
    },
  },
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: '30px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    // Smooth transition for tab background
    transition: 'background 0.5s cubic-bezier(0.4,0,0.2,1)',
  },
  firstTab: {
    borderTopLeftRadius: '30px !important',
    borderBottomLeftRadius: '30px !important',
  },
  lastTab: {
    borderTopRightRadius: '30px !important',
    borderBottomRightRadius: '30px !important',
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
    // Smooth fade/slide for grid
    opacity: 1,
    transform: 'translateY(0px)',
    transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)',
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
    opacity: 0,
    transform: 'translateY(30px)',
    animation: '$fadeInLogo 0.8s cubic-bezier(0.4,0,0.2,1) forwards',
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
    opacity: 0,
    transform: 'translateX(40px)',
    animation: '$fadeInRight 0.8s cubic-bezier(0.4,0,0.2,1) forwards',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
    '@media (max-width: 768px)': {
      height: '90px',
    },
  },
  plusIcon: {
    fontSize: '40px',
    color: '#ffffff',
    marginBottom: '4px',
  },
  '@keyframes fadeInLogo': {
    '0%': { opacity: 0, transform: 'translateY(30px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
  '@keyframes fadeInRight': {
    '0%': { opacity: 0, transform: 'translateX(40px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },
  moreCompaniesText: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '500',
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

  // Auto-switching tabs functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = filters.indexOf(activeFilter);
      const nextIndex = (currentIndex + 1) % filters.length;
      setActiveFilter(filters[nextIndex]);
    }, 3000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [activeFilter, filters]);

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
    <div className={classes.logoGrid} key={categoryCompanies.map(c => c.name).join('-')}>
      {categoryCompanies.map((company, idx) => (
        <div
          key={company.name}
          className={classes.logoWrapper}
          style={{ animationDelay: `${0.05 * idx + 0.1}s` }}
        >
          <company.Logo className={classes.logoSvg} aria-label={company.name} />
        </div>
      ))}
      {/* MoreCompaniesCard gets its own animation via its class */}
      <div>
        <MoreCompaniesCard />
      </div>
    </div>
  );

  return (
    <Box className={classes.partnersSectionWrapper}>
      {/* Title section */}
      <Box className={classes.titleContainer}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" className={classes.sectionTitle}>
            <span>
              Backed by our{" "}
              <span className={classes.highlight}>Hiring Partners</span>
            </span>
          </Typography>
        </Box>
      </Box>
      
      {/* Category filters */}
      <Box className={classes.categoryContainer}>
        <Box className={classes.categoryFilters}>
          <Box className={classes.tabsContainer}>
            {filters.map((filter, index) => (
              <Button
                key={index}
                variant="contained"
                className={`${classes.filterButton} 
                  ${activeFilter === filter ? classes.activeFilterButton : ''} 
                  ${index === 0 ? classes.firstTab : ''} 
                  ${index === filters.length - 1 ? classes.lastTab : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </Box>
        </Box>
        
        {/* Category cards */}
        <Box className={classes.cardsContainer}>
          {groupedCompanies.length > 0 ? (
            groupedCompanies.map((category) => (
              <Box key={category.id} className={classes.categoryCard}>
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
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { 
  Home, Info, Mail, Building, School, Code, Database, 
  Users, FileText, ShoppingCart, CreditCard, ClipboardCheck, 
  Map, BookOpen, GraduationCap 
} from 'lucide-react';

const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    position: 'relative',
    paddingTop: '80px'
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(42, 43, 106, 0.02) 0%, rgba(255, 198, 20, 0.02) 100%)',
    zIndex: 0
  },
  content: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  title: {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#2A2B6A',
    marginBottom: '20px',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #FFC614 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6'
  },
  section: {
    marginBottom: '50px'
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#2A2B6A',
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  sectionIcon: {
    color: '#FFC614',
    fontSize: '2rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '25px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr'
    }
  },
  card: {
    padding: '25px',
    borderRadius: '15px',
    backgroundColor: 'white',
    border: '1px solid rgba(42, 43, 106, 0.1)',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    position: 'relative',
    cursor: 'pointer'
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 25px rgba(42, 43, 106, 0.15)',
    borderColor: '#FFC614'
  },
  hiddenCard: {
    opacity: 0.6,
    backgroundColor: '#f5f5f5',
    cursor: 'default'
  },
  iconContainer: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(42, 43, 106, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px'
  },
  linkIcon: {
    color: '#2A2B6A',
    width: '24px',
    height: '24px'
  },
  linkTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#2A2B6A',
    marginBottom: '8px',
    margin: '0 0 8px 0'
  },
  linkPath: {
    fontSize: '0.9rem',
    color: '#FFC614',
    fontFamily: 'monospace',
    backgroundColor: 'rgba(255, 198, 20, 0.1)',
    padding: '4px 8px',
    borderRadius: '4px',
    marginBottom: '8px',
    display: 'inline-block'
  },
  linkDescription: {
    fontSize: '0.9rem',
    color: '#666',
    lineHeight: '1.4',
    margin: '0'
  },
  statusChip: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    fontSize: '0.7rem',
    padding: '4px 8px',
    borderRadius: '12px',
    fontWeight: '600',
    textTransform: 'uppercase'
  },
  activeChip: {
    backgroundColor: '#e8f5e8',
    color: '#2e7d32'
  },
  hiddenChip: {
    backgroundColor: '#fff3e0',
    color: '#f57c00'
  },
  redirectChip: {
    backgroundColor: '#e3f2fd',
    color: '#1976d2'
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgba(42, 43, 106, 0.1)',
    margin: '40px 0',
    border: 'none'
  },
  footer: {
    marginTop: '60px',
    textAlign: 'center'
  },
  footerText: {
    color: '#666',
    fontStyle: 'italic',
    fontSize: '0.9rem'
  }
});

const SitemapPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const sitePages = [
    {
      category: 'Main Pages',
      icon: <Home />,
      pages: [
        {
          title: 'Homepage',
          path: '/',
          description: 'Main landing page with program overview and features',
          icon: <Home />,
          status: 'active'
        },
        {
          title: 'About Us',
          path: '/about',
          description: 'Learn about Gigaversity mission and vision',
          icon: <Info />,
          status: 'active'
        },
        {
          title: 'Contact Us',
          path: '/contact',
          description: 'Get in touch with our team',
          icon: <Mail />,
          status: 'active'
        },
        {
          title: 'Campus',
          path: '/campus',
          description: 'Explore our state-of-the-art learning facilities',
          icon: <Building />,
          status: 'active'
        }
      ]
    },
    {
      category: 'Programs & Courses',
      icon: <School />,
      pages: [
        {
          title: 'Full Stack Development',
          path: '/fullstack',
          description: 'Learn complete web development from frontend to backend',
          icon: <Code />,
          status: 'active'
        },
        {
          title: 'Data Science',
          path: '/datascience',
          description: 'Master data analysis, ML, and AI technologies',
          icon: <Database />,
          status: 'active'
        },
        {
          title: 'Full-Time Full Stack',
          path: '/fulltime/fullstack',
          description: 'Intensive full-time full stack development program',
          icon: <GraduationCap />,
          status: 'active'
        },
        {
          title: 'Full-Time Data Science',
          path: '/fulltime/datascience',
          description: 'Intensive full-time data science program',
          icon: <Database />,
          status: 'active'
        }
      ]
    },
    {
      category: 'Registration & Forms',
      icon: <Users />,
      pages: [
        {
          title: 'Registration',
          path: '/register',
          description: 'Sign up for courses and programs',
          icon: <Users />,
          status: 'active'
        },
        {
          title: 'Pre-Screening Test',
          path: '/pre-screening-test',
          description: 'Assessment to evaluate your current skills',
          icon: <ClipboardCheck />,
          status: 'active'
        }
      ]
    },
    {
      category: 'Content & Resources',
      icon: <BookOpen />,
      pages: [
        {
          title: 'Blog',
          path: '/blog',
          description: 'Latest articles, tutorials, and industry insights',
          icon: <BookOpen />,
          status: 'active'
        },
        {
          title: 'Blog Article',
          path: '/blog/mern-stack-development-guide',
          description: 'Example blog post with detailed content',
          icon: <FileText />,
          status: 'active'
        }
      ]
    },
    {
      category: 'E-commerce & Payments',
      icon: <ShoppingCart />,
      pages: [
        {
          title: 'Cart',
          path: '/cart',
          description: 'Review and manage your course selections',
          icon: <ShoppingCart />,
          status: 'active'
        },
        {
          title: 'Payment Complete',
          path: '/payment-complete',
          description: 'Payment confirmation and next steps',
          icon: <CreditCard />,
          status: 'active'
        }
      ]
    },
    {
      category: 'Legal & Information',
      icon: <FileText />,
      pages: [
        {
          title: 'Privacy Policy',
          path: '/privacy-policy',
          description: 'How we protect and handle your personal data',
          icon: <FileText />,
          status: 'active'
        },
        {
          title: 'Terms and Conditions',
          path: '/terms-and-conditions',
          description: 'Terms of service and usage guidelines',
          icon: <FileText />,
          status: 'active'
        },
        {
          title: 'Sitemap',
          path: '/sitemap',
          description: 'Complete navigation guide to all website pages',
          icon: <Map />,
          status: 'active'
        }
      ]
    }
  ];

  const getStatusChip = (status) => {
    const baseStyle = classes.statusChip;
    switch (status) {
      case 'active':
        return `${baseStyle} ${classes.activeChip}`;
      case 'hidden':
        return `${baseStyle} ${classes.hiddenChip}`;
      case 'redirect':
        return `${baseStyle} ${classes.redirectChip}`;
      default:
        return baseStyle;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'hidden':
        return 'Hidden';
      case 'redirect':
        return 'Redirect';
      default:
        return '';
    }
  };

  // Updated handleCardClick to use React Router navigate
  const handleCardClick = (path, status) => {
    if (status === 'active') {
      navigate(path);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.backgroundPattern} />
      
      <div className={classes.content}>
        <div className={classes.header}>
          <h1 className={classes.title}>Sitemap</h1>
          <p className={classes.subtitle}>
            Complete navigation guide to all pages and sections of Gigaversity platform
          </p>
        </div>

        {sitePages.map((section, sectionIndex) => (
          <div key={sectionIndex} className={classes.section}>
            <h2 className={classes.sectionTitle}>
              <span className={classes.sectionIcon}>{section.icon}</span>
              {section.category}
            </h2>
            
            <div className={classes.grid}>
              {section.pages.map((page, pageIndex) => {
                const cardId = `${sectionIndex}-${pageIndex}`;
                const isHovered = hoveredCard === cardId;
                const cardStyle = [
                  classes.card,
                  page.status !== 'active' ? classes.hiddenCard : '',
                  isHovered && page.status === 'active' ? classes.cardHover : ''
                ].filter(Boolean).join(' ');

                return (
                  <div
                    key={pageIndex}
                    className={cardStyle}
                    onMouseEnter={() => setHoveredCard(cardId)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => handleCardClick(page.path, page.status)}
                  >
                    <span className={getStatusChip(page.status)}>
                      {getStatusText(page.status)}
                    </span>
                    
                    <div className={classes.iconContainer}>
                      <span className={classes.linkIcon}>{page.icon}</span>
                    </div>
                    
                    <h3 className={classes.linkTitle}>{page.title}</h3>
                    
                    <code className={classes.linkPath}>{page.path}</code>
                    
                    <p className={classes.linkDescription}>{page.description}</p>
                  </div>
                );
              })}
            </div>
            
            {sectionIndex < sitePages.length - 1 && <hr className={classes.divider} />}
          </div>
        ))}

        <div className={classes.footer}>
          <p className={classes.footerText}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
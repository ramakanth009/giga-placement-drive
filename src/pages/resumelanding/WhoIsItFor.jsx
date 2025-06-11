import React from 'react';
import { makeStyles } from '@mui/styles';
import { Briefcase, GraduationCap, Monitor, Building2 } from 'lucide-react';

const useStyles = makeStyles({
  section: {
    padding: '20px 0',
    position: 'relative',
    background: '#f5f5f5',
    overflow: 'hidden',
    '@media (max-width: 600px)': {
      padding: '15px 0',
    },
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
    backgroundSize: '30px 30px',
    pointerEvents: 'none',
    zIndex: 1,
  },
  contentContainer: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    '@media (max-width: 600px)': {
      padding: '0 16px',
    },
  },
  title: {
    fontWeight: 800,
    fontSize: '3.5rem',
    color: '#2A2B6A',
    textAlign: 'center',
    marginBottom: '32px',
    position: 'relative',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '3rem',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.5rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem',
      marginBottom: '24px',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.5rem',
    },
  },
  subtitle: {
    color: '#000000',
    marginBottom: '30px',
    fontSize: '1.2rem',
    lineHeight: 1.7,
    textAlign: 'center',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    '@media (max-width: 960px)': {
      fontSize: '1.1rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem',
      marginBottom: '20px',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem',
    },
  },
  featuresContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    marginTop: '40px',
    '@media (max-width: 1200px)': {
      gap: '20px',
      marginTop: '30px',
    },
    '@media (max-width: 960px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gap: '15px',
      marginTop: '20px',
    },
  },
  featureBox: {
    width: '100%',
    minWidth: 'auto',
    minHeight: 'auto',
    '@media (max-width: 960px)': {
      minHeight: '320px',
    },
    '@media (max-width: 600px)': {
      minHeight: 'auto',
    },
  },
  featureItem: {
    position: 'relative',
    padding: '30px 20px',
    background: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    },
    '@media (max-width: 600px)': {
      padding: '25px 15px',
    },
    '@media (max-width: 375px)': {
      padding: '20px 12px',
    },
  },
  iconWrapper: {
    display: 'inline-flex',
    marginBottom: '25px',
    position: 'relative',
    '@media (max-width: 600px)': {
      marginBottom: '20px',
    },
  },
  iconBox: {
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    fontSize: '36px',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 480px)': {
      width: '70px',
      height: '70px',
    },
    '@media (max-width: 375px)': {
      width: '60px',
      height: '60px',
    },
  },
  iconShadow: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    borderRadius: '16px',
    top: '10px',
    left: '10px',
    opacity: 0.4,
    zIndex: 1,
    '@media (max-width: 480px)': {
      width: '70px',
      height: '70px',
      top: '8px',
      left: '8px',
    },
    '@media (max-width: 375px)': {
      width: '60px',
      height: '60px',
      top: '6px',
      left: '6px',
    },
  },
  icon1: {
    background: '#06b6d4',
    boxShadow: '0 10px 15px rgba(6, 182, 212, 0.3)',
  },
  iconShadow1: {
    background: '#06b6d4',
  },
  icon2: {
    background: '#f97316',
    boxShadow: '0 10px 15px rgba(249, 115, 22, 0.3)',
  },
  iconShadow2: {
    background: '#f97316',
  },
  icon3: {
    background: '#8b5cf6',
    boxShadow: '0 10px 15px rgba(139, 92, 246, 0.3)',
  },
  iconShadow3: {
    background: '#8b5cf6',
  },
  icon4: {
    background: '#ec4899',
    boxShadow: '0 10px 15px rgba(236, 72, 153, 0.3)',
  },
  iconShadow4: {
    background: '#ec4899',
  },
  iconStyle: {
    width: '36px',
    height: '36px',
    color: 'white',
    '@media (max-width: 480px)': {
      width: '30px',
      height: '30px',
    },
    '@media (max-width: 375px)': {
      width: '24px',
      height: '24px',
    },
  },
  featureTitle: {
    fontWeight: 700,
    fontSize: '1.75rem',
    color: '#1f2937',
    marginBottom: '16px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    '@media (max-width: 960px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.4rem',
      marginBottom: '12px',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.25rem',
    },
  },
  featureDescription: {
    color: '#6b7280',
    lineHeight: 1.7,
    fontSize: '1rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    minHeight: 'auto',
    flex: 1,
    '@media (max-width: 600px)': {
      fontSize: '0.95rem',
      lineHeight: 1.6,
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem',
    },
  },
  decorativeCircle: {
    position: 'absolute',
    borderRadius: '50%',
    zIndex: 0,
  },
  circle1: {
    width: '400px',
    height: '400px',
    background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, rgba(59, 130, 246, 0.1) 100%)',
    top: '-200px',
    right: '-200px',
    '@media (max-width: 960px)': {
      width: '300px',
      height: '300px',
      top: '-150px',
      right: '-150px',
    },
    '@media (max-width: 600px)': {
      width: '200px',
      height: '200px',
      top: '-100px',
      right: '-100px',
    },
  },
  circle2: {
    width: '600px',
    height: '600px',
    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(124, 58, 237, 0.1) 100%)',
    bottom: '-300px',
    left: '-300px',
    '@media (max-width: 960px)': {
      width: '400px',
      height: '400px',
      bottom: '-200px',
      left: '-200px',
    },
    '@media (max-width: 600px)': {
      width: '300px',
      height: '300px',
      bottom: '-150px',
      left: '-150px',
    },
  },
});

const WhoIsItFor = () => {
  const classes = useStyles();

  const features = [
    {
      icon: <Briefcase className={classes.iconStyle} />,
      title: "Job Seekers",
      description: "Perfect for professionals looking to stand out in competitive job markets with a resume that highlights their unique skills and experiences.",
      iconClass: classes.icon1,
      shadowClass: classes.iconShadow1
    },
    {
      icon: <GraduationCap className={classes.iconStyle} />,
      title: "Recent Grads", 
      description: "Ideal for graduates entering the workforce who need to showcase their academic achievements and relevant experiences effectively.",
      iconClass: classes.icon2,
      shadowClass: classes.iconShadow2
    },
    {
      icon: <Monitor className={classes.iconStyle} />,
      title: "Career shift",
      description: "Tailored for professionals transitioning to new industries who need to emphasize transferable skills and relevant qualifications.",
      iconClass: classes.icon3,
      shadowClass: classes.iconShadow3
    },
    {
      icon: <Building2 className={classes.iconStyle} />,
      title: "Executives",
      description: "Designed for senior professionals who need to highlight leadership abilities, strategic vision, and significant career accomplishments.",
      iconClass: classes.icon4,
      shadowClass: classes.iconShadow4
    },
  ];

  return (
    <section className={classes.section}>
      <div className={classes.backgroundPattern}></div>
      <div className={`${classes.decorativeCircle} ${classes.circle1}`}></div>
      <div className={`${classes.decorativeCircle} ${classes.circle2}`}></div>
      
      <div className={classes.contentContainer}>
        <h2 className={classes.title}>
          Who Is It <span>For?</span>
        </h2>
        <p className={classes.subtitle}>
          Our resume builder is designed to help professionals at all career stages create impactful resumes that showcase their unique value proposition.
        </p>
        
        <div className={classes.featuresContainer}>
          {features.map((feature, index) => (
            <div className={classes.featureBox} key={index}>
              <div className={classes.featureItem}>
                <div className={classes.iconWrapper}>
                  <div className={`${classes.iconBox} ${feature.iconClass}`}>
                    {feature.icon}
                  </div>
                  <div className={`${classes.iconShadow} ${feature.shadowClass}`}></div>
                </div>
                <h5 className={classes.featureTitle}>
                  {feature.title}
                </h5>
                <p className={classes.featureDescription}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
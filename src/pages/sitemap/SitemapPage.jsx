import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
  Home,
  Info,
  Mail,
  Building,
  Code,
  Database,
  Users,
  FileText,
  ShoppingCart,
  ClipboardCheck,
  Map,
  BookOpen,
  GraduationCap,
  ExternalLink,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    position: "relative",
    paddingTop: "80px",
  },
  backgroundPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(42, 43, 106, 0.02) 0%, rgba(255, 198, 20, 0.02) 100%)",
    zIndex: 0,
  },
  content: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#2A2B6A",
    marginBottom: "20px",
    background: "linear-gradient(135deg, #2A2B6A 0%, #FFC614 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  // ADDED: Status section for sitemap health
  statusSection: {
    marginBottom: "40px",
    padding: "25px",
    borderRadius: "15px",
    backgroundColor: "white",
    border: "1px solid rgba(42, 43, 106, 0.1)",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
  },
  statusTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#2A2B6A",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  statusGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  statusItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
  },
  statusIconSuccess: {
    color: "#28a745",
  },
  statusIconWarning: {
    color: "#ffc107",
  },
  // ADDED: XML sitemap links section
  xmlSection: {
    marginBottom: "40px",
    padding: "25px",
    borderRadius: "15px",
    backgroundColor: "white",
    border: "1px solid rgba(42, 43, 106, 0.1)",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
  },
  xmlTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#2A2B6A",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  xmlLinks: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "15px",
  },
  xmlLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 20px",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
    border: "1px solid rgba(42, 43, 106, 0.1)",
    textDecoration: "none",
    color: "#2A2B6A",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#e9ecef",
      transform: "translateY(-2px)",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    },
  },
  section: {
    marginBottom: "50px",
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#2A2B6A",
    marginBottom: "30px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  sectionIcon: {
    color: "#FFC614",
    fontSize: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gap: "25px",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
  card: {
    padding: "25px",
    borderRadius: "15px",
    backgroundColor: "white",
    border: "1px solid rgba(42, 43, 106, 0.1)",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s ease",
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
      borderColor: "#FFC614",
    },
  },
  cardIcon: {
    fontSize: "2.5rem",
    color: "#FFC614",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#2A2B6A",
    marginBottom: "10px",
  },
  cardDescription: {
    color: "#666",
    lineHeight: "1.6",
    fontSize: "0.95rem",
  },
  cardPath: {
    fontSize: "0.85rem",
    color: "#999",
    fontFamily: "monospace",
    backgroundColor: "#f8f9fa",
    padding: "5px 10px",
    borderRadius: "5px",
    marginTop: "10px",
  },
});

const SitemapPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [sitemapStatus, setSitemapStatus] = useState({
    lastGenerated: null,
    urlCount: 0,
    isHealthy: false,
  });

  // ADDED: Check sitemap health on component mount
  useEffect(() => {
    checkSitemapHealth();
  }, []);

  const checkSitemapHealth = async () => {
    try {
      const response = await fetch("/sitemap.xml");
      const isHealthy =
        response.ok && response.headers.get("content-type")?.includes("xml");

      if (isHealthy) {
        const text = await response.text();
        const urlCount = (text.match(/<url>/g) || []).length;

        setSitemapStatus({
          lastGenerated: new Date().toISOString().split("T")[0],
          urlCount,
          isHealthy: true,
        });
      } else {
        setSitemapStatus((prev) => ({ ...prev, isHealthy: false }));
      }
    } catch (error) {
      console.error("Error checking sitemap health:", error);
      setSitemapStatus((prev) => ({ ...prev, isHealthy: false }));
    }
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  const sitePages = [
    {
      category: "Main Pages",
      icon: <Home />,
      pages: [
        {
          title: "Homepage",
          path: "/",
          description:
            "Main landing page with program overview and latest updates",
          icon: <Home />,
          status: "active",
        },
        {
          title: "About Us",
          path: "/about",
          description: "Learn about our mission, vision, and team",
          icon: <Info />,
          status: "active",
        },
        {
          title: "Contact Us",
          path: "/contact",
          description: "Get in touch with our team for inquiries and support",
          icon: <Mail />,
          status: "active",
        },
        {
          title: "Campus",
          path: "/campus",
          description: "Explore our campus facilities and learning environment",
          icon: <Building />,
          status: "active",
        },
      ],
    },
    {
      category: "Programs & Courses",
      icon: <GraduationCap />,
      pages: [
        {
          title: "Full Stack Development",
          path: "/fullstack",
          description: "Comprehensive full-stack development program",
          icon: <Code />,
          status: "active",
        },
        {
          title: "Data Science",
          path: "/datascience",
          description: "Advanced data science and analytics program",
          icon: <Database />,
          status: "active",
        },
        {
          title: "Virtual Placement - Full Stack",
          path: "/virtual-placement-fullstack",
          description: "Virtual placement program for full-stack developers",
          icon: <Code />,
          status: "active",
        },
        {
          title: "Virtual Placement - Data Science",
          path: "/virtual-placement-datascience",
          description: "Virtual placement program for data scientists",
          icon: <Database />,
          status: "active",
        },
      ],
    },
    {
      category: "Registration & Assessment",
      icon: <Users />,
      pages: [
        {
          title: "Registration",
          path: "/register",
          description: "Sign up for courses and programs",
          icon: <Users />,
          status: "active",
        },
        {
          title: "Pre-Screening Test",
          path: "/pre-screening-test",
          description: "Assessment to evaluate your current skills",
          icon: <ClipboardCheck />,
          status: "active",
        },
      ],
    },
    {
      category: "Content & Resources",
      icon: <BookOpen />,
      pages: [
        {
          title: "Blog",
          path: "/blog",
          description: "Latest articles, tutorials, and industry insights",
          icon: <BookOpen />,
          status: "active",
        },
        {
          title: "Blog Article",
          path: "/blog/mern-stack-development-guide",
          description: "Example blog post with detailed content",
          icon: <FileText />,
          status: "active",
        },
      ],
    },
    {
      category: "Products & Tools",
      icon: <ShoppingCart />,
      pages: [
        {
          title: "Giga Resume Builder",
          path: "/giga-resume-builder",
          description: "Professional resume building tool",
          icon: <FileText />,
          status: "active",
        },
        // {
        //   title: 'Cart',
        //   path: '/cart',
        //   description: 'Review and manage your course selections',
        //   icon: <ShoppingCart />,
        //   status: 'active'
        // },
        // {
        //   title: 'Payment Complete',
        //   path: '/payment-complete',
        //   description: 'Payment confirmation and next steps',
        //   icon: <CreditCard />,
        //   status: 'active'
        // }
      ],
    },
    {
      category: "Legal & Information",
      icon: <FileText />,
      pages: [
        {
          title: "Privacy Policy",
          path: "/privacy-policy",
          description: "How we protect and handle your personal data",
          icon: <FileText />,
          status: "active",
        },
        {
          title: "Terms and Conditions",
          path: "/terms-and-conditions",
          description: "Terms of service and usage guidelines",
          icon: <FileText />,
          status: "active",
        },
        {
          title: "Sitemap",
          path: "/sitemap",
          description: "Complete overview of all website pages",
          icon: <Map />,
          status: "active",
        },
      ],
    },
  ];

  return (
    <div className={classes.container}>
      {/* ADDED: SEO meta tags */}
      <title>Sitemap - Gigaversity | Complete Website Structure</title>

      <div className={classes.backgroundPattern}></div>
      <div className={classes.content}>
        <div className={classes.header}>
          <h1 className={classes.title}>Website Sitemap</h1>
          <p className={classes.subtitle}>
            Complete overview of all pages and sections on Gigaversity. Navigate
            easily through our educational content and resources.
          </p>
        </div>

        {/* ADDED: Sitemap Status Section */}
        <div className={classes.statusSection}>
          <h2 className={classes.statusTitle}>
            <Map className={classes.sectionIcon} />
            Sitemap Status
          </h2>
          <div className={classes.statusGrid}>
            <div className={classes.statusItem}>
              {sitemapStatus.isHealthy ? (
                <CheckCircle className={classes.statusIconSuccess} size={24} />
              ) : (
                <AlertCircle className={classes.statusIconWarning} size={24} />
              )}
              <div>
                <strong>Health Status:</strong>{" "}
                {sitemapStatus.isHealthy ? "Healthy" : "Needs Attention"}
              </div>
            </div>
            <div className={classes.statusItem}>
              <FileText className={classes.statusIconSuccess} size={24} />
              <div>
                <strong>Total URLs:</strong> {sitemapStatus.urlCount} pages
              </div>
            </div>
            <div className={classes.statusItem}>
              <CheckCircle className={classes.statusIconSuccess} size={24} />
              <div>
                <strong>Last Updated:</strong>{" "}
                {sitemapStatus.lastGenerated || "Loading..."}
              </div>
            </div>
          </div>
        </div>

        {/* ADDED: XML Sitemap Links */}
        <div className={classes.xmlSection}>
          <h2 className={classes.xmlTitle}>
            <Code className={classes.sectionIcon} />
            XML Sitemaps for Search Engines
          </h2>
          <div className={classes.xmlLinks}>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.xmlLink}
            >
              <span>
                <strong>Main Sitemap</strong>
                <br />
                <small>Complete website structure for Google</small>
              </span>
              <ExternalLink size={20} />
            </a>
            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.xmlLink}
            >
              <span>
                <strong>Robots.txt</strong>
                <br />
                <small>Crawling instructions for search engines</small>
              </span>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* Existing page sections */}
        {sitePages.map((section, index) => (
          <div key={index} className={classes.section}>
            <h2 className={classes.sectionTitle}>
              {React.cloneElement(section.icon, {
                className: classes.sectionIcon,
              })}
              {section.category}
            </h2>
            <div className={classes.grid}>
              {section.pages.map((page, pageIndex) => (
                <div
                  key={pageIndex}
                  className={classes.card}
                  onClick={() => handleCardClick(page.path)}
                >
                  {React.cloneElement(page.icon, {
                    className: classes.cardIcon,
                  })}
                  <h3 className={classes.cardTitle}>{page.title}</h3>
                  <p className={classes.cardDescription}>{page.description}</p>
                  <div className={classes.cardPath}>{page.path}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SitemapPage;

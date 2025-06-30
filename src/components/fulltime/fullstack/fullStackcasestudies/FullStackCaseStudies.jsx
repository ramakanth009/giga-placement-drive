// src/components/fullstack/FullStackCaseStudies.jsx
import React from "react";
import IndustryCaseStudies from "../../../common/fulltime/casestudy/IndustryCaseStudies";
import airbnbLogo from "../../../../assets/airbnb-image.png"; // Import your logo images
import spotifyLogo from "../../../../assets/spotify-image.png";
import slackLogo from "../../../../assets/slack-image.png";
import airbnbMonoLogo from "../../../../assets/airbnb-logo.png"; // Import your logo images
import spotifyMonoLogo from "../../../../assets/spotify-logo.png";
import slackMonoLogo from "../../../../assets/slack-logo.png";

const FullStackCaseStudies = () => {
  const subtitle =
    "Learn how leading companies leverage full stack development to create exceptional digital experiences and solve complex business challenges.";

  const caseStudies = [
    {
      logoSrc: airbnbLogo,
      companyName: "Airbnb",
      monoLogoSrc: airbnbMonoLogo,
      logoAltText: "Case Study on Scaling a Global Marketplace Platform Like AIRBNB for Full-Stack Development",
      monoLogoAltText: "Case Study on Scaling a Global Marketplace Platform Like AIRBNB for Full-Stack Development",
      title: "Scaling a Global Marketplace Platform",
      description:
        "Explore how Airbnb developed a robust service-oriented architecture to handle millions of listings and bookings, ensuring seamless experiences across web and mobile platforms.",
      metrics: [
        { value: "99.9%", label: "Platform Uptime" },
        { value: "4M+", label: "Daily Active Users" },
        { value: "60%", label: "Faster Page Load Times" },
      ],
      tags: [
        "Microservices Architecture",
        "Progressive Web Apps",
        "Internationalization",
        "Performance Optimization",
      ],
    },
    {
      logoSrc: spotifyLogo,
      companyName: "Spotify",
      monoLogoSrc: spotifyMonoLogo,
      logoAltText: "Case study on Building a modern, streamlined Service like Spotify for  Full-Stack Development",
      monoLogoAltText: "Case study on Building a modern, streamlined Service like Spotify for  Full-Stack Development",
      title: "Building a Modern Streaming Service",
      description:
        "Discover how Spotify leverages React, Node.js, and microservices to deliver personalized music streaming experiences to millions of users worldwide with minimal latency.",
      metrics: [
        { value: "30ms", label: "Average API Response Time" },
        { value: "700+", label: "Microservices Deployed" },
        { value: "90%", label: "Code Test Coverage" },
      ],
      tags: [
        "Continuous Deployment",
        "React Architecture",
        "Cloud Infrastructure",
        "Real-time Data Processing",
      ],
    },
    {
      logoSrc: slackLogo,
      companyName: "Slack",
      monoLogoSrc: slackMonoLogo,
      logoAltText: "Case Study on Revolutionizing Workplace Communication Like Slack for Full-Stack Development",
      monoLogoAltText: "Case Study on Revolutionizing Workplace Communication Like Slack for Full-Stack Development",
      title: "Revolutionizing Workplace Communication",
      description:
        "Learn how Slack built a real-time messaging platform that handles billions of messages daily, utilizing modern web technologies and robust backend systems.",
      metrics: [
        { value: "10M+", label: "Daily Active Users" },
        { value: "1.5B", label: "Messages Processed Daily" },
        { value: "99.99%", label: "Service Reliability" },
      ],
      tags: [
        "WebSockets",
        "Service Architecture",
        "State Synchronization",
        "Security & Compliance",
      ],
    },
  ];

  return (
    <IndustryCaseStudies
      title="Industry Case Studies"
      subtitle={subtitle}
      caseStudies={caseStudies}
    />
  );
};

export default FullStackCaseStudies;
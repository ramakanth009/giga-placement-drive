// src/components/datascience/DataScienceCaseStudies.jsx
import React from "react";
import IndustryCaseStudies from "../../../common/fulltime/casestudy/IndustryCaseStudies";
import netflixLogo from "../../../../assets/netflix-image.png"; 
import amazonLogo from "../../../../assets/amazon-image.png";
import googleLogo from "../../../../assets/google-image.png";
import netflixMonoLogo from "../../../../assets/netflix-logo.png"; 
import amazonMonoLogo from "../../../../assets/amazon-logo.png";
import googleMonoLogo from "../../../../assets/google-logo.png";

const DataScienceCaseStudies = () => {
  const subtitle =
    "Learn how leading companies leverage data science to transform industries and create breakthrough products and services.";

  const caseStudies = [
    {
      logoSrc: netflixLogo,
      companyName: "Netflix",
      monoLogoSrc: netflixMonoLogo,
      logoAltText: "Case Study in Data Science on the Topic of of personalized recommendations like Netflix",
      monoLogoAltText: "Case Study in Data Science on the Topic of of personalized recommendations like Netflix",
      title: "Data Science in Personalized Recommendations",
      description:
        "Learn how Netflix leverages data science to transform industries and create breakthrough products and services with their recommendation system.",
      metrics: [
        { value: "80%", label: "Content Discovery via Recommendations" },
        { value: "25%", label: "Improved User Retention" },
        { value: "1B+", label: "Daily Predictions" },
      ],
      tags: [
        "Collaborative Filtering",
        "Deep Learning",
        "User Behavior Analysis",
        "A/B Testing",
      ],
    },
    {
      logoSrc: amazonLogo,
      companyName: "Amazon",
      monoLogoSrc: amazonMonoLogo,
      logoAltText: "Case Study in Data Science on the Topic of E-commerce Optimization like Amazon",
      monoLogoAltText: "Case Study in Data Science on the Topic of E-commerce Optimization like Amazon",
      title: "Data Science in E-Commerce Optimization",
      description:
        "Explore how Amazon leverages machine learning to analyze purchase patterns, user behavior, and pricing trends, boosting sales through personalized recommendations and dynamic pricing.",
      metrics: [
        { value: "35%", label: "Sales Boost from ML Recommendations" },
        { value: "65%", label: "Logistics Efficiency Improvement" },
        { value: "30%", label: "Average Cart Value Increase" },
      ],
      tags: [
        "Dynamic Pricing",
        "Supply Chain Optimization",
        "Inventory Management",
        "Market Forecasting",
      ],
    },
    {
      logoSrc: googleLogo,
      companyName: "Google",
      monoLogoSrc: googleMonoLogo,
      logoAltText: "Case Study in Data Science on the Topic of Search Engine Technology like Google",
      monoLogoAltText: "Case Study in Data Science on the Topic of Search Engine Technology like Google",
      title: "Data Science in Search Engine Technology",
      description:
        "Discover how Google uses PageRank and NLP techniques to analyze query intent and user interactions, delivering real-time relevant results and maintaining dominant market share.",
      metrics: [
        { value: "92%", label: "Global Search Engine Market Share" },
        { value: "8.5B+", label: "Daily Search Queries" },
        { value: "0.5s", label: "Average Response Time" },
      ],
      tags: [
        "PageRank Algorithm",
        "Natural Language Processing",
        "Query Intent Analysis",
        "User Interaction Data",
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

export default DataScienceCaseStudies;
// src/components/datasciencecomponents/curriculum/DataScienceCurriculum.jsx
import React from "react";
import Curriculum from "../../common/curriculum/Curriculum";
import { 
  Assessment as DataAnalystIcon, 
  Dashboard as BiAnalystIcon,
  Storage as DataEngineerIcon,
  Psychology as MLEngineerIcon
} from "@mui/icons-material";

const DataScienceCurriculum = () => {
  // Define weeks data with appropriate icons
  const weeks = [
    {
      title: "Data Analyst",
      icon: <DataAnalystIcon />  // Assessment/Charts icon for Data Analyst
    },
    {
      title: "BI Analyst",
      icon: <BiAnalystIcon />  // Dashboard icon for Business Intelligence
    },
    {
      title: "Data Engineer",
      icon: <DataEngineerIcon />  // Storage/Database icon for Data Engineer
    },
    {
      title: "Machine Learning Engineer",
      icon: <MLEngineerIcon />  // Psychology/Brain icon for ML Engineer
    },
  ];

  // Define skills for each week
  const skills = [
    // Week 1 skills - Data Analyst
    [
      "Understand raw data using Excel and Pandas.",
      "Organize and refine data for analysis.",
      "Summarize insights using formulas.",
      "Identify trends using Pandas and SQL.",
      "Create charts using Matplotlib, Seaborn, and BI tools.",
      "Document key findings with business context.",
      "Deliver a case study-backed analysis.",
    ],
    // Week 2 skills - BI Analyst
    [
      "Explore data using Pandas.",
      "Clean, preprocess, and analyze distributions.",
      "Create interactive dashboards with Power BI and Tableau.",
      "Connect to multiple data sources and transform data.",
      "Design metrics and KPIs for business performance.",
      "Build automated reports and monitoring systems.",
      "Present insights to non-technical stakeholders.",
    ],
    // Week 3 skills - Data Engineer
    [
      "Learn ETL concepts with SQL and Python.",
      "Design and create a MySQL database schema.",
      "Develop an ETL script using Pandas.",
      "Automate ETL processes with Apache Airflow.",
      "Validate and test data integrity using SQL.",
      "Document the ETL pipeline workflow.",
      "Review, optimize, and monitor the ETL pipeline.",
    ],
    // Week 4 skills - ML Engineer
    [
      "Explore email data and analyze spam patterns.",
      "Preprocess and tokenize text using NLTK.",
      "Extract features using TF-IDF and Count Vectorizer.",
      "Train a spam classifier using Scikit-learn.",
      "Evaluate model and handle class imbalance.",
      "Deploy spam detector with Streamlit.",
      "Optimize model with GridSearchCV.",
    ],
  ];

  return (
    <Curriculum
      title={
        <>
          Our 30-Day Journey <span>To Job Readiness</span>
        </>
      }
      weeks={weeks}
      skills={skills}
      domain="datascience"
    />
  );
};

export default DataScienceCurriculum;
// src/components/datasciencecomponents/curriculum/DataScienceCurriculum.jsx
import React from "react";
import Curriculum from "../../common/curriculum/Curriculum";
import {
  BarChart as DataAnalystIcon,
  Assessment as BIAnalystIcon,
  Storage as DataEngineerIcon,
  Memory as MLIcon,
  DataObject as DataScienceIcon
} from '@mui/icons-material';

const DataScienceCurriculum = () => {
  // Define weeks data with icons
  const weeks = [
    {
      title: "Data Analyst",
      icon: <DataAnalystIcon />
    },
    {
      title: "BI Analyst",
      icon: <BIAnalystIcon />
    },
    {
      title: "Data Engineer",
      icon: <DataEngineerIcon />
    },
    {
      title: "Machine Learning Engineer",
      icon: <MLIcon />
    }
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
      "Deliver a case study-backed analysis."
    ],
    // Week 2 skills - BI Analyst
    [
      "Create interactive dashboards with Power BI.",
      "Design data models for business intelligence.",
      "Develop KPI tracking and visualization systems.",
      "Build automated reporting workflows.",
      "Connect SQL databases to BI platforms.",
      "Design executive dashboards and reports.",
      "Present data stories to stakeholders."
    ],
    // Week 3 skills - Data Engineer
    [
      "Learn ETL concepts with SQL and Python.",
      "Design and create a MySQL database schema.",
      "Develop an ETL script using Pandas.",
      "Automate ETL processes with Apache Airflow.",
      "Validate and test data integrity using SQL.",
      "Document the ETL pipeline workflow.",
      "Review, optimize, and monitor the ETL pipeline."
    ],
    // Week 4 skills - Machine Learning Engineer
    [
      "Explore email data and analyze spam patterns.",
      "Preprocess and tokenize text using NLTK.",
      "Extract features using TF-IDF and Count Vectorizer.",
      "Train a spam classifier using Scikit-learn.",
      "Evaluate model and handle class imbalance.",
      "Deploy spam detector with Streamlit.",
      "Optimize model with GridSearchCV."
    ]
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
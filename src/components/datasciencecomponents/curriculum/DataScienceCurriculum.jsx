// src/components/datasciencecomponents/curriculum/DataScienceCurriculum.jsx
import React from "react";
import Curriculum from "../../common/curriculum/Curriculum";

const DataScienceCurriculum = () => {
  // Define weeks data
  const weeks = [
    "Data Analyst",
    "Data Scientist",
    "Data Engineer",
    "Machine Learning Engineer",
  ];

  // Define skills for each week
  const skills = [
    // Week 1 skills
    [
      "Understand raw data using Excel and Pandas.",
      "Organize and refine data for analysis.",
      "Summarize insights using formulas.",
      "Identify trends using Pandas and SQL.",
      "Create charts using Matplotlib, Seaborn, and BI tools.",
      "Document key findings with business context.",
      "Deliver a case study-backed analysis.",
    ],
    // Week 2 skills
    [
      "Explore data using Pandas.",
      "Clean, preprocess, and analyze distributions.",
      "Select features using Scikit-learn.",
      "Train models with Scikit-learn.",
      "Tune models with GridSearchCV.",
      "Visualize and compare results.",
      "Deploy with Flask/FastAPI & present with Streamlit.",
    ],
    // Week 3 skills
    [
      "Learn ETL concepts with SQL and Python.",
      "Design and create a MySQL database schema.",
      "Develop an ETL script using Pandas.",
      "Automate ETL processes with Apache Airflow.",
      "Validate and test data integrity using SQL.",
      "Document the ETL pipeline workflow.",
      "Review, optimize, and monitor the ETL pipeline.",
    ],
    // Week 4 skills
    [
      "Explore email data and analyze spam patterns.",
      "Preprocess and tokenize text using NLTK.",
      "Extract features using TF-IDF and Count Vectorizer.",
      "Train a spam classifier using Scikit-learn.",
      "Evaluate model and handle class imbalance.",
      "Deploy spam detector with Streamlit.",
      "Optimize model with GridSearchCV.",
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
    />
  );
};

export default DataScienceCurriculum;

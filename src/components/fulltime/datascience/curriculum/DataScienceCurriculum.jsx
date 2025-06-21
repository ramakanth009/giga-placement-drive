// src/components/fulltime/datascience/curriculum/DataScienceCurriculum.jsx
import React from 'react';
import Curriculum from '../../../common/fulltime/curriculum/Curriculum';

const DataScienceCurriculum = () => {
  // The curriculum data structure
  const curriculumData = {
    python: {
      title: "Python",
      topics: [
        "Introduction to Python",
        "Python Basics",
        "Control Flow & Loops",
        "Functions & Functional Programming",
        "Data Structures",
        "Modules, Packages & File Handling",
        "Object-Oriented Programming (OOP)",
        "Advanced Python Concepts",
        "Data Science Libraries",
      ],
    },
    sql: {
      title: "SQL",
      topics: [
        "Introduction to Databases and SQL",
        "Basic Querying and Data Retrieval",
        "Aggregation, Grouping, and Joins",
        "Subqueries, CTEs, and Advanced Querying",
        "Window Functions and Data Manipulation",
        "Time Series Analysis and Data Transformation",
        "Performance Optimization and Indexing",
        "Integrating SQL with Python and Data Science Workflows",
        "Best Practices and Query Optimization Techniques",
      ],
    },
    math: {
      title: "Core Mathematics & EDA",
      topics: [
        "Mathematics for Data Science",
        "Descriptive Statistics",
        "Probability Theory",
        "Linear Algebra",
        "Calculus & Optimization",
        "Exploratory Data Analysis (EDA)",
        "Data Cleaning & Transformation",
        "Data Visualization",
        "Feature Engineering",
        "Outlier Detection & Hypothesis Testing",
        "EDA & Data Storytelling",
      ],
    },
    machine: {
      title: "Machine Learning",
      topics: [
        "Introduction to Machine Learning",
        "Supervised Learning",
        "Regression Techniques",
        "Boosting and Ensemble Methods",
        "Basics of Neural Networks and Deep Learning",
        "Unsupervised Learning",
        "Dimensionality Reduction and Feature Engineering",
        "Reinforcement Learning",
        "Model Evaluation and Advanced Topics",
      ],
    },
    deep: {
      title: "Deep Learning",
      topics: [
        "Introduction to Deep Learning and Neural Networks",
        "Training Neural Networks and Optimization Techniques",
        "Convolutional Neural Networks (CNNs) and Applications in Computer Vision",
        "Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTMs)",
        "Model Evaluation Metrics and Hyperparameter Optimization",
        "Variational Autoencoders (VAEs) and Representation Learning",
        "Data Preparation, Augmentation, and Normalization Techniques",
        "Model Deployment, APIs, and Real-Time Inference",
        "Interpretability, Explainability, and Advanced Deep Learning Techniques",
      ],
    },
    nlp: {
      title: "Natural Language Processing",
      topics: [
        "Introduction to Natural Language Processing (NLP)",
        "Text Preprocessing and Tokenization",
        "Feature Extraction and Word Embeddings (Word2Vec, GloVe)",
        "Transformer Architecture and Attention Mechanisms",
        "BERT and Its Variants",
        "Named Entity Recognition (NER) and Sequence Labeling",
        "Text Classification with CNNs and RNNs",
        "Advanced NLP Techniques and Self-Supervised Learning",
        "Practical Applications of NLP",
      ],
    },
    genai: {
      title: "Generative AI",
      topics: [
        "Introduction to Generative AI and Models",
        "Overview of Generative Adversarial Networks (GANs)",
        "Applications of GANs in Image and Text Generation",
        "Introduction to Autoencoders and Variational Autoencoders (VAEs)",
        "Fundamentals of Large Language Models (LLMs)",
        "Transformer Architecture and Key Components",
        "Pre-trained Language Models and Their Applications",
        "Fine-Tuning and Customization of LLMs",
        "Evaluation Metrics and Ethical Considerations in Generative AI",
      ],
    },
  };

  // Icons for each curriculum section
  

  return (
    <Curriculum 
      title="Data Science"
      subtitle="Our comprehensive data science curriculum is designed to build your skills from foundational concepts to advanced techniques, ensuring you're industry-ready."
      programName="Data Science Program" 
      curriculumData={curriculumData}
    />
  );
};

export default DataScienceCurriculum;
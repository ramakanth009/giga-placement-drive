export const API_CONFIG = {
  BASE_URL: 'https://prescreening-tool.onrender.com',
  ENDPOINTS: {
    SUBMIT_TEST: '/prescreening_test',
    HEALTH_CHECK: '/health'
  }
};

// Request Payload Structure - Exact keywords from backend
export const REQUEST_STRUCTURE = {
  name: '',
  email: '',
  motivation_narrative: '',
  academic_performance: 0,
  education_gap: {
    has_gap: false,
    explanation: ''
  },
  achievements: {
    hackathons: 0,
    competitions: 0,
    certifications: 0,
    oss_contributions: 0
  },
  achievement_justification: '',
  tech_proficiency: {
    LMS: 0,
    Git: 0,
    JavaScript: 0,
    Python: 0,
    React: 0,
    'Node.js': 0,
    MongoDB: 0,
    AWS: 0,
    Docker: 0,
    Kubernetes: 0,
    TensorFlow: 0,
    GraphQL: 0
  },
  communication_mcq: {
    question_1: '',
    question_2: '',
    question_3: '',
    question_4: '',
    question_5: ''
  },
  learning_agility: {
    urls: [''],
    reflection: ''
  }
};

// Response Structure - Exact keywords from backend
export const RESPONSE_STRUCTURE = {
  candidate_id: '',
  status: '',
  evaluation: {
    decision: '', // 'Auto-Advance', 'Manual Review', 'Reject'
    scores: {
      motivation_narrative: 0,
      academic_performance: 0,
      tech_proficiency: 0,
      education_gap: 0,
      achievements: 0,
      achievement_justification: 0,
      communication_mcq: 0,
      learning_agility: 0
    },
    total_score: 0,
    red_flags: []
  },
  content: {
    title: '',
    message: '',
    recommendations: [],
    call_to_action: {
      primary: '',
      secondary: '',
      links: {}
    },
    next_steps: ''
  }
};

// API Methods
export const prescreeningAPI = {
  /**
   * Submit prescreening test data
   * @param {Object} formData - Form data matching REQUEST_STRUCTURE
   * @returns {Promise<Object>} API response
   */
  async submitTest(formData) {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SUBMIT_TEST}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data
      };
    } catch (error) {
      console.error('Error submitting prescreening test:', error);
      return {
        success: false,
        error: error.message || 'Network error occurred'
      };
    }
  },

  /**
   * Health check endpoint
   * @returns {Promise<Object>} Health status
   */
  async healthCheck() {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.HEALTH_CHECK}`);
      const data = await response.json();
      return {
        success: true,
        data
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
};

// Response Decision Types
export const DECISION_TYPES = {
  AUTO_ADVANCE: 'Auto-Advance',
  MANUAL_REVIEW: 'Manual Review',
  REJECT: 'Reject'
};

// Score Ranges
export const SCORE_RANGES = {
  EXCELLENT: { min: 86, max: 100 },
  GOOD: { min: 65, max: 85 },
  NEEDS_IMPROVEMENT: { min: 0, max: 64 }
};

// Validation Rules - Exact field names matching REQUEST_STRUCTURE
export const VALIDATION_RULES = {
  name: {
    required: true,
    minLength: 1
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  motivation_narrative: {
    required: true,
    minLength: 50
  },
  academic_performance: {
    required: true,
    min: 0,
    max: 100
  },
  achievement_justification: {
    minLength: 50 // only if filled
  },
  learning_agility_reflection: {
    minLength: 50 // only if filled
  }
};

export default prescreeningAPI;
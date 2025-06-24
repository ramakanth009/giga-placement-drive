// // ===============================
// // src/services/api.js - CENTRALIZED API WITH ALL ENDPOINTS
// // ===============================

// // BASE URLS CONFIGURATION
// const BASE_URLS = {
//   BASE_URL1: 'https://airesume.gigaversity.in',           // Contact API
//   BASE_URL2: 'https://prescreening-tool.onrender.com',   // Prescreening API  
// //   BASE_URL3: '/pay',                                       // Payment API (relative)               // Program Engagement API (placeholder)
// };

// // API ENDPOINTS MAPPED TO BASE URLS
// const API_ENDPOINTS = {
//   // Contact API (BASE_URL1)
//   CONTACT: {
//     BASE_URL: BASE_URLS.BASE_URL1,
//     SUBMIT: '/submit_contact'
//   },
  
//   // Prescreening API (BASE_URL2) 
//   PRESCREENING: {
//     BASE_URL: BASE_URLS.BASE_URL2,
//     SUBMIT_TEST: '/prescreening_test',
//     HEALTH_CHECK: '/health'
//   },
  
//   // Payment API (BASE_URL3)
//   PAYMENT: {
//     BASE_URL: BASE_URLS.BASE_URL3,
//     INITIATE: '',
//     CHECK_STATUS: '/check-status'
//   },

//   // Program Engagement API (BASE_URL2)
//   PROGRAM: {
//     BASE_URL: BASE_URLS.BASE_URL2,
//     LIKE: '/program/{program_id}/like',
//     COMMENT: '/program/{program_id}/comment',
//     STATS: '/program/{program_id}/stats',
//     ALL_STATS: '/programs/all-stats'
//   },

//   // Student Contact API (BASE_URL2)
//   STUDENT_CONTACT: {
//     BASE_URL: BASE_URLS.BASE_URL2,
//     SUBMIT: '/student_contact'
//   },

//   // Podcast Questions API (BASE_URL2) 
//   PODCAST: {
//     BASE_URL: BASE_URLS.BASE_URL2,
//     SUBMIT_QUESTION: '/podcast_question'
//   },

//   // Admin API (BASE_URL2)
//   ADMIN: {
//     BASE_URL: BASE_URLS.BASE_URL2,
//     PROGRAM_COMMENTS: '/admin/program/{program_id}/comments'
//   }
// };

// // HTTP CLIENT WITH RETRY LOGIC
// class ApiClient {
//   async request(url, options = {}) {
//     const config = {
//       timeout: 30000,
//       retries: 3,
//       headers: { 'Content-Type': 'application/json' },
//       ...options
//     };

//     for (let attempt = 0; attempt <= config.retries; attempt++) {
//       try {
//         const controller = new AbortController();
//         const timeoutId = setTimeout(() => controller.abort(), config.timeout);

//         const response = await fetch(url, {
//           ...config,
//           headers: { ...config.headers, ...options.headers },
//           signal: controller.signal
//         });

//         clearTimeout(timeoutId);

//         const data = await response.json().catch(() => ({}));

//         if (!response.ok) {
//           throw new ApiError(
//             data.message || data.error || `HTTP ${response.status}`,
//             response.status,
//             data
//           );
//         }

//         return { success: true, data, status: response.status };

//       } catch (error) {
//         if (attempt === config.retries || !this.shouldRetry(error)) {
//           throw error instanceof ApiError ? error : new ApiError(error.message || 'Network error');
//         }
//         await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, attempt)));
//       }
//     }
//   }

//   shouldRetry(error) {
//     return error.name === 'TypeError' || error.name === 'AbortError' || 
//            (error.status >= 500 && error.status < 600);
//   }

//   async get(url, config = {}) {
//     return this.request(url, { ...config, method: 'GET' });
//   }

//   async post(url, data, config = {}) {
//     return this.request(url, { 
//       ...config, 
//       method: 'POST', 
//       body: JSON.stringify(data) 
//     });
//   }
// }

// // CUSTOM ERROR CLASS
// class ApiError extends Error {
//   constructor(message, status = 0, data = null) {
//     super(message);
//     this.name = 'ApiError';
//     this.status = status;
//     this.data = data;
//   }

//   isClientError() { return this.status >= 400 && this.status < 500; }
//   isServerError() { return this.status >= 500 && this.status < 600; }
//   isNetworkError() { return this.status === 0; }
// }

// // CLIENT INSTANCE
// const client = new ApiClient();

// // HELPER FUNCTION TO BUILD FULL URL
// const buildUrl = (baseUrl, endpoint, pathParams = {}) => {
//   let url = baseUrl.startsWith('/') ? `${baseUrl}${endpoint}` : `${baseUrl}${endpoint}`;
  
//   // Replace path parameters
//   Object.keys(pathParams).forEach(key => {
//     url = url.replace(`{${key}}`, pathParams[key]);
//   });
  
//   return url;
// };

// // ===============================
// // CONTACT FORM API (BASE_URL1)
// // ===============================
// export const contactApi = {
//   async submitContact(formData) {
//     this.validateContactData(formData);
//     const url = buildUrl(API_ENDPOINTS.CONTACT.BASE_URL, API_ENDPOINTS.CONTACT.SUBMIT);
//     return client.post(url, formData);
//   },

//   validateContactData(data) {
//     const required = ['name', 'email', 'message'];
//     const missing = required.filter(field => !data[field]?.trim());
    
//     if (missing.length > 0) {
//       throw new ApiError(`Missing required fields: ${missing.join(', ')}`);
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
//       throw new ApiError('Invalid email format');
//     }

//     if (data.phone && !/^[\d\s\-\+\(\)]+$/.test(data.phone)) {
//       throw new ApiError('Invalid phone format');
//     }
//   }
// };

// // ===============================
// // PRESCREENING API (BASE_URL2)
// // ===============================
// export const prescreeningApi = {
//   async submitTest(formData) {
//     this.validateTestData(formData);
//     const url = buildUrl(API_ENDPOINTS.PRESCREENING.BASE_URL, API_ENDPOINTS.PRESCREENING.SUBMIT_TEST);
//     return client.post(url, formData);
//   },

//   async healthCheck() {
//     const url = buildUrl(API_ENDPOINTS.PRESCREENING.BASE_URL, API_ENDPOINTS.PRESCREENING.HEALTH_CHECK);
//     return client.get(url);
//   },

//   validateTestData(data) {
//     const required = ['name', 'email', 'motivation_narrative', 'academic_performance'];
//     const missing = required.filter(field => !data[field]);
    
//     if (missing.length > 0) {
//       throw new ApiError(`Missing required fields: ${missing.join(', ')}`);
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
//       throw new ApiError('Invalid email format');
//     }

//     if (data.academic_performance < 0 || data.academic_performance > 100) {
//       throw new ApiError('Academic performance must be between 0-100');
//     }

//     if (data.motivation_narrative.length < 50) {
//       throw new ApiError('Motivation narrative must be at least 50 characters');
//     }
//   }
// };

// // ===============================
// // PAYMENT API (BASE_URL3)
// // ===============================
// export const paymentApi = {
//   async initiatePayment(paymentData) {
//     this.validatePaymentData(paymentData);
//     const url = buildUrl(API_ENDPOINTS.PAYMENT.BASE_URL, API_ENDPOINTS.PAYMENT.INITIATE);
//     return client.post(url, paymentData);
//   },

//   async checkStatus(orderId) {
//     if (!orderId) {
//       throw new ApiError('Order ID is required');
//     }
//     const url = buildUrl(API_ENDPOINTS.PAYMENT.BASE_URL, `${API_ENDPOINTS.PAYMENT.CHECK_STATUS}/${orderId}`);
//     return client.get(url);
//   },

//   validatePaymentData(data) {
//     const required = ['amount', 'email', 'mobile'];
//     const missing = required.filter(field => !data[field]);
    
//     if (missing.length > 0) {
//       throw new ApiError(`Missing required fields: ${missing.join(', ')}`);
//     }

//     if (isNaN(data.amount) || data.amount <= 0) {
//       throw new ApiError('Amount must be positive number');
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
//       throw new ApiError('Invalid email format');
//     }

//     if (!/^[\d\s\-\+\(\)]+$/.test(data.mobile)) {
//       throw new ApiError('Invalid mobile format');
//     }
//   }
// };

// // ===============================
// // PROGRAM ENGAGEMENT API (BASE_URL2) 
// // ===============================
// export const programApi = {
//   async likeProgram(programId) {
//     this.validateProgramId(programId);
//     const url = buildUrl(API_ENDPOINTS.PROGRAM.BASE_URL, API_ENDPOINTS.PROGRAM.LIKE, { program_id: programId });
//     return client.post(url, {});
//   },

//   async submitComment(programId, comment) {
//     this.validateProgramId(programId);
//     this.validateComment(comment);
//     const url = buildUrl(API_ENDPOINTS.PROGRAM.BASE_URL, API_ENDPOINTS.PROGRAM.COMMENT, { program_id: programId });
//     return client.post(url, { comment });
//   },

//   // RED ITEMS - COMMENTED OUT AS NON-FUNCTIONAL
//   // async getProgramStats(programId) {
//   //   this.validateProgramId(programId);
//   //   const url = buildUrl(API_ENDPOINTS.PROGRAM.BASE_URL, API_ENDPOINTS.PROGRAM.STATS, { program_id: programId });
//   //   return client.get(url);
//   // },

//   // async getAllProgramStats() {
//   //   const url = buildUrl(API_ENDPOINTS.PROGRAM.BASE_URL, API_ENDPOINTS.PROGRAM.ALL_STATS);
//   //   return client.get(url);
//   // },

//   validateProgramId(programId) {
//     const validPrograms = ['fullstack', 'datascience', 'placement'];
//     if (!programId || !validPrograms.includes(programId)) {
//       throw new ApiError(`Invalid program ID. Must be one of: ${validPrograms.join(', ')}`);
//     }
//   },

//   validateComment(comment) {
//     if (!comment || !comment.trim()) {
//       throw new ApiError('Comment is required');
//     }
//     if (comment.trim().length < 5) {
//       throw new ApiError('Comment must be at least 5 characters long');
//     }
//     if (comment.trim().length > 500) {
//       throw new ApiError('Comment must be less than 500 characters');
//     }
//   }
// };

// // ===============================
// // STUDENT CONTACT API (BASE_URL2)
// // ===============================
// export const studentContactApi = {
//   async submitContact(contactData) {
//     this.validateContactData(contactData);
//     const url = buildUrl(API_ENDPOINTS.STUDENT_CONTACT.BASE_URL, API_ENDPOINTS.STUDENT_CONTACT.SUBMIT);
//     return client.post(url, contactData);
//   },

//   validateContactData(data) {
//     const required = ['name', 'contact_no', 'email', 'year_of_graduation', 'message'];
//     const missing = required.filter(field => !data[field]?.toString().trim());
    
//     if (missing.length > 0) {
//       throw new ApiError(`Missing required fields: ${missing.join(', ')}`);
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
//       throw new ApiError('Invalid email format');
//     }

//     if (!/^[6-9]\d{9}$/.test(data.contact_no.toString().replace(/[\s\-\+\(\)]/g, ''))) {
//       throw new ApiError('Invalid contact number format');
//     }

//     const currentYear = new Date().getFullYear();
//     const year = parseInt(data.year_of_graduation);
//     if (isNaN(year) || year < (currentYear - 10) || year > (currentYear + 5)) {
//       throw new ApiError('Invalid year of graduation');
//     }
//   }
// };

// // ===============================
// // PODCAST QUESTIONS API (BASE_URL2)
// // ===============================
// export const podcastApi = {
//   async submitQuestion(question) {
//     this.validateQuestion(question);
//     const url = buildUrl(API_ENDPOINTS.PODCAST.BASE_URL, API_ENDPOINTS.PODCAST.SUBMIT_QUESTION);
//     return client.post(url, { question });
//   },

//   validateQuestion(question) {
//     if (!question || !question.trim()) {
//       throw new ApiError('Question is required');
//     }
//     if (question.trim().length < 10) {
//       throw new ApiError('Question must be at least 10 characters long');
//     }
//     if (question.trim().length > 500) {
//       throw new ApiError('Question must be less than 500 characters');
//     }
//   }
// };

// // ===============================
// // ADMIN API (BASE_URL2) 
// // ===============================
// export const adminApi = {
//   async getProgramComments(programId) {
//     programApi.validateProgramId(programId);
//     const url = buildUrl(API_ENDPOINTS.ADMIN.BASE_URL, API_ENDPOINTS.ADMIN.PROGRAM_COMMENTS, { program_id: programId });
//     return client.get(url);
//   }
// };

// // ===============================
// // COMBINED API EXPORT
// // ===============================
// export const api = {
//   contact: contactApi,
//   prescreening: prescreeningApi,
//   payment: paymentApi,
//   program: programApi,
//   studentContact: studentContactApi,
//   podcast: podcastApi,
//   admin: adminApi
// };

// // ===============================
// // ERROR HANDLER
// // ===============================
// export const handleApiError = (error) => {
//   console.error('API Error:', error);

//   if (error instanceof ApiError) {
//     return {
//       type: 'API_ERROR',
//       message: error.message,
//       status: error.status,
//       isNetworkError: error.isNetworkError(),
//       isClientError: error.isClientError(),
//       isServerError: error.isServerError()
//     };
//   }

//   return {
//     type: 'UNKNOWN_ERROR',
//     message: 'An unexpected error occurred',
//     status: 0
//   };
// };

// // ===============================
// // DATA STRUCTURES & TYPES
// // ===============================
// export const STRUCTURES = {
//   CONTACT: {
//     name: '',
//     phone: '',
//     email: '',
//     subject: '',
//     message: ''
//   },

//   PRESCREENING: {
//     name: '',
//     email: '',
//     motivation_narrative: '',
//     academic_performance: 0,
//     education_gap: { has_gap: false, explanation: '' },
//     achievements: { hackathons: 0, competitions: 0, certifications: 0, oss_contributions: 0 },
//     achievement_justification: '',
//     tech_proficiency: {
//       LMS: 0, Git: 0, JavaScript: 0, Python: 0, React: 0, 'Node.js': 0,
//       MongoDB: 0, AWS: 0, Docker: 0, Kubernetes: 0, TensorFlow: 0, GraphQL: 0
//     },
//     communication_mcq: {
//       question_1: '', question_2: '', question_3: '', question_4: '', question_5: ''
//     },
//     learning_agility: { urls: [''], reflection: '' }
//   },

//   PAYMENT: {
//     amount: 0,
//     email: '',
//     mobile: ''
//   },

//   STUDENT_CONTACT: {
//     name: '',
//     contact_no: '',
//     email: '',
//     year_of_graduation: '',
//     message: ''
//   },

//   PODCAST_QUESTION: {
//     question: ''
//   },

//   PROGRAM_COMMENT: {
//     comment: ''
//   }
// };

// // RESPONSE TYPES
// export const RESPONSE_TYPES = {
//   PRESCREENING: {
//     candidate_id: '',
//     status: '',
//     evaluation: {
//       decision: '', // 'Auto-Advance', 'Manual Review', 'Reject'
//       scores: {
//         motivation_narrative: 0,
//         academic_performance: 0,
//         tech_proficiency: 0,
//         education_gap: 0,
//         achievements: 0,
//         achievement_justification: 0,
//         communication_mcq: 0,
//         learning_agility: 0
//       },
//       total_score: 0,
//       red_flags: []
//     },
//     content: {
//       title: '',
//       message: '',
//       recommendations: [],
//       call_to_action: {
//         primary: '',
//         secondary: '',
//         links: {}
//       },
//       next_steps: ''
//     }
//   },

//   PROGRAM_LIKE: {
//     likes_count: 0
//   },

//   PROGRAM_COMMENT: {
//     message: '',
//     comments_count: 0
//   },

//   STUDENT_CONTACT: {
//     message: '',
//     id: 0
//   },

//   PODCAST_QUESTION: {
//     message: '',
//     id: 0
//   }
// };

// // PROGRAM TYPES
// export const PROGRAM_TYPES = {
//   FULLSTACK: 'fullstack',
//   DATASCIENCE: 'datascience', 
//   PLACEMENT: 'placement'
// };

// // ===============================
// // LEGACY COMPATIBILITY (Optional)
// // ===============================
// // For backward compatibility with existing prescreeningAPI usage
// export const prescreeningAPI = {
//   submitTest: prescreeningApi.submitTest.bind(prescreeningApi),
//   healthCheck: prescreeningApi.healthCheck.bind(prescreeningApi)
// };

// // Export configurations for reference
// export const API_CONFIG = {
//   BASE_URLS,
//   API_ENDPOINTS
// };

// // ===============================
// // USAGE EXAMPLES
// // ===============================
// /*
// // Contact Form
// try {
//   const result = await api.contact.submitContact(formData);
//   console.log('Contact submitted:', result.data);
// } catch (error) {
//   const errorInfo = handleApiError(error);
//   alert(errorInfo.message);
// }

// // Student Contact Form  
// try {
//   const result = await api.studentContact.submitContact({
//     name: 'Jane Smith',
//     contact_no: '9876543210',
//     email: 'jane@example.com', 
//     year_of_graduation: '2025',
//     message: 'Interested in your programs'
//   });
//   console.log('Student contact submitted:', result.data);
// } catch (error) {
//   const errorInfo = handleApiError(error);
//   alert(errorInfo.message);
// }

// // Program Engagement
// try {
//   const result = await api.program.likeProgram('fullstack');
//   console.log('Program liked:', result.data);
// } catch (error) {
//   const errorInfo = handleApiError(error);
//   alert(errorInfo.message);
// }

// try {
//   const result = await api.program.submitComment('datascience', 'This program looks amazing!');
//   console.log('Comment submitted:', result.data);
// } catch (error) {
//   const errorInfo = handleApiError(error);
//   alert(errorInfo.message);
// }

// // Podcast Question
// try {
//   const result = await api.podcast.submitQuestion('What skills are most important for junior developers?');
//   console.log('Question submitted:', result.data);
// } catch (error) {
//   const errorInfo = handleApiError(error);
//   alert(errorInfo.message);
// }

// // Legacy usage (still works)
// try {
//   const result = await prescreeningAPI.submitTest(testData);
//   console.log('Legacy API call:', result.data);
// } catch (error) {
//   console.error('Error:', error);
// }
// */

// export { ApiError };
// export default api;
// ===============================
// src/services/api.js - CENTRALIZED API WITH ALL ENDPOINTS
// ===============================

// BASE URLS CONFIGURATION
const BASE_URLS = {
  BASE_URL1: 'https://airesume.gigaversity.in',           // Contact API
  BASE_URL2: 'https://prescreening-tool.onrender.com',   // Prescreening API  
  BASE_URL3: '/pay',                                       // Payment API (relative)
};

// API ENDPOINTS MAPPED TO BASE URLS
const API_ENDPOINTS = {
  // Contact API (BASE_URL1)
  CONTACT: {
    BASE_URL: BASE_URLS.BASE_URL1,
    SUBMIT: '/submit_contact'
  },
  
  // NEW: Popup Contact API (BASE_URL1)
  POPUP_CONTACT: {
    BASE_URL: BASE_URLS.BASE_URL1,
    SUBMIT: '/submit_vd_contact'
  },
  
  // Prescreening API (BASE_URL2) 
  PRESCREENING: {
    BASE_URL: BASE_URLS.BASE_URL2,
    SUBMIT_TEST: '/prescreening_test',
    HEALTH_CHECK: '/health'
  },
  
  // Payment API (BASE_URL3)
  PAYMENT: {
    BASE_URL: BASE_URLS.BASE_URL3,
    INITIATE: '',
    CHECK_STATUS: '/check-status'
  },

  // Program Engagement API (BASE_URL2)
  PROGRAM: {
    BASE_URL: BASE_URLS.BASE_URL2,
    LIKE: '/program/{program_id}/like',
    COMMENT: '/program/{program_id}/comment',
    STATS: '/program/{program_id}/stats',
    ALL_STATS: '/programs/all-stats'
  },

  // Student Contact API (BASE_URL2)
  STUDENT_CONTACT: {
    BASE_URL: BASE_URLS.BASE_URL2,
    SUBMIT: '/student_contact'
  },

  // Podcast Questions API (BASE_URL2) 
  PODCAST: {
    BASE_URL: BASE_URLS.BASE_URL2,
    SUBMIT_QUESTION: '/podcast_question'
  },

  // Admin API (BASE_URL2)
  ADMIN: {
    BASE_URL: BASE_URLS.BASE_URL2,
    PROGRAM_COMMENTS: '/admin/program/{program_id}/comments'
  }
};

// HTTP CLIENT WITH RETRY LOGIC
class ApiClient {
  async request(url, options = {}) {
    const config = {
      timeout: 30000,
      retries: 3,
      headers: { 'Content-Type': 'application/json' },
      ...options
    };

    for (let attempt = 0; attempt <= config.retries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), config.timeout);

        const response = await fetch(url, {
          ...config,
          headers: { ...config.headers, ...options.headers },
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new ApiError(
            data.message || data.error || `HTTP ${response.status}`,
            response.status,
            data
          );
        }

        return { success: true, data, status: response.status };

      } catch (error) {
        if (attempt === config.retries || !this.shouldRetry(error)) {
          throw error instanceof ApiError ? error : new ApiError(error.message || 'Network error');
        }
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, attempt)));
      }
    }
  }

  shouldRetry(error) {
    return error.name === 'TypeError' || error.name === 'AbortError' || 
           (error.status >= 500 && error.status < 600);
  }

  async get(url, config = {}) {
    return this.request(url, { ...config, method: 'GET' });
  }

  async post(url, data, config = {}) {
    return this.request(url, { 
      ...config, 
      method: 'POST', 
      body: JSON.stringify(data) 
    });
  }
}

// CUSTOM ERROR CLASS
class ApiError extends Error {
  constructor(message, status = 0, data = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }

  isClientError() { return this.status >= 400 && this.status < 500; }
  isServerError() { return this.status >= 500 && this.status < 600; }
  isNetworkError() { return this.status === 0; }
}

// CLIENT INSTANCE
const client = new ApiClient();

// HELPER FUNCTION TO BUILD FULL URL
const buildUrl = (baseUrl, endpoint, pathParams = {}) => {
  let url = baseUrl.startsWith('/') ? `${baseUrl}${endpoint}` : `${baseUrl}${endpoint}`;
  
  // Replace path parameters
  Object.keys(pathParams).forEach(key => {
    url = url.replace(`{${key}}`, pathParams[key]);
  });
  
  return url;
};

// ===============================
// CONTACT FORM API (BASE_URL1)
// ===============================
export const contactApi = {
  async submitContact(formData) {
    this.validateContactData(formData);
    const url = buildUrl(API_ENDPOINTS.CONTACT.BASE_URL, API_ENDPOINTS.CONTACT.SUBMIT);
    return client.post(url, formData);
  },

  validateContactData(data) {
    const required = ['name', 'email', 'message'];
    const missing = required.filter(field => !data[field]?.trim());
    
    if (missing.length > 0) {
      throw new ApiError(`Missing required fields: ${missing.join(', ')}`);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      throw new ApiError('Invalid email format');
    }

    if (data.phone && !/^[\d\s\-\+\(\)]+$/.test(data.phone)) {
      throw new ApiError('Invalid phone format');
    }
  }
};

// ===============================
// NEW: POPUP CONTACT API (BASE_URL1)
// ===============================
export const popupContactApi = {
  async submitContact(formData) {
    this.validateContactData(formData);
    const url = buildUrl(API_ENDPOINTS.POPUP_CONTACT.BASE_URL, API_ENDPOINTS.POPUP_CONTACT.SUBMIT);
    return client.post(url, formData);
  },

  validateContactData(data) {
    const required = ['full_name', 'email', 'chosen_field', 'phone_number'];
    const missing = required.filter(field => !data[field]?.toString().trim());
    
    if (missing.length > 0) {
      throw new ApiError(`Missing required fields: ${missing.join(', ')}`);
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      throw new ApiError('Invalid email format');
    }

    // Phone number validation (flexible format)
    if (!/^[\d\s\-\+\(\)]+$/.test(data.phone_number)) {
      throw new ApiError('Invalid phone number format');
    }

    // Validate chosen_field options
    const validFields = ['fullstack', 'datascience', 'Book a demo'];
    if (!validFields.includes(data.chosen_field)) {
      throw new ApiError(`Invalid chosen_field. Must be one of: ${validFields.join(', ')}`);
    }
  }
};

// ===============================
// PRESCREENING API (BASE_URL2)
// ===============================
export const prescreeningApi = {
  async submitTest(formData) {
    this.validateTestData(formData);
    const url = buildUrl(API_ENDPOINTS.PRESCREENING.BASE_URL, API_ENDPOINTS.PRESCREENING.SUBMIT_TEST);
    return client.post(url, formData);
  },

  async healthCheck() {
    const url = buildUrl(API_ENDPOINTS.PRESCREENING.BASE_URL, API_ENDPOINTS.PRESCREENING.HEALTH_CHECK);
    return client.get(url);
  },

  validateTestData(data) {
    const required = ['name', 'email', 'motivation_narrative', 'academic_performance'];
    const missing = required.filter(field => !data[field]);
    
    if (missing.length > 0) {
      throw new ApiError(`Missing required fields: ${missing.join(', ')}`);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      throw new ApiError('Invalid email format');
    }

    if (data.academic_performance < 0 || data.academic_performance > 100) {
      throw new ApiError('Academic performance must be between 0-100');
    }

    if (data.motivation_narrative.length < 50) {
      throw new ApiError('Motivation narrative must be at least 50 characters');
    }
  }
};

// ===============================
// PAYMENT API (BASE_URL3)
// ===============================
export const paymentApi = {
  async initiatePayment(paymentData) {
    this.validatePaymentData(paymentData);
    const url = buildUrl(API_ENDPOINTS.PAYMENT.BASE_URL, API_ENDPOINTS.PAYMENT.INITIATE);
    return client.post(url, paymentData);
  },

  async checkStatus(orderId) {
    if (!orderId) {
      throw new ApiError('Order ID is required');
    }
    const url = buildUrl(API_ENDPOINTS.PAYMENT.BASE_URL, `${API_ENDPOINTS.PAYMENT.CHECK_STATUS}/${orderId}`);
    return client.get(url);
  },

  validatePaymentData(data) {
    const required = ['amount', 'email', 'mobile'];
    const missing = required.filter(field => !data[field]);
    
    if (missing.length > 0) {
      throw new ApiError(`Missing required fields: ${missing.join(', ')}`);
    }

    if (isNaN(data.amount) || data.amount <= 0) {
      throw new ApiError('Amount must be positive number');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      throw new ApiError('Invalid email format');
    }

    if (!/^[\d\s\-\+\(\)]+$/.test(data.mobile)) {
      throw new ApiError('Invalid mobile format');
    }
  }
};

// ===============================
// PROGRAM ENGAGEMENT API (BASE_URL2) 
// ===============================
export const programApi = {
  async likeProgram(programId) {
    this.validateProgramId(programId);
    const url = buildUrl(API_ENDPOINTS.PROGRAM.BASE_URL, API_ENDPOINTS.PROGRAM.LIKE, { program_id: programId });
    return client.post(url, {});
  },

  async submitComment(programId, comment) {
    this.validateProgramId(programId);
    this.validateComment(comment);
    const url = buildUrl(API_ENDPOINTS.PROGRAM.BASE_URL, API_ENDPOINTS.PROGRAM.COMMENT, { program_id: programId });
    return client.post(url, { comment });
  },

  // RED ITEMS - COMMENTED OUT AS NON-FUNCTIONAL
  // async getProgramStats(programId) {
  //   this.validateProgramId(programId);
  //   const url = buildUrl(API_ENDPOINTS.PROGRAM.BASE_URL, API_ENDPOINTS.PROGRAM.STATS, { program_id: programId });
  //   return client.get(url);
  // },

  // async getAllProgramStats() {
  //   const url = buildUrl(API_ENDPOINTS.PROGRAM.BASE_URL, API_ENDPOINTS.PROGRAM.ALL_STATS);
  //   return client.get(url);
  // },

  validateProgramId(programId) {
    const validPrograms = ['fullstack', 'datascience', 'placement'];
    if (!programId || !validPrograms.includes(programId)) {
      throw new ApiError(`Invalid program ID. Must be one of: ${validPrograms.join(', ')}`);
    }
  },

  validateComment(comment) {
    if (!comment || !comment.trim()) {
      throw new ApiError('Comment is required');
    }
    if (comment.trim().length < 5) {
      throw new ApiError('Comment must be at least 5 characters long');
    }
    if (comment.trim().length > 500) {
      throw new ApiError('Comment must be less than 500 characters');
    }
  }
};

// ===============================
// STUDENT CONTACT API (BASE_URL2)
// ===============================
export const studentContactApi = {
  async submitContact(contactData) {
    this.validateContactData(contactData);
    const url = buildUrl(API_ENDPOINTS.STUDENT_CONTACT.BASE_URL, API_ENDPOINTS.STUDENT_CONTACT.SUBMIT);
    return client.post(url, contactData);
  },

  validateContactData(data) {
    const required = ['name', 'contact_no', 'email', 'year_of_graduation', 'message'];
    const missing = required.filter(field => !data[field]?.toString().trim());
    
    if (missing.length > 0) {
      throw new ApiError(`Missing required fields: ${missing.join(', ')}`);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      throw new ApiError('Invalid email format');
    }

    if (!/^[6-9]\d{9}$/.test(data.contact_no.toString().replace(/[\s\-\+\(\)]/g, ''))) {
      throw new ApiError('Invalid contact number format');
    }

    const currentYear = new Date().getFullYear();
    const year = parseInt(data.year_of_graduation);
    if (isNaN(year) || year < (currentYear - 10) || year > (currentYear + 5)) {
      throw new ApiError('Invalid year of graduation');
    }
  }
};

// ===============================
// PODCAST QUESTIONS API (BASE_URL2)
// ===============================
export const podcastApi = {
  async submitQuestion(question) {
    this.validateQuestion(question);
    const url = buildUrl(API_ENDPOINTS.PODCAST.BASE_URL, API_ENDPOINTS.PODCAST.SUBMIT_QUESTION);
    return client.post(url, { question });
  },

  validateQuestion(question) {
    if (!question || !question.trim()) {
      throw new ApiError('Question is required');
    }
    if (question.trim().length < 10) {
      throw new ApiError('Question must be at least 10 characters long');
    }
    if (question.trim().length > 500) {
      throw new ApiError('Question must be less than 500 characters');
    }
  }
};

// ===============================
// ADMIN API (BASE_URL2) 
// ===============================
export const adminApi = {
  async getProgramComments(programId) {
    programApi.validateProgramId(programId);
    const url = buildUrl(API_ENDPOINTS.ADMIN.BASE_URL, API_ENDPOINTS.ADMIN.PROGRAM_COMMENTS, { program_id: programId });
    return client.get(url);
  }
};

// ===============================
// COMBINED API EXPORT
// ===============================
export const api = {
  contact: contactApi,
  popupContact: popupContactApi,  // NEW
  prescreening: prescreeningApi,
  payment: paymentApi,
  program: programApi,
  studentContact: studentContactApi,
  podcast: podcastApi,
  admin: adminApi
};

// ===============================
// ERROR HANDLER
// ===============================
export const handleApiError = (error) => {
  console.error('API Error:', error);

  if (error instanceof ApiError) {
    return {
      type: 'API_ERROR',
      message: error.message,
      status: error.status,
      isNetworkError: error.isNetworkError(),
      isClientError: error.isClientError(),
      isServerError: error.isServerError()
    };
  }

  return {
    type: 'UNKNOWN_ERROR',
    message: 'An unexpected error occurred',
    status: 0
  };
};

// ===============================
// DATA STRUCTURES & TYPES
// ===============================
export const STRUCTURES = {
  CONTACT: {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  },

  // NEW: Popup Contact Structure
  POPUP_CONTACT: {
    full_name: '',
    email: '',
    chosen_field: '', // 'fullstack', 'datascience', or 'Book a demo'
    phone_number: ''
  },

  PRESCREENING: {
    name: '',
    email: '',
    motivation_narrative: '',
    academic_performance: 0,
    education_gap: { has_gap: false, explanation: '' },
    achievements: { hackathons: 0, competitions: 0, certifications: 0, oss_contributions: 0 },
    achievement_justification: '',
    tech_proficiency: {
      LMS: 0, Git: 0, JavaScript: 0, Python: 0, React: 0, 'Node.js': 0,
      MongoDB: 0, AWS: 0, Docker: 0, Kubernetes: 0, TensorFlow: 0, GraphQL: 0
    },
    communication_mcq: {
      question_1: '', question_2: '', question_3: '', question_4: '', question_5: ''
    },
    learning_agility: { urls: [''], reflection: '' }
  },

  PAYMENT: {
    amount: 0,
    email: '',
    mobile: ''
  },

  STUDENT_CONTACT: {
    name: '',
    contact_no: '',
    email: '',
    year_of_graduation: '',
    message: ''
  },

  PODCAST_QUESTION: {
    question: ''
  },

  PROGRAM_COMMENT: {
    comment: ''
  }
};

// RESPONSE TYPES
export const RESPONSE_TYPES = {
  PRESCREENING: {
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
  },

  PROGRAM_LIKE: {
    likes_count: 0
  },

  PROGRAM_COMMENT: {
    message: '',
    comments_count: 0
  },

  STUDENT_CONTACT: {
    message: '',
    id: 0
  },

  PODCAST_QUESTION: {
    message: '',
    id: 0
  }
};

// PROGRAM TYPES
export const PROGRAM_TYPES = {
  FULLSTACK: 'fullstack',
  DATASCIENCE: 'datascience', 
  PLACEMENT: 'placement'
};

// ===============================
// LEGACY COMPATIBILITY (Optional)
// ===============================
// For backward compatibility with existing prescreeningAPI usage
export const prescreeningAPI = {
  submitTest: prescreeningApi.submitTest.bind(prescreeningApi),
  healthCheck: prescreeningApi.healthCheck.bind(prescreeningApi)
};

// Export configurations for reference
export const API_CONFIG = {
  BASE_URLS,
  API_ENDPOINTS
};

// ===============================
// USAGE EXAMPLES
// ===============================
/*
// Contact Form
try {
  const result = await api.contact.submitContact(formData);
  console.log('Contact submitted:', result.data);
} catch (error) {
  const errorInfo = handleApiError(error);
  alert(errorInfo.message);
}

// NEW: Popup Contact Forms
try {
  // Form 1: Dropdown selection
  const result = await api.popupContact.submitContact({
    full_name: 'John Doe',
    email: 'john.doe@example.com',
    chosen_field: 'fullstack', // or 'datascience'
    phone_number: '+1234567890'
  });
  console.log('Popup contact submitted:', result.data);
} catch (error) {
  const errorInfo = handleApiError(error);
  alert(errorInfo.message);
}

// Student Contact Form  
try {
  const result = await api.studentContact.submitContact({
    name: 'Jane Smith',
    contact_no: '9876543210',
    email: 'jane@example.com', 
    year_of_graduation: '2025',
    message: 'Interested in your programs'
  });
  console.log('Student contact submitted:', result.data);
} catch (error) {
  const errorInfo = handleApiError(error);
  alert(errorInfo.message);
}

// Program Engagement
try {
  const result = await api.program.likeProgram('fullstack');
  console.log('Program liked:', result.data);
} catch (error) {
  const errorInfo = handleApiError(error);
  alert(errorInfo.message);
}

try {
  const result = await api.program.submitComment('datascience', 'This program looks amazing!');
  console.log('Comment submitted:', result.data);
} catch (error) {
  const errorInfo = handleApiError(error);
  alert(errorInfo.message);
}

// Podcast Question
try {
  const result = await api.podcast.submitQuestion('What skills are most important for junior developers?');
  console.log('Question submitted:', result.data);
} catch (error) {
  const errorInfo = handleApiError(error);
  alert(errorInfo.message);
}

// Legacy usage (still works)
try {
  const result = await prescreeningAPI.submitTest(testData);
  console.log('Legacy API call:', result.data);
} catch (error) {
  console.error('Error:', error);
}
*/

export { ApiError };
export default api;
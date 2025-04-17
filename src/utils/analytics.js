// src/utils/analytics.js

/**
 * Comprehensive analytics tracking utilities for Gigaversity website
 * Handles event tracking, page views, and user journey analytics
 */

// Initialize data layer if it doesn't exist
window.dataLayer = window.dataLayer || [];

/**
 * Push event to Google Tag Manager dataLayer
 * @param {Object} data - The data to push to dataLayer
 */
export const pushToDataLayer = (data) => {
  window.dataLayer.push(data);
};

/**
 * Track page view event
 * @param {string} pagePath - The path of the page
 * @param {string} pageTitle - The title of the page
 */
export const trackPageView = (pagePath, pageTitle) => {
  pushToDataLayer({
    event: 'page_view',
    page: {
      path: pagePath,
      title: pageTitle,
    },
  });
};

/**
 * Track button click event
 * @param {string} buttonName - The name/identifier of the button
 * @param {string} location - The location/section of the button
 * @param {string} destinationUrl - The URL where the button leads to (optional)
 */
export const trackButtonClick = (buttonName, location, destinationUrl = null) => {
  pushToDataLayer({
    event: 'button_click',
    button_name: buttonName,
    button_location: location,
    destination_url: destinationUrl,
  });
};

/**
 * Track form submission event
 * @param {string} formName - The name/identifier of the form
 * @param {boolean} success - Whether the submission was successful
 * @param {string} error - Error message if submission failed (optional)
 */
export const trackFormSubmission = (formName, success, error = null) => {
  pushToDataLayer({
    event: 'form_submission',
    form_name: formName,
    submission_success: success,
    error_message: error,
  });
};

/**
 * Track program view or interaction
 * @param {string} programName - The name of the program (e.g., "Full Stack Development")
 * @param {string} interactionType - The type of interaction (e.g., "view", "click", "apply")
 */
export const trackProgramInteraction = (programName, interactionType) => {
  pushToDataLayer({
    event: 'program_interaction',
    program_name: programName,
    interaction_type: interactionType,
  });
};

/**
 * Track user registration steps
 * @param {string} step - The step name or number in the registration process
 * @param {boolean} complete - Whether the step was completed successfully
 */
export const trackRegistrationStep = (step, complete) => {
  pushToDataLayer({
    event: 'registration_step',
    step_name: step,
    step_complete: complete,
  });
};

/**
 * Track enrollment completion
 * @param {string} programName - The program the user enrolled in
 * @param {string} price - The price of the program
 * @param {string} couponCode - Coupon code if used (optional)
 */
export const trackEnrollment = (programName, price, couponCode = null) => {
  pushToDataLayer({
    event: 'enrollment_complete',
    program_name: programName,
    price: price,
    coupon_code: couponCode,
    transaction_id: generateTransactionId(),
  });
};

/**
 * Helper function to generate a unique transaction ID
 * @returns {string} A unique transaction ID
 */
const generateTransactionId = () => {
  return 'T-' + Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

/**
 * Track social media link clicks
 * @param {string} platform - The social media platform clicked
 */
export const trackSocialClick = (platform) => {
  pushToDataLayer({
    event: 'social_click',
    platform: platform,
  });
};

/**
 * Track specific feature clicks or views
 * @param {string} featureName - The name of the feature
 * @param {string} action - The action taken (e.g., "view", "interact")
 */
export const trackFeatureInteraction = (featureName, action) => {
  pushToDataLayer({
    event: 'feature_interaction',
    feature_name: featureName,
    action: action,
  });
};

/**
 * Track scroll depth on important pages
 * @param {number} depth - The scroll depth percentage
 * @param {string} pagePath - The path of the page
 */
export const trackScrollDepth = (depth, pagePath) => {
  // Only track at specific milestones to avoid too many events
  if ([25, 50, 75, 90].includes(depth)) {
    pushToDataLayer({
      event: 'scroll_milestone',
      scroll_depth: depth,
      page_path: pagePath,
    });
  }
};

/**
 * Track time spent on page before leaving
 * @param {string} pagePath - The path of the page
 * @param {number} seconds - Seconds spent on the page
 */
export const trackTimeOnPage = (pagePath, seconds) => {
  pushToDataLayer({
    event: 'time_on_page',
    page_path: pagePath,
    time_seconds: seconds,
  });
};
// src/services/apiService.js
const API_BASE_URL = '/pay';

/**
 * Initiates a payment transaction
 * @param {Object} paymentData - Payment details
 * @param {string|number} paymentData.amount - Amount to charge
 * @param {string} paymentData.email - Customer email
 * @param {string} paymentData.mobile - Customer phone number
 * @returns {Promise<Object>} Response containing payment URL and order ID
 */
export const initiatePayment = async (paymentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentData)
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || data.message || 'Payment initialization failed');
    }
    
    return data;
  } catch (error) {
    console.error('Payment initiation error:', error);
    throw error;
  }
};

/**
 * Checks the status of a payment
 * @param {string} merchantOrderId - Order ID to check
 * @returns {Promise<Object>} Response containing payment status details
 */
export const checkPaymentStatus = async (merchantOrderId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/check-status/${merchantOrderId}`);
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || data.message || 'Failed to check payment status');
    }
    
    return data;
  } catch (error) {
    console.error('Payment status check error:', error);
    throw error;
  }
};
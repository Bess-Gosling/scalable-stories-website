
// This file contains utilities for interacting with Google Sheets API
// with fallback to local database storage when API is unavailable
import { config } from '@/config';
import { addSubscriber } from './localDatabase';

interface SheetResponse {
  success: boolean;
  message: string;
}

/**
 * Submits an email to a Google Sheet using the Google Sheets API
 * Falls back to local database storage if API is unavailable
 */
export const submitEmailToSheet = async (email: string): Promise<SheetResponse> => {
  // Get the URL from configuration
  const SHEET_API_URL = config.googleSheetsApiUrl;
  
  if (!SHEET_API_URL || SHEET_API_URL === "YOUR_GOOGLE_APPS_SCRIPT_DEPLOY_URL") {
    console.warn("Google Sheets API URL not configured. Using local database fallback.");
    return addSubscriber(email);
  }
  
  try {
    const response = await fetch(SHEET_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email,
        timestamp: new Date().toISOString(),
        source: window.location.href
      }),
      mode: 'no-cors' // This might be needed for cross-origin requests
    });
    
    // When using no-cors, we can't actually check the response status
    // So we'll assume it worked if no errors were thrown
    return { success: true, message: 'Email subscribed successfully' };
  } catch (error) {
    console.error('Error submitting email to sheet. Using local database fallback:', error);
    // Fallback to local database
    return addSubscriber(email);
  }
};

// Export the database functions for admin access if needed
export { getAllSubscribers } from './localDatabase';

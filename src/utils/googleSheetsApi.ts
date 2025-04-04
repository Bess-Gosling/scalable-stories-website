
// This file contains utilities for interacting with Google Sheets API
// using a public access approach (client-side only)
import { config } from '@/config';

interface SheetResponse {
  success: boolean;
  message: string;
}

/**
 * Submits an email to a Google Sheet using the Google Sheets API
 * This implementation uses a publicly deployed Google Apps Script Web App URL
 * that acts as a proxy to write to the Google Sheet
 */
export const submitEmailToSheet = async (email: string): Promise<SheetResponse> => {
  // Get the URL from configuration
  const SHEET_API_URL = config.googleSheetsApiUrl;
  
  if (!SHEET_API_URL || SHEET_API_URL === "YOUR_GOOGLE_APPS_SCRIPT_DEPLOY_URL") {
    console.warn("Google Sheets API URL not configured. Please set it in config.ts");
    return { success: false, message: 'Google Sheets API not configured' };
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
    console.error('Error submitting email to sheet:', error);
    return { success: false, message: 'Failed to subscribe email' };
  }
};

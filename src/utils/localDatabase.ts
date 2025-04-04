
/**
 * Simple local database implementation using IndexedDB
 * This serves as a fallback when the Google Sheets API is unavailable
 */

interface Subscriber {
  id?: number;
  email: string;
  timestamp: string;
  source: string;
}

const DB_NAME = 'scalable_stories_db';
const DB_VERSION = 1;
const STORE_NAME = 'subscribers';

/**
 * Initialize the database
 */
export const initDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    
    request.onerror = (event) => {
      console.error('Error opening database:', event);
      reject(new Error('Could not open database'));
    };
    
    request.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      resolve(db);
    };
    
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      
      // Create an object store for this database
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
        store.createIndex('email', 'email', { unique: true });
        store.createIndex('timestamp', 'timestamp', { unique: false });
      }
    };
  });
};

/**
 * Add a new subscriber to the database
 */
export const addSubscriber = async (email: string): Promise<{ success: boolean; message: string }> => {
  try {
    const db = await initDB();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      
      const subscriber: Subscriber = {
        email,
        timestamp: new Date().toISOString(),
        source: window.location.href
      };
      
      const request = store.add(subscriber);
      
      request.onsuccess = () => {
        resolve({ success: true, message: 'Email saved to local database' });
      };
      
      request.onerror = (event) => {
        // Handle the case where email already exists
        if ((event.target as IDBRequest).error?.name === 'ConstraintError') {
          resolve({ success: false, message: 'Email already exists' });
        } else {
          console.error('Error adding subscriber:', event);
          resolve({ success: false, message: 'Failed to save email' });
        }
      };
      
      transaction.oncomplete = () => {
        db.close();
      };
    });
  } catch (error) {
    console.error('Database error:', error);
    return { success: false, message: 'Database error occurred' };
  }
};

/**
 * Get all subscribers from the database
 */
export const getAllSubscribers = async (): Promise<Subscriber[]> => {
  try {
    const db = await initDB();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();
      
      request.onsuccess = () => {
        resolve(request.result);
      };
      
      request.onerror = (event) => {
        console.error('Error getting subscribers:', event);
        reject(new Error('Failed to get subscribers'));
      };
      
      transaction.oncomplete = () => {
        db.close();
      };
    });
  } catch (error) {
    console.error('Database error:', error);
    return [];
  }
};

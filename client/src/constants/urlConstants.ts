const FIREBASE_REQUEST_URL = import.meta.env.VITE_FIREBASE_REQUEST_URL;
const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

export const AUTH_URLS = {
  LOGIN_URL: `${FIREBASE_REQUEST_URL}signInWithPassword/?key=${FIREBASE_API_KEY}`,
};

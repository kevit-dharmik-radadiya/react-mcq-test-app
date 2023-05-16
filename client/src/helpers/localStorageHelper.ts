/**
 * These are three functions that allow for saving, retrieving, and clearing an authentication token
 * from local storage in TypeScript.
 * @param {string} authToken - a string that represents an authentication token.
 */
export const saveAuthTokenToLocalStorage = (authToken: string) => {
  localStorage.setItem('authToken', authToken);
};

export const getAuthTokenFromLocalStorage = () => {
  return localStorage.getItem('authToken');
};

export const clearAuthTokenFromLocalStorage = () => {
  localStorage.removeItem('authToken');
};

/**
 * These are three functions written in TypeScript that allow for saving, retrieving, and clearing a
 * user ID from local storage.
 * @param {string} id - string - this is the unique identifier for the user that will be saved to local
 * storage.
 */
export const saveUserIDToLocalStorage = (id: string) => {
  localStorage.setItem('userID', id);
};

export const getUserIDFromLocalStorage = () => {
  return localStorage.getItem('userID');
};

export const clearUserIDFromLocalStorage = () => {
  localStorage.removeItem('userID');
};

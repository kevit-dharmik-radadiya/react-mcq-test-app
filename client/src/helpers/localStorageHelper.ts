/**
 * These functions allow for saving, retrieving, and clearing an authentication token from local
 * storage in TypeScript.
 * @param {string} authToken - a string representing an authentication token that is used to
 * authenticate a user's session.
 */
export const saveAuthTokenToLocalStorage = (authToken: string): void => {
  localStorage.setItem('authToken', authToken);
};

export const getAuthTokenFromLocalStorage = (): string | null => {
  return localStorage.getItem('authToken');
};

export const clearAuthTokenFromLocalStorage = (): void => {
  localStorage.removeItem('authToken');
};

/**
 * These are three functions written in TypeScript that allow for saving, retrieving, and clearing a
 * user ID from local storage.
 * @param {string} id - string - this is the unique identifier for the user that will be saved to local
 * storage.
 */
export const saveUserIDToLocalStorage = (id: string): void => {
  localStorage.setItem('userID', id);
};

export const getUserIDFromLocalStorage = (): string | null => {
  return localStorage.getItem('userID');
};

export const clearUserIDFromLocalStorage = (): void => {
  localStorage.removeItem('userID');
};

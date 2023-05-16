export const saveAuthTokenToLocalStorage = (authToken: string) => {
  localStorage.setItem('authToken', authToken);
};

export const getAuthTokenFromLocalStorage = () => {
  return localStorage.getItem('authToken');
};

export const clearAuthTokenFromLocalStorage = () => {
  localStorage.removeItem('authToken');
};

export const saveUserIDToLocalStorage = (id: string) => {
  localStorage.setItem('userID', id);
};

export const getUserIDFromLocalStorage = () => {
  return localStorage.getItem('userID');
};

export const clearUserIDFromLocalStorage = () => {
  localStorage.removeItem('userID');
};

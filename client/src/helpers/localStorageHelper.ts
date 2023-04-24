export const saveAuthTokenToLocalStorage = (authToken: string) => {
  localStorage.setItem("authToken", authToken);
};

export const getAuthTokenFromLocalStorage = () => {
  return localStorage.getItem("authToken");
};

export const clearAuthTokenFromLocalStorage = () => {
  localStorage.removeItem("authToken");
};
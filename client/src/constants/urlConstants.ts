const REQUEST_URL = import.meta.env.VITE_REQUEST_URL;

export const AUTH_URLS = {
  LOGIN_URL: `${REQUEST_URL}auth/login`,
  REGISTER_URL: `${REQUEST_URL}auth/signup`,
};

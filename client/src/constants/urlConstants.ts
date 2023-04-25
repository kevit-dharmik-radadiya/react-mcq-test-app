const BASE_URL = import.meta.env.VITE_BASE_URL;

export const AUTH_URLS = {
  LOGIN_URL: `${BASE_URL}auth/login`,
  LOGOUT_URL: `${BASE_URL}auth/logout`,
  ON_REGISTER_URL: `${BASE_URL}auth/sign-up`,
  FORGOT_PASSWORD_URL: `${BASE_URL}auth/forget-password`,
};

import { AUTH_URLS } from '../constants/urlConstants';
// eslint-disable-next-line import/no-cycle
import ApiService from './apiService';

const authApiServices = {
  loginUser: (data: { email: string; password: string }) =>
    ApiService.postData(AUTH_URLS.LOGIN_URL, data),
  registerUser: (data: { email: string; password: string }) =>
    ApiService.postData(AUTH_URLS.REGISTER_URL, data),
  forgotPassword: (data: { email: string }) =>
    ApiService.postData(AUTH_URLS.FORGOT_PASSWORD_URL, data),
  logoutUser: () => ApiService.deleteData('empty'),
};
export default authApiServices;

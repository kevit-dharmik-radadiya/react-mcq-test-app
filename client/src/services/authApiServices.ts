import { AUTH_URLS } from "../constants/urlConstants";
import ApiService from "./apiService";

const authApiServices = {
  loginUser: (data: { email: string; password: string }) =>
    ApiService.postData(AUTH_URLS.LOGIN_URL, data),
};
export default authApiServices;
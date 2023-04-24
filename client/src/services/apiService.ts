/* eslint-disable no-param-reassign */
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getAuthTokenFromLocalStorage } from "../helpers/localStorageHelper";
import authApiServices from "./authApiServices";
import { store } from "../store/redux/store";

const instance = axios.create({
  timeout: 10000,
  params: {}, // do not remove this, its added to add params later in the config
});

// Store requests
const sourceRequest: Record<string, any> = {};

// Add a request interceptor
instance.interceptors.request.use(
  async (request: any) => {
    const token = getAuthTokenFromLocalStorage();

    if (token) {
      request.headers.common.authorization = token;
    }

    // If the application exists cancel
    if (sourceRequest[request.url]) {
      sourceRequest[request.url].cancel("Previous same call cancellation");
    }

    // Store or update application token
    const axiosSource = axios.CancelToken.source();
    sourceRequest[request.url] = { cancel: axiosSource.cancel };
    request.cancelToken = axiosSource.token;

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const ApiService = {
  request(config = {}) {
    return instance.request(config);
  },
  getData(url: string, config = {}) {
    return instance.get(url, config);
  },
  postData(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any> | undefined
  ) {
    return instance.post(url, data, config);
  },
  putData(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any> | undefined
  ) {
    return instance.put(url, data, config);
  },
  patchData(url: string, data?: any) {
    return instance.patch(url, data);
  },
  deleteData(url: string, config = {}) {
    return instance.delete(url, config);
  },
};

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const resType = error?.request?.responseType;
    const statusCode = error?.response?.status ?? 0;
    if (resType === "blob") {
      const err = await error?.response?.data?.text();
      return Promise.reject(JSON.parse(err));
    }
    switch (statusCode) {
      case 401:
        // try {
        //   const response: any = await authApiServices.logoutUser();
        //   if (response.status === 200) {
        //     store.dispatch({
        //       type: LOGIN_REDUX_CONSTANTS.LOGOUT_USER_ACTION,
        //     });
        //     store.dispatch({
        //       type: AUTH_REDUX_CONSTANTS.CHANGE_AUTH_STATUS,
        //       status: false,
        //     });
        //   }
        // } catch (e) {
        //   if (axios.isAxiosError(e)) {
        //     store.dispatch({
        //       type: LOGIN_REDUX_CONSTANTS.LOGOUT_USER_ACTION,
        //     });
        //     if (e.message !== "Previous same call cancellation") {
        //       errorNotification(
        //         "For security purposes you have been logged out, you need to re login"
        //       );
        //     }
        //     return false;
        //   }
        //   return false;
        // }
        break;
      case 403:
        window.location.href = "/forbidden-access";
        return false;

      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default ApiService;

import { USER_URLS } from '../constants/urlConstants';
import ApiService from './apiService';

const userApiServices = {
  getUserDetails: (id: string) =>
    ApiService.getData(`${USER_URLS.GET_DETAILS}/${id}`),
};
export default userApiServices;

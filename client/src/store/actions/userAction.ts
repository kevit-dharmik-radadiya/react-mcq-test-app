import { Dispatch } from '@reduxjs/toolkit';
import displayErrors from '../../helpers/errorNotifyHelper';
import userApiServices from '../../services/userApiService';
import { setUserDetails } from '../reducers/userSlice';

type UserProps = {
  id: string;
};

const getUserDetails = ({ id }: UserProps) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await userApiServices.getUserDetails(id);
      if (response?.data?.success === true) {
        dispatch(setUserDetails(response?.data?.data));
        return true;
      }
      return false;
    } catch (e) {
      displayErrors(e);
      return false;
    }
  };
};

export default getUserDetails;

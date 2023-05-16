import { NavigateFunction } from 'react-router-dom';
import { Dispatch } from '@reduxjs/toolkit';
import displayErrors from '../../helpers/errorNotifyHelper';
import authApiServices from '../../services/authApiServices';
import {
  saveAuthTokenToLocalStorage,
  saveUserIDToLocalStorage,
} from '../../helpers/localStorageHelper';
import { successNotification } from '../../helpers/notifyHelper';
import ROUTE_CONSTANTS_VARIABLE from '../../constants/routeConstants';
import { login } from '../reducers/authSlice';
import { resetAuthStates } from '../reducers/authValidateSlice';

type LoginUserProps = {
  email: string;
  password: string;
};

export const loginUser = (
  { email, password }: LoginUserProps,
  navigate: NavigateFunction
) => {
  return async (dispatch: Dispatch) => {
    try {
      const data = {
        email: email.toLowerCase().trim(),
        password: password.trim(),
      };
      const response = await authApiServices.loginUser(data);
      const responseData = response?.data;
      if (responseData?.success === true) {
        const { token, _id: id } = responseData.data;
        saveAuthTokenToLocalStorage(token);
        saveUserIDToLocalStorage(id);
        successNotification(responseData?.message ?? 'Login successfully');
        dispatch(login(true));
        navigate(ROUTE_CONSTANTS_VARIABLE.DASHBOARD);
        return true;
      }
      return false;
    } catch (e) {
      displayErrors(e);
      return false;
    }
  };
};

type RegisterUserProps = {
  email: string;
  password: string;
  username: string;
};

export const registerUser = (
  { email, password, username }: RegisterUserProps,
  navigate: NavigateFunction
) => {
  return async () => {
    try {
      const data = {
        email: email.toLowerCase().trim(),
        password: password.trim(),
        userName: username.trim(),
      };
      const response = await authApiServices.registerUser(data);
      if (response?.data?.success === true) {
        successNotification(
          response?.data?.message ?? 'Registration successfully'
        );
        navigate(ROUTE_CONSTANTS_VARIABLE.LOGIN);
        return true;
      }
      return false;
    } catch (e) {
      displayErrors(e);
      return false;
    }
  };
};

export const forgotPassword = async (email: string, callBack: () => void) => {
  try {
    const data = { email };
    const response = await authApiServices.forgotPassword(data);

    if (response?.status === 200) {
      successNotification(response?.data?.message);
      callBack();
      return true;
    }
    return false;
  } catch (e) {
    displayErrors(e);
    return false;
  }
};

export const logOutUser = (navigate: NavigateFunction) => {
  return async (dispatch: Dispatch) => {
    try {
      // const response = await AuthApiServices.logoutUser();
      // if (response?.status === 200) {
      //   dispatch({
      //     type: LOGIN_REDUX_CONSTANTS.LOGOUT_USER_ACTION,
      //   });
      //   history.push(ROUTE_CONSTANTS_VARIABLE.LOGIN);
      //   successNotification(
      //     response.data?.message || "Logged out successfully."
      //   );
      // }
      dispatch(resetAuthStates());
      dispatch(login(false));
      dispatch({
        type: 'LOGOUT_USER',
      });
      navigate(ROUTE_CONSTANTS_VARIABLE.LOGIN);
      successNotification('Logged out successfully.');
      return true;
    } catch (e) {
      displayErrors(e);
      return false;
    }
  };
};

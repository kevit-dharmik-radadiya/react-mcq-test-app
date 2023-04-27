import { AUTH_REDUX_CONSTANTS } from "../reduxConstants/authReduxConstants";
import { displayErrors } from "../../helpers/errorNotifyHelper";
import authApiServices from "../../services/authApiServices";
import { saveAuthTokenToLocalStorage } from "../../helpers/localStorageHelper";
import { successNotification } from "../../helpers/notifyHelper";
import { ROUTE_CONSTANTS_VARIABLE } from "../../routes/Routes";

type LoginUserProps = {
  email: string;
  password: string;
};

export const loginUser = (
  { email, password }: LoginUserProps,
  navigate: any
) => {
  return async (dispatch: any) => {
    try {
      const data = {
        email: email.toLowerCase().trim(),
        password: password.trim(),
      };
      const response = await authApiServices.loginUser(data);
      if (response?.data?.success === true) {
        const { token } = response?.data?.data;
        saveAuthTokenToLocalStorage(token);
        successNotification(response?.data?.message ?? "Login successfully");
        dispatch({
          type: AUTH_REDUX_CONSTANTS.CHANGE_AUTH_STATUS,
          status: true,
        });
        navigate(ROUTE_CONSTANTS_VARIABLE.DASHBOARD);
        return true;
      } else return false;
    } catch (e) {
      displayErrors(e);
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
  navigate: any
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
          response?.data?.message ?? "Registration successfully"
        );
        navigate(ROUTE_CONSTANTS_VARIABLE.LOGIN);
        return true;
      } else return false;
    } catch (e) {
      displayErrors(e);
    }
  };
};

export const logOutUser = (navigate: any) => {
  return async (dispatch: any) => {
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
      dispatch({
        type: AUTH_REDUX_CONSTANTS.LOGOUT_USER_ACTION,
      });
      navigate(ROUTE_CONSTANTS_VARIABLE.LOGIN);
      successNotification("Logged out successfully.");
    } catch (e) {
      displayErrors(e);
    }
  };
};

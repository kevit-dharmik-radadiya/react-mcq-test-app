import { useNavigate } from "react-router-dom";
import { saveAuthTokenToLocalStorage } from "../../helpers/localStorageHelper";
import { successNotification } from "../../helpers/notifyHelper";
import authApiServices from "../../services/authApiServices";
import { AUTH_REDUX_CONSTANTS } from "../reduxConstants/authReduxConstants";
import { ROUTE_CONSTANTS_VARIABLE } from "../../routes/Routes";
import { displayErrors } from "../../helpers/errorNotifyHelper";

type LoginUserProps = {
  email: string;
  password: string;
};

export const loginUser = ({ email, password }: LoginUserProps) => {
  const navigate = useNavigate();
  return async (dispatch: any) => {
    try {
      const data = {
        email: email.toLowerCase().trim(),
        password: password.trim(),
      };
      const response = await authApiServices.loginUser(data);

      if (response?.status === 200) {
        const { token } = response?.data?.data;
        saveAuthTokenToLocalStorage(token);
        successNotification(response?.data?.message ?? "Login successfully.");
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

// export const logOutUser = (history: any) => {
//   return async (dispatch: any) => {
//     try {
//       const response = await AuthApiServices.logoutUser();
//       if (response?.status === 200) {
//         dispatch({
//           type: LOGIN_REDUX_CONSTANTS.LOGOUT_USER_ACTION,
//         });
//         history.push(ROUTE_CONSTANTS_VARIABLE.LOGIN);
//         successNotification(
//           response.data?.message || "Logged out successfully."
//         );
//       }
//     } catch (e) {
//       displayErrors(e);
//     }
//   };
// };
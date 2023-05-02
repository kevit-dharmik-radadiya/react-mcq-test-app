import { displayErrors } from "../../helpers/errorNotifyHelper";
import userApiServices from "../../services/userService";
import { USER_REDUX_CONSTANTS } from "../reduxConstants/userReduxConstants";

type UserProps = {
  id: string;
};

export const getUserDetails = ({ id }: UserProps) => {
  return async (dispatch: any) => {
    try {
      const response = await userApiServices.getUserDetails(id);
      if (response?.data?.success === true) {
        dispatch({
          type: USER_REDUX_CONSTANTS.GET_USER_DETAILS,
          status: true,
        });
        return true;
      } else return false;
    } catch (e) {
      displayErrors(e);
    }
  };
};

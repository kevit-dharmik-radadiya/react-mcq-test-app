import { displayErrors } from "../../helpers/errorNotifyHelper";
import userApiServices from "../../services/userApiService";
import { setUserDetails } from "../reducers/userSlice";

type UserProps = {
  id: string;
};

export const getUserDetails = ({ id }: UserProps) => {
  return async (dispatch: any) => {
    try {
      const response = await userApiServices.getUserDetails(id);
      if (response?.data?.success === true) {
        dispatch(setUserDetails(response?.data?.data));
        return true;
      } else return false;
    } catch (e) {
      displayErrors(e);
    }
  };
};

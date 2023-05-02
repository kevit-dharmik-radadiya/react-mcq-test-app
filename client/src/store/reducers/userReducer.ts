import { USER_REDUX_CONSTANTS } from "../reduxConstants/userReduxConstants";

interface initialReducerProps {
  userDetails: {
    email: string;
    token: string;
    userName: string;
    _id: string;
  };
}

const initialUserReducer: initialReducerProps = {
  userDetails: { email: "", token: "", userName: "", _id: "fff" },
};

export const userReducer = (
  state = initialUserReducer,
  action: { type: string; data: Record<string, any>; status?: boolean }
) => {
  switch (action?.type) {
    case USER_REDUX_CONSTANTS.GET_USER_DETAILS:
      return {
        ...state,
        userDetails: action?.data,
      };

    default:
      return state;
  }
};

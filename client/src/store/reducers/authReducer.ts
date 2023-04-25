import { AUTH_REDUX_CONSTANTS } from "../reduxConstants/authReduxConstants";

interface initialReducerProps {
  authStatus: boolean;
}

const initialAuthReducer: initialReducerProps = {
  authStatus: false,
};

export const authReducer = (
  state = initialAuthReducer,
  action: { type: string; data: Record<string, any>; status?: boolean }
) => {
  switch (action?.type) {
    case AUTH_REDUX_CONSTANTS.CHANGE_AUTH_STATUS:
      return {
        ...state,
        authStatus: action?.status,
      };

    case AUTH_REDUX_CONSTANTS.LOGOUT_USER_ACTION:
      return {
        ...state,
        authStatus: false,
      };

    default:
      return state;
  }
};

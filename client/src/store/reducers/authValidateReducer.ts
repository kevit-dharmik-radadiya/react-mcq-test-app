import { AUTH_VALIDATE_REDUX_CONSTANTS } from "../reduxConstants/authValidateReduxConstant";

interface initialReducerProps {
  email: string;
  password: string;
  username: string;
  confirmPassword: string;
  error: {
    email: {
      status: boolean;
      message: string;
    };
    password: {
      status: boolean;
      message: string;
    };
    username: {
      status: boolean;
      message: string;
    };
    confirmPassword: {
      status: boolean;
      message: string;
    };
  };
  isMatch: boolean;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

const initialAuthValidate: initialReducerProps = {
  email: "",
  password: "",
  username: "",
  confirmPassword: "",
  error: {
    email: {
      status: true,
      message: ``,
    },
    password: {
      status: true,
      message: ``,
    },
    username: {
      status: true,
      message: ``,
    },
    confirmPassword: {
      status: true,
      message: ``,
    },
  },
  isMatch: true,
  showPassword: false,
  showConfirmPassword: false,
};

export const authValidateReducer = (
  state = initialAuthValidate,
  action: { type: string; data: Record<string, any>; status?: boolean }
) => {
  console.log({ action });
  switch (action?.type) {
    case AUTH_VALIDATE_REDUX_CONSTANTS.CHANGE_AUTH_ERROR_STATUS:
      const isEmailValid = action.data.isEmailValid;
      const isPasswordValid = action.data.isPasswordValid;
      const isUsernameValid = action.data.isUsernameValid;
      const isConfirmPasswordValid = action.data.isConfirmPasswordValid;
      const isMatch = action.data.isMatch;
      return {
        ...state,
        error: {
          email: isEmailValid ?? state.error.email,
          password: isPasswordValid ?? state.error.password,
          username: isUsernameValid ?? state.error.username,
          confirmPassword:
            isConfirmPasswordValid ?? state.error.confirmPassword,
        },
        isMatch: isMatch ?? true,
      };

    case AUTH_VALIDATE_REDUX_CONSTANTS.CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.data.name]: action.data.value,
      };

    case AUTH_VALIDATE_REDUX_CONSTANTS.SHOW_PASSWORD:
      return {
        ...state,
        showPassword: action.data.showPassword,
      };

    case AUTH_VALIDATE_REDUX_CONSTANTS.SHOW_CONFIRM_PASSWORD:
      return {
        ...state,
        showConfirmPassword: action.data.showConfirmPassword,
      };

    case AUTH_VALIDATE_REDUX_CONSTANTS.IS_PASSWORD_MATCH:
      return {
        ...state,
        isMatch: action.data.isMatch,
      };

    case AUTH_VALIDATE_REDUX_CONSTANTS.RESET_STATES:
      return initialAuthValidate;

    default:
      return state;
  }
};

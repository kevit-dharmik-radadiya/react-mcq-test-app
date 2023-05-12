import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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

interface InputValuesPayload {
  name: string;
  value: string;
}

const initialValidState: initialReducerProps = {
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

const authValidateSlice = createSlice({
  name: "authValid",
  initialState: initialValidState,
  reducers: {
    setErrorStatus: (state, action) => {
      const {
        isEmailValid,
        isPasswordValid,
        isUsernameValid,
        isConfirmPasswordValid,
        isMatch,
      } = action?.payload;

      state.error = {
        email: isEmailValid ?? state.error.email,
        password: isPasswordValid ?? state.error.password,
        username: isUsernameValid ?? state.error.username,
        confirmPassword: isConfirmPasswordValid ?? state.error.confirmPassword,
      };
      state.isMatch = isMatch ?? true;
    },
    setInputValues: (
      state: Record<string, any>,
      action: PayloadAction<InputValuesPayload>
    ) => {
      const { name, value } = action?.payload;
      state[name] = value;
    },
    showPassword: (state, action: PayloadAction<string>) => {
      if (action?.payload === "confirm") {
        state.showConfirmPassword = !state.showConfirmPassword;
      } else {
        state.showPassword = !state.showPassword;
      }
    },
    isPasswordMatch: (state, action: PayloadAction<boolean>) => {
      state.isMatch = action?.payload;
    },
    resetAuthStates: (state) => {
      Object.assign(state, initialValidState);
    },
  },
});

const { reducer, actions } = authValidateSlice;

export const {
  setErrorStatus,
  setInputValues,
  showPassword,
  isPasswordMatch,
  resetAuthStates,
} = actions;

export default reducer;

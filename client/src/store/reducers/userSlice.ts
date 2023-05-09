import { createSlice } from "@reduxjs/toolkit";

interface initialReducerProps {
  userDetails: {
    email: string;
    lastLoginAt: string;
    userName: string;
    _id: string;
  };
}

const initialUserState: initialReducerProps = {
  userDetails: { email: "", lastLoginAt: "", userName: "", _id: "" },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUserDetails: (state, action: Record<string, any>) => {
      state.userDetails = action?.payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { setUserDetails } = actions;

export default reducer;

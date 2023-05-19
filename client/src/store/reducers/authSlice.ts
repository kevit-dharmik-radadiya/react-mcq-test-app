import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialReducerProps {
  authStatus: boolean;
}

const initialAuthState: InitialReducerProps = {
  authStatus: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login: (state, action: PayloadAction<boolean>) => {
      state.authStatus = action?.payload;
    },
  },
});

const { reducer, actions } = authSlice;

export const { login } = actions;

export default reducer;

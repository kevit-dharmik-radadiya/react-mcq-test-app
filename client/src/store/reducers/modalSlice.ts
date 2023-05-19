import { createSlice } from '@reduxjs/toolkit';

interface InitialReducerProps {
  index: string;
}

const initialModalState: InitialReducerProps = {
  index: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    openModal: (state, action) => {
      state.index = action.payload;
    },
    closeModal: (state) => {
      state.index = '';
    },
  },
});

const { reducer, actions } = modalSlice;

export const { openModal, closeModal } = actions;

export default reducer;

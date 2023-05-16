import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialReducerProps {
  quizDetails: {
    _id: string;
    question: string;
    number: number;
    options: { _id: string; text: string }[];
  }[];
}

const initialQuizState: InitialReducerProps = {
  quizDetails: [
    {
      _id: '0',
      question: 'Where?',
      number: 1,
      options: [{ _id: '0', text: 'Choose' }],
    },
  ],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState: initialQuizState,
  reducers: {
    setQuizDetails: (
      state,
      action: PayloadAction<{ quizDetails: InitialReducerProps['quizDetails'] }>
    ) => {
      state.quizDetails = action?.payload.quizDetails;
    },
  },
});

const { reducer, actions } = quizSlice;

export const { setQuizDetails } = actions;

export default reducer;

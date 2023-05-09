import { createSlice } from "@reduxjs/toolkit";

interface initialReducerProps {
  quizDetails: {
    _id: string;
    question: string;
    number: number;
    options: { _id: string; text: string }[];
  }[];
}

const initialQuizState: initialReducerProps = {
  quizDetails: [
    {
      _id: "0",
      question: "Where?",
      number: 1,
      options: [{ _id: "0", text: "Choose" }],
    },
  ],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialQuizState,
  reducers: {
    setQuizDetails: (state, action: Record<string, any>) => {
      state.quizDetails = action?.payload;
    },
  },
});

const { reducer, actions } = quizSlice;

export const { setQuizDetails } = actions;

export default reducer;

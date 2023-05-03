import { QUIZ_REDUX_CONSTANTS } from "../reduxConstants/quizReduxConstants";

interface initialReducerProps {
  quizDetails: {
    _id: string;
    question: string;
    number: number;
    options: { _id: string; text: string }[];
  }[];
}

const initialQuizReducer: initialReducerProps = {
  quizDetails: [
    {
      _id: "0",
      question: "Where?",
      number: 1,
      options: [{ _id: "0", text: "Choose" }],
    },
  ],
};

export const quizReducer = (
  state = initialQuizReducer,
  action: { type: string; data: Record<string, any>; status?: boolean }
) => {
  switch (action?.type) {
    case QUIZ_REDUX_CONSTANTS.GET_QUIZ_DETAILS:
      return {
        ...state,
        quizDetails: action?.data,
      };

    default:
      return state;
  }
};

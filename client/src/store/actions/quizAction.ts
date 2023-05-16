import { Dispatch } from '@reduxjs/toolkit';
import displayErrors from '../../helpers/errorNotifyHelper';
import quizApiServices from '../../services/quizApiService';
import { setQuizDetails } from '../reducers/quizSlice';

type QuizProps = {
  id: string;
};
const getQuizDetails = ({ id }: QuizProps) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await quizApiServices.getQuizDetails(id);
      if (response?.data?.success === true) {
        dispatch(setQuizDetails(response?.data?.data));
        return true;
      }
      return false;
    } catch (e) {
      displayErrors(e);
      return false;
    }
  };
};

export default getQuizDetails;

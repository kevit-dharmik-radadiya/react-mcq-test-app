import { displayErrors } from "../../helpers/errorNotifyHelper";
import quizApiServices from "../../services/quizApiService";
import { QUIZ_REDUX_CONSTANTS } from "../reduxConstants/quizReduxConstants";

type QuizProps = {
  id: string;
};

export const getQuizDetails = ({ id }: QuizProps) => {
  return async (dispatch: any) => {
    try {
      const response = await quizApiServices.getQuizDetails(id);
      if (response?.data?.success === true) {
        dispatch({
          type: QUIZ_REDUX_CONSTANTS.GET_QUIZ_DETAILS,
          data: response?.data?.data,
          status: true,
        });
        return true;
      } else return false;
    } catch (e) {
      displayErrors(e);
    }
  };
};

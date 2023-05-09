import { displayErrors } from "../../helpers/errorNotifyHelper";
import quizApiServices from "../../services/quizApiService";
import { setQuizDetails } from "../reducers/quizSlice";

type QuizProps = {
  id: string;
};

export const getQuizDetails = ({ id }: QuizProps) => {
  return async (dispatch: any) => {
    try {
      const response = await quizApiServices.getQuizDetails(id);
      if (response?.data?.success === true) {
        dispatch(setQuizDetails(response?.data?.data));
        return true;
      } else return false;
    } catch (e) {
      displayErrors(e);
    }
  };
};

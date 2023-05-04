import { QUIZ_URLS } from "../constants/urlConstants";
import ApiService from "./apiService";

const quizApiServices = {
  getQuizDetails: (id: string) =>
    ApiService.getData(`${QUIZ_URLS.GET_QUIZ}/${id}`),
};
export default quizApiServices;

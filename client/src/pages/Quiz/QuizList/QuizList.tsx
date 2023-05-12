import _ from "lodash";
import { NavLink, useParams } from "react-router-dom";
import India from "../../../assets/images/thumb/quiz-english/India.png";
import IndiaForeground from "../../../assets/images/thumb/quiz-english/India-Foreground.png";
import { PlayCircleOutlined, Visibility } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import CustomModal from "../../../components/Modal/Modal";
import { useAppDispatch } from "../../../app/hook";
import { openModal } from "../../../store/reducers/modalSlice";
import { useEffect, useState } from "react";
import ApiService from "../../../services/apiService";
import { QUIZ_URLS } from "../../../constants/urlConstants";
import QuizListSkeleton from "./QuizListSkeleton";

interface QuizList {
  _id: string;
  language: string;
  testName: string;
}

const initializeValue: QuizList = {
  _id: "",
  language: "",
  testName: "",
};

const QuizList = () => {
  const dispatch = useAppDispatch();
  const { language } = useParams<{ language: string }>();
  const [quizList, setQuizList] = useState<QuizList[]>([initializeValue]);

  useEffect(() => {
    const getQuizListByLanguages = async () => {
      const response = await ApiService.getData(
        `${QUIZ_URLS.GET_QUIZ_LIST}?language=${_.capitalize(language)}`
      );
      setQuizList(response?.data?.data);
    };
    getQuizListByLanguages();
  }, []);

  return (
    <div className="quiz-list">
      <CustomModal id="card" title="India" size="large">
        <Box className="text-center">
          <img src={India} alt="India" width="70%" />
          <p className="text-secondary">
            India is a country in South Asia, it is the seventh-largest country
            and the second most populated country in the world.
          </p>
          <p className="text-secondary mt-3">
            India is a land of incredible diversity, both in its people and its
            landscapes. From the snow-capped peaks of the Himalayas to the
            tropical beaches of Goa, India is a country of breathtaking beauty.
            But it is the people of India who truly make it a beautiful place
          </p>
          <a className="flex-center text-light-b small cursor-pointer mt-4 medium">
            <span className="lh-0 mr-1">
              <PlayCircleOutlined fontSize="large" />
            </span>
            Start Now
          </a>
        </Box>
      </CustomModal>
      <h2 className="mt-0">{_.capitalize(language)} Quiz</h2>
      <p className="text-secondary">
        Below you can find list of an {_.capitalize(language)} language quiz
      </p>
      <div className="quiz-cards">
        {quizList[0]._id === "" ? (
          <>
            <QuizListSkeleton />
            <QuizListSkeleton />
            <QuizListSkeleton />
          </>
        ) : (
          quizList.map((quiz) => (
            <div className="card" key={quiz._id}>
              <div className="card-thumb">
                <img src={India} alt="India" className="w-100" />
                <IconButton
                  color="primary"
                  aria-label="Left"
                  size="small"
                  onClick={() => dispatch(openModal("card"))}
                  className="card-view"
                >
                  <Visibility fontSize="small" />
                </IconButton>
              </div>
              <div className="card-content">
                <h3 className="text-primary title f-500 text-ellipsis">
                  {quiz.testName}
                </h3>
                <p className="text-secondary small text-ellipsis-3">
                  India is a country in South Asia, it is the seventh-largest
                  country and the second most populated country in the world.
                </p>
                <div>
                  <NavLink
                    to={quiz._id}
                    className="card-action text-light-b small cursor-pointer mt-3 text-decoration-none"
                  >
                    <span className="lh-0">
                      <PlayCircleOutlined fontSize="medium" />
                    </span>
                    Start Now
                  </NavLink>
                </div>
                <div className="image-foreground">
                  <img
                    src={IndiaForeground}
                    alt="India Foreground"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default QuizList;

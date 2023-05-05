import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { getQuizDetails } from "../../../store/actions/quizAction";
import Button from "../../../components/Button/Button";
import ApiService from "../../../services/apiService";
import { QUIZ_URLS } from "../../../constants/urlConstants";
import { ROUTE_CONSTANTS_VARIABLE } from "../../../constants/routeConstants";
import RadioButtonGroup from "../../../components/RadioButtonGroup/RadioButtonGroup";
import QuizSkeleton from "./QuizSkeleton";

interface QuizData {
  questionId: string;
  answerId: string;
}

const QuizBegan = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isSelected, setIsSelected] = useState<boolean>(true);
  const [quizData, setQuizData] = useState<QuizData[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const quizDetails: Record<string, any> = useAppSelector(
    ({ quizReducer }: Record<string, any>) => quizReducer?.quizDetails ?? {}
  );

  useEffect(() => {
    const languageID = id ?? "";
    dispatch(getQuizDetails({ id: languageID }));
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      const data = {
        testId: id,
        testData: quizData,
      };
      const submitQuiz = async () => {
        const response = await ApiService.postData(
          `${QUIZ_URLS.SUBMIT_QUIZ}`,
          data
        );
        if (response?.data?.success) {
          navigate(`${ROUTE_CONSTANTS_VARIABLE.SUBMISSIONS}`);
        }
      };
      submitQuiz();
    }
  }, [isSubmitted]);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption((event.target as HTMLInputElement).value);
  };

  const onClickNext = (index: number) => {
    if (!selectedOption) {
      setIsSelected(false);
      return;
    }

    if (!quizData[index]) {
      setQuizData((prev) => {
        return [
          ...prev,
          { questionId: quizDetails[index]._id, answerId: selectedOption },
        ];
      });
    } else {
      setQuizData((prev) =>
        prev.map((obj) =>
          obj.questionId === quizDetails[index]._id
            ? { ...obj, answerId: selectedOption }
            : obj
        )
      );
    }

    setIsSelected(true);
    if (index === quizDetails.length - 1) {
      setIsSubmitted((prev) => !prev);
      return;
    }
    setSelectedOption("");
    if (quizData[index + 1]) {
      setSelectedOption(quizData[index + 1].answerId);
    }
    setIndex((prev) => prev + 1);
  };

  const onClickPrevious = (index: number) => {
    setIsSelected(true);
    setSelectedOption(quizData[index - 1].answerId);
    setIndex((prev) => prev - 1);
  };

  return (
    <div className="quiz-began p-24">
      <h2 className="text-primary mt-0">General Knowledge</h2>
      {quizDetails[0]._id === "0" ? (
        <QuizSkeleton />
      ) : (
        <div className="quiz-began_box mt-3">
          <div className="question text-light-b f-500">
            <span className="text-primary bold mx-1">
              {quizDetails[index].number}.
            </span>
            {quizDetails[index].question}
          </div>
          <div className="options">
            <RadioButtonGroup
              value={selectedOption}
              onChange={handleRadioChange}
              options={quizDetails[index].options}
              className="option grid-lg-6 grid-md-12"
            />
          </div>
          <div className="error text-danger small mx-1 mt-2">
            {!isSelected && "Please select an option"}
          </div>
          <div className="controls text-center mt-4">
            <div className="text-primary text-body bold">
              <span>{quizDetails[index].number}</span> /{" "}
              <span>{quizDetails.length}</span>
            </div>
            <div className="mt-3">
              <IconButton
                color="primary"
                aria-label="Left"
                size="small"
                sx={{
                  border: "2px solid #00a783",
                  mr: "10px",
                }}
                disabled={index <= 0 && true}
                onClick={() => onClickPrevious(index)}
              >
                <ArrowBackIosNew fontSize="inherit" />
              </IconButton>
              {index === quizDetails.length - 1 ? (
                <Button variant="outlined" onClick={() => onClickNext(index)}>
                  Submit
                </Button>
              ) : (
                <IconButton
                  color="primary"
                  aria-label="Left"
                  size="small"
                  sx={{
                    border: "2px solid #00a783",
                  }}
                  onClick={() => onClickNext(index)}
                >
                  <ArrowForwardIos fontSize="inherit" />
                </IconButton>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizBegan;

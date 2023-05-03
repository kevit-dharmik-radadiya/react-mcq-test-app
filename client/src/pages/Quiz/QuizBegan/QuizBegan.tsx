import { useEffect, useState } from "react";
import ApiService from "../../../services/apiService";
import { QUIZ_URLS } from "../../../constants/urlConstants";
import { useParams } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import CustomButton from "../../../components/Button/Button";

interface Quiz {
  _id: string;
  language: string;
}

const initializeValue: Quiz = {
  _id: "",
  language: "Select",
};

const QuizBegan = () => {
  const [quiz, setQuiz] = useState<Quiz[]>([initializeValue]);
  const [lastindex, setLastindex] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getQuiz = async () => {
      const response = await ApiService.getData(`${QUIZ_URLS.GET_QUIZ}/${id}`);
      setQuiz(response?.data?.data);
    };
    getQuiz();
  }, []);

  return (
    <div className="quiz-began">
      <h2 className="text-primary">General Knowledge</h2>
      <div className="quiz-began_box">
        <div className="question text-light-b">
          <span className="text-primary bold mx-1">5.</span> Who was the first
          Prime Minister of India?
        </div>
        <div className="options">
          <FormControl sx={{ width: "auto" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="controls text-center mt-4">
          <div className="text-primary text-body bold">
            <span>1</span> / <span>5</span>
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
              disabled={false}
            >
              <ArrowBackIosNew fontSize="inherit" />
            </IconButton>
            {!lastindex ? (
              <IconButton
                color="primary"
                aria-label="Left"
                size="small"
                sx={{
                  border: "2px solid #00a783",
                }}
                disabled={false}
              >
                <ArrowForwardIos fontSize="inherit" />
              </IconButton>
            ) : (
              <CustomButton variant="outlined">Submit</CustomButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizBegan;

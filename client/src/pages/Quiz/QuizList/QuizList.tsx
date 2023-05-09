import _ from "lodash";
import { useParams } from "react-router-dom";
import India from "../../../assets/images/thumb/quiz-english/India.png";
import IndiaForeground from "../../../assets/images/thumb/quiz-english/India-Foreground.png";
import { PlayCircleOutlined, Visibility } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import CustomModal from "../../../components/Modal/Modal";
import { useAppDispatch } from "../../../app/hook";
import { openModal } from "../../../store/reducers/modalSlice";

const QuizList = () => {
  const dispatch = useAppDispatch();
  const { language } = useParams<{ language: string }>();
  return (
    <div className="quiz-list p-24">
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
      <div className="quiz-cards">
        <div className="card">
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
            <h3 className="text-primary title f-500">India</h3>
            <p className="text-secondary small text-ellipsis-3">
              India is a country in South Asia, it is the seventh-largest
              country and the second most populated country in the world.
            </p>
            <div>
              <a className="card-action text-light-b small cursor-pointer mt-3">
                <span className="lh-0">
                  <PlayCircleOutlined fontSize="medium" />
                </span>
                Start Now
              </a>
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
        <div className="card">
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
            <h3 className="text-primary title f-500">India</h3>
            <p className="text-secondary small text-ellipsis-3">
              India is a country in South Asia, it is the seventh-largest
              country and the second most populated country in the world.
            </p>
            <div>
              <a className="card-action text-light-b small cursor-pointer mt-3">
                <span className="lh-0">
                  <PlayCircleOutlined fontSize="medium" />
                </span>
                Start Now
              </a>
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
      </div>
    </div>
  );
};

export default QuizList;

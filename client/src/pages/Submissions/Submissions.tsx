import { Box, Tooltip, Zoom } from "@mui/material";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ApiService from "../../services/apiService";
import { QUIZ_URLS } from "../../constants/urlConstants";
import SubmissionsSkeleton from "./SubmissionsSkeleton";

const Submissions = () => {
  const [score, setScore] = useState([]);

  useEffect(() => {
    const getScore = async () => {
      const response = await ApiService.getData(`${QUIZ_URLS.GET_SCORE}`);
      setScore(response?.data?.data.reverse());
    };
    getScore();
  }, []);

  return (
    <section className="submissions p-24">
      <h2 className="text-light-b mt-0">Hey Buddy!</h2>
      <p className="text-secondary">Find your Submissions here</p>
      <Box className="submissions-content">
        {score.length <= 0 ? (
          <>
            <SubmissionsSkeleton />
            <SubmissionsSkeleton />
            <SubmissionsSkeleton />
          </>
        ) : (
          score.map((item: any) => {
            const date = new Date(item.dateTaken);
            const formattedDate = date
              .toLocaleDateString("en-GB")
              .replace(/\//g, "-");
            return (
              <Box className="submission-card" key={item._id}>
                <div>
                  <Tooltip
                    arrow
                    TransitionComponent={Zoom}
                    title={item.testDetails.testName}
                    placement="top"
                  >
                    <h3 className="text-ellipsis text-light-b subtitle m-0">
                      {item.testDetails.testName}
                    </h3>
                  </Tooltip>
                  <div className="tag">{item.testDetails.language}</div>
                  <p className="text-secondary mt-2 small">{formattedDate}</p>
                </div>
                <Box className="card-progress">
                  <CircularProgressbar
                    value={item.scoreDetails.percentage}
                    text={`${item.scoreDetails.percentage}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                      textSize: "22px",
                      pathTransitionDuration: 0.5,
                      pathColor: `#00a783`,
                      textColor: "#00a783",
                      trailColor: "#00a78321",
                    })}
                  />
                  <p className="text-primary f-500">
                    {item.scoreDetails.score}/{item.scoreDetails.testScore}
                  </p>
                </Box>
              </Box>
            );
          })
        )}
      </Box>
    </section>
  );
};

export default Submissions;

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import ApiService from "../../services/apiService";
import { QUIZ_URLS } from "../../constants/urlConstants";
import { useNavigate } from "react-router-dom";

interface Language {
  _id: string;
  language: string;
}

const initializeValue: Language = {
  _id: "",
  language: "Select",
};

const Quiz = () => {
  const [languages, setLanguages] = useState<Language[]>([initializeValue]);
  const [languageId, setLanguageId] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const getLanguages = async () => {
      const response = await ApiService.getData(`${QUIZ_URLS.GET_LANGUAGES}`);
      setLanguages(response?.data?.data);
    };
    getLanguages();
  }, []);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setLanguageId(event.target.value);
  };

  const handleClick = () => {
    navigate(languageId);
  };

  return (
    <section className="quiz p-24">
      <h2 className="text-primary my-2 mt-0">Welcome to the Quiz!</h2>
      <p className="text-secondary mw-md">
        This exam is designed to test your understanding of the subject matter
        with 5 questions that cover various aspects of the topic. The exam has a
        time limit of 10 minutes, so it is important to manage your time wisely
        to answer all the questions within the time limit.
      </p>

      <h4 className="text-placeholder medium mt-4">Instructions</h4>
      <ol className="text-placeholder small">
        <li>
          Click on the <strong className="text-primary">Let's go!</strong>{" "}
          button to begin the exam.
        </li>
        <li>Read each question carefully before answering.</li>
        <li>Write your answers in the space provided.</li>
        <li>
          You can move on to the next question once you have answered the
          current question.
        </li>
        <li>
          You can also go back to a previous question and change your answer if
          you wish.
        </li>
        <li>
          Once you have answered all the questions, click on the submit button
          to complete the exam.
        </li>
      </ol>

      <p className="text-secondary mw-md mt-4">
        Successfully completing the exam and receiving a verified certificate
        will demonstrate your knowledge and understanding of the subject matter.
        The certificate can be added to your resume or shared with potential
        employers to showcase your skills and knowledge.
      </p>
      <p className="text-secondary mw-md mt-4">
        Additionally, taking the exam can be a valuable learning experience as
        it can highlight areas where you need to improve your knowledge or
        understanding of the subject matter. <br />
        <br /> So, stay focused and motivated to do your{" "}
        <strong className="text-primary">best in the exam!</strong>
      </p>

      <FormControl sx={{ my: 3, maxWidth: 250 }}>
        <InputLabel id="demo-simple-select-label">Select Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={languageId}
          label="Select Language"
          onChange={handleChange}
        >
          {languages.map((language) => (
            <MenuItem key={language._id} value={language._id}>
              {language.language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box>
        <Button
          variant="contained"
          disabled={languageId ? false : true}
          onClick={handleClick}
        >
          Let's go!
        </Button>
      </Box>
    </section>
  );
};

export default Quiz;

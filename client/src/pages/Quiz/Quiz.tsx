import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, FormControl } from '@mui/material';
import { Language } from '@mui/icons-material';
import Button from '../../components/Button/Button';
import ApiService from '../../services/apiService';
import { QUIZ_URLS } from '../../constants/urlConstants';
import Autocomplete from '../../components/Autocomplete/Autocomplete';

interface LanguageProps {
  _id: string;
  language: string;
}

type Option = {
  label: string;
  value: string;
};

const initializeValue: Option = {
  label: '',
  value: '',
};

const Quiz = () => {
  const [languages, setLanguages] = useState<Option[]>([initializeValue]);
  const [languageId, setLanguageId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getLanguages = async () => {
      const response = await ApiService.getData(`${QUIZ_URLS.GET_LANGUAGES}`);
      const options = response?.data?.data.map((e: LanguageProps) => {
        return { label: e.language, value: e.language };
      });
      setLanguages(options);
    };
    getLanguages();
  }, []);

  const handleChange = (value: Option) => {
    setLanguageId(value ? value.value : null);
  };

  const handleClick = () => {
    navigate(languageId ?? '');
  };

  return (
    <section className="quiz">
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
          Click on the <strong className="text-primary">Let&apos;s go!</strong>{' '}
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
        <br /> So, stay focused and motivated to do your{' '}
        <strong className="text-primary">best in the exam!</strong>
      </p>

      <FormControl className="select-language">
        <Autocomplete
          id="language"
          value={languageId}
          dataOptions={languages}
          placeholder="Select Language"
          adornmentStart={Language}
          onChange={(_, value) => {
            handleChange(value);
          }}
        />
      </FormControl>
      <Box>
        <Button
          variant="contained"
          disabled={languageId === null}
          onClick={handleClick}
        >
          Let&apos;s go!
        </Button>
      </Box>
    </section>
  );
};

export default Quiz;

import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

type Option = {
  _id: string;
  text: string;
};

type RadioButtonGroupProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: Option[];
  className: string;
};

const RadioButtonGroup = (props: RadioButtonGroupProps) => {
  const { value, onChange, options, className } = props;
  return (
    <RadioGroup
      aria-labelledby="quiz-radio-buttons-group-label"
      name="radio-buttons-group"
      value={value}
      onChange={onChange}
      className={className}
    >
      {options.map((option: Option) => {
        return (
          <FormControlLabel
            key={option._id}
            value={option._id}
            control={<Radio />}
            label={option.text}
          />
        );
      })}
    </RadioGroup>
  );
};

export default RadioButtonGroup;

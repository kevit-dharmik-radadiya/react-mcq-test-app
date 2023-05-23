import { Box, Checkbox, FormControlLabel } from '@mui/material';

interface CheckboxProps {
  width?: string;
  height?: string;
  label?: string;
}

const CustomCheckbox = (props: CheckboxProps) => {
  const { width, height, label } = props;
  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={
            <Box
              component="span"
              className="checkbox"
              sx={{ width: { width }, height: { height } }}
            />
          }
          checkedIcon={
            <Box
              component="span"
              className="checkbox checked"
              sx={{ width: { width }, height: { height } }}
            />
          }
        />
      }
      label={label}
    />
  );
};

CustomCheckbox.defaultProps = {
  width: '20px',
  height: '20px',
  label: '',
};

export default CustomCheckbox;

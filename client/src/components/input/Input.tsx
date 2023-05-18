import { TextField, OutlinedTextFieldProps } from '@mui/material';

const Input = (props: OutlinedTextFieldProps) => {
  const {
    variant,
    label,
    value,
    size = 'medium',
    type,
    className,
    ...restProps
  } = props;
  return (
    <TextField
      variant={variant}
      hiddenLabel
      value={value}
      size={size}
      type={type}
      className={`input ${className}`}
      {...restProps}
    />
  );
};

export default Input;

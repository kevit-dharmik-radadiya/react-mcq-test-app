import { FC } from "react";
import { TextField, OutlinedTextFieldProps } from "@mui/material";

const Input: FC<OutlinedTextFieldProps> = ({
  variant,
  label,
  value,
  size = "medium",
  type,
  className,
  ...restProps
}) => {
  return (
    <TextField
      variant={variant}
      label={label}
      value={value}
      size={size}
      type={type}
      className={`input ${className}`}
      {...restProps}
    />
  );
};

export default Input;

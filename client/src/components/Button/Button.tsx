import { Button } from "@mui/material";
import { FC } from "react";

const CustomButton: FC<any> = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <Button className={`btn ${className ?? ""}`} {...restProps}>
      {children}
    </Button>
  );
};

export default CustomButton;

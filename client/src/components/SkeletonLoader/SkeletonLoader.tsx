import { Skeleton, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface MyComponentProps {
  iteration?: number;
  width?: number;
  height: number;
  variant?: "rounded" | "text" | "rectangular" | "circular";
  className?: string;
  sx?: SxProps;
  children?: ReactNode;
}

const SkeletonLoader = (props: MyComponentProps) => {
  const {
    iteration = 1,
    width,
    height,
    variant = "rounded",
    className,
    sx,
    children,
  } = props;
  
  const iterationCount: number[] = Array.from(
    { length: iteration },
    (_, index: number) => index
  );

  if (iteration) {
    return (
      <>
        {iterationCount.map((e) => {
          return (
            <Skeleton
              key={e}
              animation="wave"
              width={width}
              height={height}
              variant={variant}
              className={className}
              sx={sx}
            >
              {children}
            </Skeleton>
          );
        })}
      </>
    );
  }
  return (
    <Skeleton
      animation="wave"
      width={width}
      height={height}
      variant={variant}
      className={className}
      sx={sx}
    >
      {children}
    </Skeleton>
  );
};

export default SkeletonLoader;

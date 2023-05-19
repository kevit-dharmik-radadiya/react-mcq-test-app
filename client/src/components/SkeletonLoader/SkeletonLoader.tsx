import { Skeleton, SxProps } from '@mui/material';
import { ReactNode } from 'react';

interface MyComponentProps {
  iteration?: number;
  width?: number;
  height: number;
  variant?: 'rounded' | 'text' | 'rectangular' | 'circular';
  className?: string;
  sx?: SxProps;
  children?: ReactNode;
}

const SkeletonLoader = (props: MyComponentProps) => {
  const { iteration, width, height, variant, className, sx, children } = props;

  const iterationCount: number[] = Array.from(
    { length: iteration || 1 },
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

SkeletonLoader.defaultProps = {
  iteration: 1,
  variant: 'rounded',
  className: '',
  sx: {},
  children: null,
  width: undefined,
};

export default SkeletonLoader;

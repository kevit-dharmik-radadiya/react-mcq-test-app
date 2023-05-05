import { Box } from "@mui/material";
import ContentLoader from "react-content-loader";

interface LoaderProps {
  iteration: number;
  boxWidth: string;
  boxHeight: string;
  canWidth: number;
  canHeight: number;
  boxShadow: boolean;
  children: React.ReactNode;
}

const PlaceholderLoader = (props: LoaderProps) => {
  const {
    boxWidth,
    iteration,
    boxHeight,
    canWidth,
    canHeight,
    boxShadow,
    children,
  } = props;
  const iterationArray: number[] = Array.from(
    { length: iteration },
    (_, index: number) => index
  );

  return (
    <>
      {iterationArray.map((item) => {
        return (
          <Box
            key={item}
            sx={{
              maxWidth: boxWidth,
              width: "100%",
              height: boxHeight,
              boxShadow: boxShadow ? "0 0 10px #cbcbcb" : "none",
              borderRadius: "10px",
            }}
          >
            <ContentLoader
              speed={2}
              width={canWidth}
              height={canHeight}
              viewBox={`0 0 ${canWidth} ${canHeight}`}
              backgroundColor="#00a78321"
              foregroundColor="#00a78380"
            >
              {children}
            </ContentLoader>
          </Box>
        );
      })}
    </>
  );
};

export default PlaceholderLoader;

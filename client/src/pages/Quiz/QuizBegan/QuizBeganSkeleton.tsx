import { Box } from "@mui/material";
import SkeletonLoader from "../../../components/SkeletonLoader/SkeletonLoader";

const QuizBeganSkeleton = () => {
  return (
    <Box
      sx={{
        marginTop: "16px",
      }}
    >
      <Box className="d-flex">
        <SkeletonLoader width={20} height={25} />
        <SkeletonLoader className="mx-1" sx={{ width: "50%" }} height={25} />
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: "15px",
          gridTemplateColumns: { md: "repeat(2, minmax(0, 1fr))" },
          marginTop: "20px",
        }}
      >
        <SkeletonLoader height={50} iteration={4} />
      </Box>
      <Box
        sx={{
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <SkeletonLoader width={20} height={25} />
          <SkeletonLoader width={5} height={30} />
          <SkeletonLoader width={20} height={25} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginTop: "18px",
          }}
        >
          <SkeletonLoader
            variant="circular"
            width={42}
            height={42}
            iteration={2}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default QuizBeganSkeleton;

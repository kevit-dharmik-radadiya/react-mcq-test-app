import { Box } from "@mui/material";
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader";

const SubmissionsSkeleton = () => {
  return (
    <Box className="submission-card">
      <Box>
        <SkeletonLoader height={30} width={140} />
        <SkeletonLoader height={22} width={55} sx={{mt:'5px'}} />
        <SkeletonLoader height={21} width={85} sx={{mt:'8px'}} />
      </Box>
      <Box className="card-progress">
        <SkeletonLoader variant="circular" width={70} height={70} />
        <Box className="flex-center" sx={{ gap: 0.5, mt:'8px' }}>
          <SkeletonLoader width={18} height={20} />
          <SkeletonLoader width={4} height={25} />
          <SkeletonLoader width={18} height={20} />
        </Box>
      </Box>
    </Box>
  );
};

export default SubmissionsSkeleton;

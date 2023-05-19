import {
  PhotoSizeSelectActual,
  PlayCircleOutlined,
  Visibility,
} from '@mui/icons-material';
import SkeletonLoader from '../../../components/SkeletonLoader/SkeletonLoader';

const QuizListSkeleton = () => {
  return (
    <div className="card">
      <div className="card-thumb">
        <SkeletonLoader
          height={155}
          sx={{ display: 'flex', maxWidth: '100%' }}
          className="flex-center"
        >
          <PhotoSizeSelectActual className="text-primary" fontSize="large" />
        </SkeletonLoader>
        <SkeletonLoader
          variant="circular"
          width={34}
          height={34}
          className="card-view text-primary"
        >
          <Visibility fontSize="small" />
        </SkeletonLoader>
      </div>
      <div className="card-content">
        <SkeletonLoader width={120} height={30} className="mt-2" />
        <SkeletonLoader height={15} className="mt-2" iteration={3} />
        <div>
          <div className="card-action text-primary small cursor-pointer mt-3">
            <span className="lh-0">
              <PlayCircleOutlined fontSize="medium" />
            </span>
            <SkeletonLoader width={80} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizListSkeleton;

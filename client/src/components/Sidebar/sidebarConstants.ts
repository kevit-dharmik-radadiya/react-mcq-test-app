import DashboardIcon from '../../assets/images/sidebar/DashboardIcon';
import QuizIcon from '../../assets/images/sidebar/QuizIcon';
import SubmissionIcon from '../../assets/images/sidebar/SubmissionIcon';
import ROUTE_CONSTANTS_VARIABLE from '../../constants/routeConstants';

const SIDEBAR_MENU = {
  DASHBOARD: 'Dashboard',
  QUIZ: 'Quiz',
  SUBMISSIONS: 'Submissions',
};

const SIDEBAR_CONSTANTS = [
  {
    name: 'dashboard',
    label: SIDEBAR_MENU.DASHBOARD,
    icon: DashboardIcon,
    url: ROUTE_CONSTANTS_VARIABLE.DASHBOARD,
  },
  {
    name: 'quiz',
    label: SIDEBAR_MENU.QUIZ,
    icon: QuizIcon,
    url: ROUTE_CONSTANTS_VARIABLE.QUIZ,
  },
  {
    name: 'submissions',
    label: SIDEBAR_MENU.SUBMISSIONS,
    icon: SubmissionIcon,
    url: ROUTE_CONSTANTS_VARIABLE.SUBMISSIONS,
  },
];

export default SIDEBAR_CONSTANTS;

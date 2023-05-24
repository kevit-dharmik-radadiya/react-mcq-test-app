import ComponentsIcon from '../assets/images/sidebar/Components';
import DashboardIcon from '../assets/images/sidebar/DashboardIcon';
import ExploreIcon from '../assets/images/sidebar/ExploreIcon';
import NewsIcon from '../assets/images/sidebar/NewsIcon';
import PostsIcon from '../assets/images/sidebar/PostsIcon';
import QuizIcon from '../assets/images/sidebar/QuizIcon';
import SubmissionIcon from '../assets/images/sidebar/SubmissionIcon';
import ROUTE_CONSTANTS_VARIABLE from './routeConstants';

const SIDEBAR_MENU = {
  DASHBOARD: 'Dashboard',
  QUIZ: 'Quiz',
  SUBMISSIONS: 'Submissions',
  COMPONENTS: 'Components',
  EXPLORE: 'Explore',
  NEWS: 'News',
  POSTS: 'Posts',
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
  {
    name: 'components',
    label: SIDEBAR_MENU.COMPONENTS,
    icon: ComponentsIcon,
    url: ROUTE_CONSTANTS_VARIABLE.COMPONENTS,
  },
  {
    name: 'explore',
    label: SIDEBAR_MENU.EXPLORE,
    icon: ExploreIcon,
    url: ROUTE_CONSTANTS_VARIABLE.EXPLORE,
    items: [
      {
        name: 'news',
        label: SIDEBAR_MENU.NEWS,
        icon: NewsIcon,
        url: ROUTE_CONSTANTS_VARIABLE.NEWS,
      },
      {
        name: 'posts',
        label: SIDEBAR_MENU.POSTS,
        icon: PostsIcon,
        url: ROUTE_CONSTANTS_VARIABLE.POSTS,
      },
    ],
  },
];

export default SIDEBAR_CONSTANTS;

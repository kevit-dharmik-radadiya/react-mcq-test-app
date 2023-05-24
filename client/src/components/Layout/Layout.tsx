import _, { set } from 'lodash';
import Box from '@mui/material/Box';
import { ReactNode, useEffect, useState } from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Breadcrumbs,
  Drawer,
  Toolbar,
  Typography,
} from '@mui/material';
import { Notifications } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Menu from '../../assets/images/Menu';
import Profile from '../../assets/images/Profile.png';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import getUserDetails from '../../store/actions/userAction';
import { getUserIDFromLocalStorage } from '../../helpers/localStorageHelper';
import Setting from '../../assets/images/logos/Setting';
import SIDEBAR_CONSTANTS from '../../constants/sidebarConstants';
import { handleDrawerToggle } from '../../store/reducers/layoutSlice';
import { RootState } from '../../app/store';
import DashboardIcon from '../../assets/images/sidebar/DashboardIcon';
import Notification from './Notification';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [notificationDrawer, setNotificationDrawer] = useState<boolean>(false);
  const layoutConfig = useAppSelector(({ layout }: RootState) => layout ?? {});

  const dispatch = useAppDispatch();
  const location = useLocation();
  const path = location.pathname;
  const breadcrumbText: string = path.split('/')[1];
  const breadcrumbIcon =
    breadcrumbText === ''
      ? [{ icon: DashboardIcon }]
      : SIDEBAR_CONSTANTS.filter((item) => item.name === breadcrumbText);

  useEffect(() => {
    const userID = getUserIDFromLocalStorage() ?? '';
    dispatch(getUserDetails({ id: userID }));
  }, []);

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const element = event.currentTarget as HTMLElement;
    if (element.scrollTop < 2) {
      setScrollTop(element.scrollTop);
    }
  };

  const drawerWidth: number = layoutConfig.drawerCollapse ? 120 : 280;

  return (
    <Box className="layout d-flex">
      <AppBar
        className={`drawer-header ${scrollTop > 0 && 'active'}`}
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Box className="drawer-header_control">
            <Badge badgeContent={4} color="primary" className="control-icon">
              <Notifications
                className="svg-icon text-secondary"
                onClick={() => setNotificationDrawer((prev) => !prev)}
              />
              <Drawer
                anchor="right"
                open={notificationDrawer}
                onClose={() => setNotificationDrawer((prev) => !prev)}
                ModalProps={{
                  keepMounted: true,
                }}
                className="notification-drawer"
              >
                <Notification />
              </Drawer>
            </Badge>
            <Setting fill="#979797" size="1.5em" className="control-icon" />
            <Avatar alt="Profile" src={Profile} className="drawer-avatar" />
            <Box
              aria-label="open drawer"
              onClick={() => dispatch(handleDrawerToggle())}
              className="drawer-menu_icon control-icon"
            >
              <Menu fill="#979797" size="1.5em" />
            </Box>
          </Box>

          <Breadcrumbs aria-label="breadcrumb">
            <Typography className="breadcrumb text-secondary">
              {breadcrumbIcon[0].icon}
              <span className="breadcrumb-title">
                {_.capitalize(breadcrumbText)}
              </span>
            </Typography>
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        aria-label="mailbox folders"
        className="sidebar"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: drawerWidth,
        }}
      >
        <Sidebar drawerWidth={drawerWidth} />
      </Box>
      <Box
        component="main"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
        className="main scrollbar-hover"
        onScroll={handleScroll}
      >
        {children}{' '}
      </Box>
    </Box>
  );
};

export default Layout;

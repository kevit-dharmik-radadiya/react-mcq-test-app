import _ from 'lodash';
import Box from '@mui/material/Box';
import Sidebar from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import Menu from '../../assets/images/Menu';
import Profile from '../../assets/images/Profile.png';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { getUserDetails } from '../../store/actions/userAction';
import { getUserIDFromLocalStorage } from '../../helpers/localStorageHelper';
import { AppBar, Avatar, Badge, Breadcrumbs, Toolbar, Typography } from '@mui/material';
import Setting from '../../assets/images/logos/Setting';
import { Notifications } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import SIDEBAR_CONSTANTS from '../Sidebar/sidebarConstants';
import { handleDrawerToggle } from '../../store/reducers/layoutSlice';

const Layout = (props: any) => {
  const [scrollTop, setScrollTop] = useState(0);
  const layout: Record<string, any> = useAppSelector(
    ({ layout }: Record<string, any>) => layout ?? {},
  );
  const dispatch = useAppDispatch();
  const location = useLocation();
  const path = location.pathname;
  const breadcrumbText = path.split('/')[1];
  const breadcrumbIcon = SIDEBAR_CONSTANTS.filter((item) => item.name === breadcrumbText);

  useEffect(() => {
    const userID = getUserIDFromLocalStorage() ?? '';
    dispatch(getUserDetails({ id: userID }));
  }, []);

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const element = event.currentTarget as HTMLElement;
    setScrollTop(element.scrollTop);
  };

  const drawerWidth: number = layout.drawerCollapse ? 120 : 250;

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
              <Notifications className="svg-icon text-secondary" />
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
              <span className="breadcrumb-title">{_.capitalize(breadcrumbText)}</span>
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
        {props.children}
      </Box>
    </Box>
  );
};

export default Layout;

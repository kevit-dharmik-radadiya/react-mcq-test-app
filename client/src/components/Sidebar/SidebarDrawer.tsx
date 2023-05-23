import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Zoom,
} from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import LogoutIcon from '../../assets/images/sidebar/LogoutIcon';
import { logOutUser } from '../../store/actions/authAction';
import { handleCollapse } from '../../store/reducers/layoutSlice';
import { RootState } from '../../app/store';
import Company from '../../assets/images/logos/Company';
import ExpandableMenuItem from './ExpandableMenuItem ';

const SidebarDrawer = () => {
  // const userDetails: Record<string, any> = useAppSelector(
  //   ({ user }: Record<string, any>) => user?.userDetails ?? {}
  // );
  const layoutConfig = useAppSelector(({ layout }: RootState) => layout ?? {});
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Box
      className={`drawer ${layoutConfig.drawerCollapse && 'drawer-collapse'}`}
    >
      <Box>
        <Box className="company text-center lh-0">
          <Company size="50px" />
          {!layoutConfig.drawerCollapse && (
            <span className="company-text text-primary bold">uiz</span>
          )}
        </Box>
        {/* <Box className="avatar text-center">
          <Avatar className="avatar-icon bg-primary">
            {userDetails.userName.charAt(0).toUpperCase()}
          </Avatar>
          <div>
            <h3 className="m-0">{userDetails.userName}</h3>
            <p className="m-0 extra-small">Programmer</p>
          </div>
        </Box> */}
      </Box>
      <Box className="drawer-menu">
        <List>
          {/* {SIDEBAR_CONSTANTS.map((menu) => (
            <Tooltip
              key={menu.name}
              arrow
              TransitionComponent={Zoom}
              title={layoutConfig.drawerCollapse && menu.label}
              placement="right"
            >
              <ListItem
                disablePadding
                onClick={() => dispatch(handleDrawerToggle())}
                component={RouterLink}
                to={menu.url}
              >
                <ListItemButton>
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  {!layoutConfig.drawerCollapse && (
                    <ListItemText primary={menu.label} />
                  )}
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))} */}
          <ExpandableMenuItem />
        </List>
      </Box>
      <Box>
        <Divider />
        <List>
          <Tooltip
            key="logout"
            arrow
            TransitionComponent={Zoom}
            title={layoutConfig.drawerCollapse && 'Logout'}
            placement="right"
          >
            <ListItem
              disablePadding
              onClick={() => dispatch(logOutUser(navigate))}
              sx={{ my: 0, overflow: 'hidden' }}
            >
              <ListItemButton>
                <ListItemIcon>{LogoutIcon}</ListItemIcon>
                {!layoutConfig.drawerCollapse && (
                  <ListItemText primary="Logout" />
                )}
              </ListItemButton>
            </ListItem>
          </Tooltip>
        </List>
      </Box>
      <IconButton
        color="primary"
        aria-label="Left"
        size="small"
        className="collapse"
        onClick={() => dispatch(handleCollapse())}
      >
        {layoutConfig.drawerCollapse ? (
          <ArrowForwardIos fontSize="inherit" />
        ) : (
          <ArrowBackIosNew fontSize="inherit" />
        )}
      </IconButton>
    </Box>
  );
};

export default SidebarDrawer;

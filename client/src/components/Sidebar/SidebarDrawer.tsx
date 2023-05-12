import {
  Avatar,
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
} from "@mui/material";
import Company from "../../assets/images/logos/Company";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import SIDEBAR_CONSTANTS from "./sidebarConstants";
import LogoutIcon from "../../assets/images/sidebar/LogoutIcon";
import { logOutUser } from "../../store/actions/authAction";
import {
  handleCollapse,
  handleDrawerToggle,
} from "../../store/reducers/layoutSlice";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";

const SidebarDrawer = () => {
  // const userDetails: Record<string, any> = useAppSelector(
  //   ({ user }: Record<string, any>) => user?.userDetails ?? {}
  // );
  const layout: Record<string, any> = useAppSelector(
    ({ layout }: Record<string, any>) => layout ?? {}
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Box className={`drawer ${layout.drawerCollapse && "drawer-collapse"}`}>
      <Box>
        <Box className="company text-center lh-0">
          {Company}
          {!layout.drawerCollapse && (
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
          {layout.drawerCollapse
            ? SIDEBAR_CONSTANTS.map((menu) => (
                <Tooltip
                  arrow
                  TransitionComponent={Zoom}
                  title={menu.label}
                  placement="right"
                >
                  <ListItem
                    key={menu.name}
                    disablePadding
                    onClick={() => dispatch(handleDrawerToggle())}
                    component={RouterLink}
                    to={menu.url}
                  >
                    <ListItemButton>
                      <ListItemIcon>{menu.icon}</ListItemIcon>
                      {!layout.drawerCollapse && (
                        <ListItemText primary={menu.label} />
                      )}
                    </ListItemButton>
                  </ListItem>
                </Tooltip>
              ))
            : SIDEBAR_CONSTANTS.map((menu) => (
                <ListItem
                  key={menu.name}
                  disablePadding
                  onClick={() => dispatch(handleDrawerToggle())}
                  component={RouterLink}
                  to={menu.url}
                >
                  <ListItemButton>
                    <ListItemIcon>{menu.icon}</ListItemIcon>
                    {!layout.drawerCollapse && (
                      <ListItemText primary={menu.label} />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
        </List>
      </Box>
      <Box>
        <Divider />
        <List>
          <ListItem
            disablePadding
            onClick={() => dispatch(logOutUser(navigate))}
            sx={{ my: 0 }}
          >
            <ListItemButton>
              <ListItemIcon>{LogoutIcon}</ListItemIcon>
              {!layout.drawerCollapse && <ListItemText primary="Logout" />}
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <IconButton
        color="primary"
        aria-label="Left"
        size="small"
        className="collapse"
        onClick={() => dispatch(handleCollapse())}
      >
        {layout.drawerCollapse ? (
          <ArrowForwardIos fontSize="inherit" />
        ) : (
          <ArrowBackIosNew fontSize="inherit" />
        )}
      </IconButton>
    </Box>
  );
};

export default SidebarDrawer;

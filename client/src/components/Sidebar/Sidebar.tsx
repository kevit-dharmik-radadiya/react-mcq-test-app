import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import SIDEBAR_CONSTANTS from "./sidebarConstants";
import LogoutIcon from "../../assets/images/sidebar/LogoutIcon";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";
import { logOutUser } from "../../store/actions/authAction";
import { useAppDispatch, useAppSelector } from "../../app/hook";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const Sidebar = (props: Props) => {
  const userDetails: Record<string, any> = useAppSelector(
    ({ userReducer }: Record<string, any>) => userReducer?.userDetails ?? {}
  );

  const { window, drawerWidth, mobileOpen, handleDrawerToggle } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const drawer = (
    <Box className="p-24">
      <Box>
        <p className="text-primary x-large bold text-center">QuickQuiz</p>
      </Box>
      <Box className="avatar">
        <Avatar className="avatar-icon bg-primary">
          {userDetails.userName.charAt(0).toUpperCase()}
        </Avatar>
        <div>
          <h3 className="m-0">{userDetails.userName}</h3>
          <p className="m-0 extra-small">Programmer</p>
        </div>
      </Box>
      <List>
        {SIDEBAR_CONSTANTS.map((menu) => (
          <ListItem
            key={menu.name}
            disablePadding
            onClick={handleDrawerToggle}
            component={RouterLink}
            to={menu.url}
          >
            <ListItemButton>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding onClick={() => dispatch(logOutUser(navigate))}>
          <ListItemButton>
            <ListItemIcon>{LogoutIcon}</ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        className="sidebar-drawer temporary"
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        className="sidebar-drawer permanent"
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;

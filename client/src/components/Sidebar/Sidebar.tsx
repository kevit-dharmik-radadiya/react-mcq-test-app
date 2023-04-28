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
import { useAppDispatch } from "../../app/hook";

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
  const { window, drawerWidth, mobileOpen, handleDrawerToggle } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const drawer = (
    <Box sx={{ p: "24px" }}>
      <Box>
        <p className="text-primary x-large bold text-center">QuickQuiz</p>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          px: "12px",
          my: "25px",
        }}
      >
        <Avatar className="bg-primary" sx={{ width: 45, height: 45 }}>
          D
        </Avatar>
        <div>
          <h3 className="m-0">Dharmik</h3>
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
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
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
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;

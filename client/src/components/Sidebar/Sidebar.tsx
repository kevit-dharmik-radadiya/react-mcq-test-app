import Drawer from "@mui/material/Drawer";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import SidebarDrawer from "./SidebarDrawer";
import { handleDrawerToggle } from "../../store/reducers/layoutSlice";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  drawerWidth: number;
}

const Sidebar = (props: Props) => {
  const { window, drawerWidth } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const layout: Record<string, any> = useAppSelector(
    ({ layout }: Record<string, any>) => layout ?? {}
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={layout.mobileOpen}
        onClose={() => dispatch(handleDrawerToggle())}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            overflowY: "unset",
          },
        }}
        className="sidebar-drawer temporary"
      >
        <SidebarDrawer />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            overflowY: "unset",
          },
        }}
        className="sidebar-drawer permanent"
        open
      >
        <SidebarDrawer />
      </Drawer>
    </>
  );
};

export default Sidebar;

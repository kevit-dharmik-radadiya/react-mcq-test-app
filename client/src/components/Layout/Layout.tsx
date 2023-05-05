import Box from "@mui/material/Box";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import Menu from "../../assets/images/Menu";
import { useAppDispatch } from "../../app/hook";
import { getUserDetails } from "../../store/actions/userAction";
import { getUserIDFromLocalStorage } from "../../helpers/localStorageHelper";

const drawerWidth: number = 240;

const Layout = (props: any) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const userID = getUserIDFromLocalStorage() ?? "";
    dispatch(getUserDetails({ id: userID }));
  }, []);

  return (
    <Box className="layout d-flex">
      <Box
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="drawer-menu_icon"
      >
        <Menu fill={isHover ? "#00a783" : "#979797"} size="1.5em" />
      </Box>
      <Box component="nav" aria-label="mailbox folders" className="sidebar">
        <Sidebar
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>
      <Box
        component="main"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
        className="main"
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default Layout;

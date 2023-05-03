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
    <Box sx={{ display: "flex" }}>
      <Box
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        sx={{
          display: { md: "none" },
          position: "fixed",
          top: "24px",
          right: "24px",
          cursor: "pointer",
          p: "10px",
          borderRadius: "50%",
          transition: "all 0.3s ease-in-out",
          lineHeight: 0,
          "&:hover": {
            backgroundColor: "#00a78321",
          },
        }}
      >
        <Menu fill={isHover ? "#00a783" : "#979797"} size="1.5em" />
      </Box>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Sidebar
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default Layout;

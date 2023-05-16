import Drawer from '@mui/material/Drawer';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import SidebarDrawer from './SidebarDrawer';
import { handleDrawerToggle } from '../../store/reducers/layoutSlice';
import { RootState } from '../../app/store';

interface Props {
  drawerWidth: number;
}

const Sidebar = (props: Props) => {
  const { drawerWidth } = props;
  const layoutConfig = useAppSelector(({ layout }: RootState) => layout ?? {});
  const dispatch = useAppDispatch();

  return (
    <>
      <Drawer
        variant="temporary"
        open={layoutConfig.mobileOpen}
        onClose={() => dispatch(handleDrawerToggle())}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            overflowY: 'unset',
          },
        }}
        className="sidebar-drawer temporary"
      >
        <SidebarDrawer />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            overflowY: 'unset',
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

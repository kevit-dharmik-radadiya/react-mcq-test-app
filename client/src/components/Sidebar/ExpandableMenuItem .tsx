import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Zoom,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import SIDEBAR_CONSTANTS from '../../constants/sidebarConstants';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { RootState } from '../../app/store';
import { handleDrawerToggle } from '../../store/reducers/layoutSlice';

const ExpandableMenuItem = () => {
  const [openItems, setOpenItems] = useState<Array<boolean>>([]);
  const [innerItems, setInnerItems] = useState<Array<string>>([]);
  const layoutConfig = useAppSelector(({ layout }: RootState) => layout ?? {});
  const dispatch = useAppDispatch();
  const location = useLocation();
  const path = location.pathname;
  const breadcrumbText: string = path.split('/')[1];

  const handleClick = (index: number) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  useEffect(() => {
    const newInnerItems = [...innerItems];
    SIDEBAR_CONSTANTS.forEach((menu) => {
      if (!newInnerItems.includes(menu.name)) {
        newInnerItems.push(menu.name);
      }
    });

    setInnerItems(newInnerItems);
  }, [breadcrumbText]);

  useEffect(() => {
    if (innerItems.includes(breadcrumbText)) {
      const activeIndex = innerItems.indexOf(breadcrumbText);
      const newOpenItems = [...openItems];
      newOpenItems[activeIndex] = true;
      setOpenItems(newOpenItems);
    }
  }, [innerItems]);

  return (
    <>
      {SIDEBAR_CONSTANTS.map((menu, index) => {
        if (menu.items) {
          return (
            <Tooltip
              key={menu.name}
              arrow
              TransitionComponent={Zoom}
              title={layoutConfig.drawerCollapse && menu.label}
              placement="right"
            >
              <Box sx={{ my: '15px' }}>
                <ListItem
                  onClick={() => handleClick(index)}
                  disablePadding
                  className={openItems[index] ? 'active' : ''}
                  sx={{ my: 0 }}
                >
                  <ListItemButton>
                    <ListItemIcon>{menu.icon}</ListItemIcon>
                    {!layoutConfig.drawerCollapse && (
                      <>
                        <ListItemText primary={menu.label} />
                        {openItems[index] ? <ExpandLess /> : <ExpandMore />}
                      </>
                    )}
                  </ListItemButton>
                </ListItem>
                {!layoutConfig.drawerCollapse && (
                  <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
                    <List className="sub-menu">
                      {menu.items.map((item) => (
                        <ListItem
                          key={item.name}
                          disablePadding
                          onClick={() => dispatch(handleDrawerToggle())}
                          component={RouterLink}
                          to={`${menu.url}/${item.url}`}
                        >
                          <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            </Tooltip>
          );
        }

        return (
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
        );
      })}
    </>
  );
};

export default ExpandableMenuItem;

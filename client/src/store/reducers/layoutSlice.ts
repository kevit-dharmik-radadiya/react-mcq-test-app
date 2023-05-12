import { createSlice } from '@reduxjs/toolkit';

interface initialReducerProps {
  mobileOpen: boolean;
  drawerCollapse: boolean;
}

const initialLayoutState: initialReducerProps = {
  mobileOpen: false,
  drawerCollapse: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState: initialLayoutState,
  reducers: {
    handleDrawerToggle: (state) => {
      state.mobileOpen = !state.mobileOpen;
    },
    handleCollapse: (state) => {
      state.drawerCollapse = !state.drawerCollapse;
    },
  },
});

const { reducer, actions } = layoutSlice;

export const { handleDrawerToggle, handleCollapse } = actions;

export default reducer;

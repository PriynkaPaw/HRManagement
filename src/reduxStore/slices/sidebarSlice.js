import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    openSubmenu: null,
  },
  reducers: {
    toggleSubmenu: (state, action) => {
        console.log('Toggling submenu:', action.payload);

      state.openSubmenu = state.openSubmenu === action.payload ? null : action.payload;
    },
  },
});

export const { toggleSubmenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;

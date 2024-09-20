// import { createSlice } from '@reduxjs/toolkit';

// const sidebarSlice = createSlice({
//   name: 'sidebar',
//   initialState: {
//     openSubmenu: null,
//   },
//   reducers: {
//     toggleSubmenu: (state, action) => {
//         console.log('Toggling submenu:', action.payload);

//       state.openSubmenu = state.openSubmenu === action.payload ? null : action.payload;
//     },
//   },
// });

// export const { toggleSubmenu } = sidebarSlice.actions;
// export default sidebarSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialSubmenu = localStorage.getItem('openSubmenu') ? Number(localStorage.getItem('openSubmenu')) : null;

// const sidebarSlice = createSlice({
//   name: 'sidebar',
//   initialState: {
//     openSubmenu: initialSubmenu,
//   },
//   reducers: {
//     toggleSubmenu: (state, action) => {
//       console.log('Toggling submenu:', action.payload);

//       const newOpenSubmenu = state.openSubmenu === action.payload ? null : action.payload;

//       // Update the state
//       state.openSubmenu = newOpenSubmenu;

//       // Persist the state in localStorage
//       if (newOpenSubmenu !== null) {
//         localStorage.setItem('openSubmenu', newOpenSubmenu);
//       } else {
//         localStorage.removeItem('openSubmenu');
//       }
//     },
//   },
// });

// // Exporting the actions and reducer
// export const { toggleSubmenu } = sidebarSlice.actions;
// export default sidebarSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openSubmenu: null, 
  openSubmenuByHeader: null 
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSubmenu: (state, action) => {
      console.log("action.payload==========", action.payload);
      if (state.openSubmenu === action.payload) {
        state.openSubmenu = null; 
      } else {
        state.openSubmenu = action.payload; 
        if(state.openSubmenu !== null){
          state.openSubmenuByHeader =  state.openSubmenu
          console.log("state.openSubMenu")
        }
        

      }
    },
    toggleSubmenuByHeader:(state,action)=>{
      state.openSubmenuByHeader =  null

    }
  },
});

export const { toggleSubmenu, toggleSubmenuByHeader } = sidebarSlice.actions;
export default sidebarSlice.reducer;




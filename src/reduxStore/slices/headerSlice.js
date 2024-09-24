// import { createSlice } from '@reduxjs/toolkit';

// const headerSlice = createSlice({
//   name: 'header', // Ensure the slice name is 'header'
//   initialState: {
//     opensidebar: false,
//   },
//   reducers: {
//     toggleSidebar: (state) => {
//         console.log('headaer toggle state: ', state)

//       state.opensidebar = !state.opensidebar
//     },
//   },
// });

// export const { toggleSidebar } = headerSlice.actions;
// export default headerSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  opensidebar: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.opensidebar = !state.opensidebar;
    },
  },
});

export const { toggleSidebar } = headerSlice.actions;
export default headerSlice.reducer;

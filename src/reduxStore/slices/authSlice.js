import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../Reducer/authReducer";

const initialState = {
    user: null,      
    loading: false, 
    token:null, 
    error: null,     
  };
  
  // Create the login slice
  const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
        //   state.token = action.payload; 
          state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || 'Login failed';
        })


        // register User
        .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
          //   state.user = action.payload; 
            state.error = null;
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Login failed';
          });
    },
  });
  
  export const { logout } = loginSlice.actions;
  export default loginSlice.reducer;
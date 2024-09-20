import { createSlice } from '@reduxjs/toolkit';
import { addEmployee } from '../Reducer/adminReducer';
const initialState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
  },
    extraReducers: (builder) => {
      builder
        .addCase(addEmployee.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(addEmployee.fulfilled, (state, action) => {
          state.loading = false;
          console.log("action.payload", action.payload)
          state.employees = action.payload; 
          state.error = null;
        })
        .addCase(addEmployee.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || 'Login failed';
        })

}

});

export default employeeSlice.reducer;

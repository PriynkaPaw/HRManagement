import { createSlice } from '@reduxjs/toolkit';
import { addDepartment, fetchDepartmentList, updateDepartment } from '../Reducer/adminReducer';
const initialState = {
  departments: [
    // { id: 1, name: "Web Development" },
    // { id: 2, name: "Application Development" },
    // { id: 3, name: "IT Management" },
    // { id: 4, name: "Accounts Management" },
    // { id: 5, name: "Support Management" },
    // { id: 6, name: "Marketing" },
  ],
};

const departmentSlice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    // addDepartment: (state, action) => {
    //   state.departments.push(action.payload);
    // },
    // deleteDepartment: (state, action) => {
    //   state.departments = state.departments.filter(department => department.id !== action.payload);
    // },
    // updateDepartment: (state, action) => {
    //   const index = state.departments.findIndex(department => department.id === action.payload.id);
    //   if (index !== -1) {
    //     state.departments[index] = action.payload;
    //   }
    // },
  },
   extraReducers: (builder) => {
    builder
      .addCase(addDepartment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addDepartment.fulfilled, (state, action) => {
        state.loading = false;
        console.log("action.payload", action.payload)
        state.departments.push(action.payload);
        state.error = null;
      })
      .addCase(addDepartment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
      })

      // get department data

      .addCase(fetchDepartmentList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDepartmentList.fulfilled, (state, action) => {
        state.loading = false;
        state.departments = action.payload; 
      })
      .addCase(fetchDepartmentList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Update department

      .addCase(updateDepartment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateDepartment.fulfilled, (state, action) => {
        console.log("action. payload in updated department", action.payload)
        state.loading = false;
        const index = state.departments.findIndex(department => department.id === action.payload.id);
      if (index !== -1) {
        state.departments[index] = action.payload;
      }
      })
      .addCase(updateDepartment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

}
});

// export const { addDepartment, deleteDepartment, updateDepartment } = departmentSlice.actions;
export default departmentSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departments: [
    { id: 1, name: "Web Development" },
    { id: 2, name: "Application Development" },
    { id: 3, name: "IT Management" },
    { id: 4, name: "Accounts Management" },
    { id: 5, name: "Support Management" },
    { id: 6, name: "Marketing" },
  ],
};

const departmentSlice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    addDepartment: (state, action) => {
      state.departments.push(action.payload);
    },
    deleteDepartment: (state, action) => {
      state.departments = state.departments.filter(department => department.id !== action.payload);
    },
    updateDepartment: (state, action) => {
      const index = state.departments.findIndex(department => department.id === action.payload.id);
      if (index !== -1) {
        state.departments[index] = action.payload;
      }
    },
  },
});

export const { addDepartment, deleteDepartment, updateDepartment } = departmentSlice.actions;
export default departmentSlice.reducer;

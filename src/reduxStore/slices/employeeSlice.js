import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [
    {
      id: 1,
      firstname: "John",
      lastname:'Doe',
      position: "Manager",
      image: "assets/img/profiles/avatar-01.jpg",
    },
    {
      id: 2,
      firstname: "Jane",
      lastname:'Smith',
      position: "Developer",
      image: "assets/img/profiles/avatar-09.jpg",
    },
    {
      id: 3,
      firstname: "Emily",
      lastname:'Johnson',
      position: "Designer",
      image: "assets/img/profiles/avatar-10.jpg",
    },
  ],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(employee => employee.id !== action.payload);
    },
    updateEmployee: (state, action) => {
      const index = state.employees.findIndex(employee => employee.id === action.payload.id);
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
  },
});

export const { addEmployee, deleteEmployee, updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeLeaves: [
    {
      id: 1,

      leave_type: "Casual leave",
      from: "10 Jan 2019",
      to: "10 Jan 2019",
      no_of_day: "1 day",
      reason: "Going to Hospital",
      status: "new",
      approved_by: "Richard Miles",
      img_url: "assets/img/profiles/avatar-02.jpg",
    },
    {
      id: 2,

      leave_type: "Casual leave",
      from: "7 Jan 2019",
      to: "8 Jan 2019",
      no_of_day: "2 day",
      reason: "Going to Hospital",
      status: "Declined",
      img_url: "assets/img/profiles/avatar-02.jpg",
    },
    {
      id: 3,

      leave_type: "Casual leave",
      from: "30 Jan 2019",
      to: "31 Jan 2019",
      no_of_day: "2 day",
      reason: "Going to Hospital",
      status: "new",
      img_url: "assets/img/profiles/avatar-02.jpg",
    },
    {
      id: 4,

      leave_type: "Casual leave",
      from: "17 Jan 2019",
      to: "18 Jan 2019",
      no_of_day: "2 day",
      reason: "Personnal",
      status: "Approved",
      img_url: "assets/img/profiles/avatar-02.jpg",
    },
  ],
};

const EmployeeLeaveSlice = createSlice({
  name: "leaves",
  initialState,
  reducers: {
    EaddLeave: (state, action) => {
      console.log("addLeave");
      state.leaves.push(action.payload);
      console.log("action.payload: ", action.payload);
    },
    EdeleteLeave: (state, action) => {
      state.leaves = state.holidays.filter(
        (holiday) => holiday.id !== action.payload
      );
    },
    EupdateLeave: (state, action) => {
      const index = state.leaves.findIndex(
        (holiday) => holiday.id === action.payload.id
      );
      if (index !== -1) {
        state.leaves[index] = action.payload;
      }
    },
  },
});

export const { EaddLeave, EdeleteLeave, EupdateLeave } =
  EmployeeLeaveSlice.actions;
export default EmployeeLeaveSlice.reducer;

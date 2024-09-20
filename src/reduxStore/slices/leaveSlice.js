import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaves: [
    {
      id: 1,
      employee_name: "Richard Miles",
      designation: "Web Developer",
      leave_type: "Casual leave",
      from: "10 Jan 2019",
      to: "10 Jan 2019",
      no_of_day: "1 day",
      reason: "Going to Hospital",
      status: "new",
      img_url: "assets/img/profiles/avatar-10.jpg",
    },
    {
      id: 2,
      employee_name: " Rolland Webber",
      designation: "Web Developer",
      leave_type: "Medical Leave",
      from: "7 Jan 2019",
      to: "8 Jan 2019",
      no_of_day: "2 day",
      reason: "Going to Hospital",
      status: "Declined",
      img_url: "assets/img/profiles/avatar-02.jpg",
    },
    {
      id: 3,
      employee_name: "Richard Parker",
      designation: "Web Developer",
      leave_type: "Casual leave",
      from: "30 Jan 2019",
      to: "31 Jan 2019",
      no_of_day: "2 day",
      reason: "Going to Hospital",
      status: "new",
      img_url: "assets/img/profiles/avatar-09.jpg",
    },
  ],
};

const leaveSlice = createSlice({
  name: "leaves",
  initialState,
  reducers: {
    addLeave: (state, action) => {
      console.log("addLeave",action.payload);
      state.leaves.push(action.payload);
      console.log("action.payload: ", action.payload);
    },
    deleteLeave: (state, action) => {
      console.log("delete leave action", action.payload)
      state.leaves = state.leaves.filter(
        (leaves) => leaves.id !== action.payload
      );
    },
    updateLeave: (state, action) => {
    
      const index = state.leaves.findIndex(
        (leaves) => leaves.id === action.payload.id
      );
      if (index !== -1) {
        state.leaves[index] = action.payload;
      }
    },
  },
});

export const { addLeave, deleteLeave, updateLeave } = leaveSlice.actions;
export default leaveSlice.reducer;

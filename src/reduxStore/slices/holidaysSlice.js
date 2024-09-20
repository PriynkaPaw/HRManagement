import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  holidays: [
    {
      id: 1,
      title: "New Year",
      holiday_date: "1 Jan 2019",
      Day: "	Sunday	",
    },
    {
      id: 2,
      title: "Good Friday",
      holiday_date: "14 Apr 2019",
      Day: "	Sunday	",
    },
    {
      id: 3,
      title: "May Day",
      holiday_date: "1 May 2019",
      Day: "	Sunday	",
    },
  ],
};

const holidaySlice = createSlice({
  name: "holiday",
  initialState,
  reducers: {
    addHoliday: (state, action) => {
      console.log("addHoliday");
      state.holidays.push(action.payload);
      console.log("action.payload: ", action.payload);
    },
    deleteHoliday: (state, action) => {
      state.holidays = state.holidays.filter(
        (holiday) => holiday.id !== action.payload
      );
    },
    updateHoliday: (state, action) => {
      console.log("holiday edit slice",action.payload)
      const index = state.holidays.findIndex(
        (holiday) => holiday.id === action.payload.id
      );
      if (index !== -1) {
        state.holidays[index] = action.payload;
      }
    },
  },
});

export const { addHoliday, deleteHoliday, updateHoliday } =
  holidaySlice.actions;
export default holidaySlice.reducer;

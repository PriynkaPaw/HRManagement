import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  attendenceAdmin: [
    {
      id: 1,
      employee_name: "John Doe",
      img_url: "assets/img/profiles/avatar-02.jpg",
      attendance: {
        day1: "present",
        day2: "absent",
        day3: "present",
        day4: "present",

        day5: "present",
        day6: "present",
        day7: "present",
        day8: "present",
        day9: "present",
        day10: "present",
        day11: "present",
        day12: "present",
        day13: "present",
        day14: "present",
        day15: "absent",
        day16: "present",
        day17: "present",
        day18: "present",
        day19: "present",
        day20: "absent",
        day21: "present",
        day22: "present",
        day23: "present",
        day23: "present",
        day24: "present",
        day25: "present",
        day26: "present",
        day27: "present",
        day28: "present",
        day29: "present",
        day30: "present",
        day31: "present",
      },
    },
  ],
};

const AttendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    setAttendance: (state, action) => {
      state.attendenceAdmin = action.payload;
    },
    markAttendance: (state, action) => {
      const { employeeId, day, status } = action.payload;
      const employee = state.employees.find((emp) => emp.id === employeeId);
      if (employee) {
        employee.attendance[day] = status;
      }
    },
  },
});

export const { setAttendance, markAttendance } = AttendanceSlice.actions;

export default AttendanceSlice.reducer;

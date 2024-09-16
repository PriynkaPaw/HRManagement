import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import headerReducer from "./slices/headerSlice";
import employeeReducer from "./slices/employeeSlice";
import holidayReducer from "./slices/holidaysSlice";
import leaveReducer from "./slices/leaveSlice";
import employeeLeaveReducer from "./slices/employeeLeaveSlice";
import attendanceReducer from "./slices/attendanceSlice";
const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    header: headerReducer,
    employee: employeeReducer,
    holiday: holidayReducer,
    leave: leaveReducer,
    employeeLeave: employeeLeaveReducer,
    attendance: attendanceReducer,
  },
});

export default store;

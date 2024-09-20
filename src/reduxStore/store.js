

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'; 
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import sidebarReducer from "./slices/sidebarSlice";
import headerReducer from "./slices/headerSlice";
import employeeReducer from "./slices/employeeSlice";
import holidayReducer from "./slices/holidaysSlice";
import leaveReducer from "./slices/leaveSlice";
import employeeLeaveReducer from "./slices/employeeLeaveSlice";
import attendanceReducer from "./slices/attendanceSlice";
import departmentReducer from "./slices/departmentSlice"
import authReducer from "./slices/authSlice";
const persistConfig = {
  key: 'root', 
  storage,
};

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  header: headerReducer,
  employee: employeeReducer,
  holiday: holidayReducer,
  leave: leaveReducer,
  employeeLeave: employeeLeaveReducer,
  attendance: attendanceReducer,
  department : departmentReducer,
  auth :authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor1 = persistStore(store);

// export default store;



















// import { configureStore } from "@reduxjs/toolkit";
// import sidebarReducer from "./slices/sidebarSlice";
// import headerReducer from "./slices/headerSlice";
// import employeeReducer from "./slices/employeeSlice";
// import holidayReducer from "./slices/holidaysSlice";
// import leaveReducer from "./slices/leaveSlice";
// import employeeLeaveReducer from "./slices/employeeLeaveSlice";
// import attendanceReducer from "./slices/attendanceSlice";
// const store = configureStore({
//   reducer: {
//     sidebar: sidebarReducer,
//     header: headerReducer,
//     employee: employeeReducer,
//     holiday: holidayReducer,
//     leave: leaveReducer,
//     employeeLeave: employeeLeaveReducer,
//     attendance: attendanceReducer,
//   },
// });

// export default store;



import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouterPaths } from "./paths";
import { RouterPathName } from "./config";
import ProtectedRoute from "./ProtectedRoute";

function RouterApp() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
          
            <Route
              path={RouterPathName.login}
              element={<RouterPaths.Login />}
            />
            <Route path={RouterPathName.otp} element={<RouterPaths.OTP />} />
            <Route
              path={RouterPathName.signup}
              element={<RouterPaths.Signup />}
            />
            <Route
              path={RouterPathName.lockScreen}
              element={<RouterPaths.LockScreen />}
            />
            <Route
              path={RouterPathName.forgotPassword}
              element={<RouterPaths.ForgotPassword />}
            />
            <Route
              path={RouterPathName.jobList}
              element={<RouterPaths.JobList />}
            />

            {/* Protected Routes  */}

            <Route element={<ProtectedRoute />}>
              <Route
                path={RouterPathName.dashboard}
                element={<RouterPaths.Dashboard />}
              />
              <Route
                path={RouterPathName.allEmployee}
                element={<RouterPaths.AllEmployee />}
              />
              <Route
                path={RouterPathName.addEmployee}
                element={<RouterPaths.AddEmployee />}
              />
              <Route
                path={RouterPathName.holidayList}
                element={<RouterPaths.HolidayList />}
              />
              <Route
                path={RouterPathName.adminLeave}
                element={<RouterPaths.AdminLeave />}
              />

              <Route
                path={RouterPathName.employeeLeave}
                element={<RouterPaths.EmployeeLeave />}
              />
              <Route
                path={RouterPathName.adminAttendence}
                element={<RouterPaths.AdminAttendence />}
              />

              <Route
                path={RouterPathName.employeeAttendence}
                element={<RouterPaths.EmployeeAttendence />}
              />
              <Route
                path={RouterPathName.departments}
                element={<RouterPaths.Departments />}
              />
              <Route
                path={RouterPathName.designations}
                element={<RouterPaths.Designations />}
              />
              <Route
                path={RouterPathName.timesheet}
                element={<RouterPaths.Timesheet />}
              />
              <Route
                path={RouterPathName.shiftScheduling}
                element={<RouterPaths.ShiftScheduling />}
              />
              <Route
                path={RouterPathName.shiftList}
                element={<RouterPaths.ShiftList />}
              />
              <Route
                path={RouterPathName.overtime}
                element={<RouterPaths.Overtime />}
              />
              <Route
                path={RouterPathName.profile}
                element={<RouterPaths.Profile />}
              />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default RouterApp;
